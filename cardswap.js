/**
 * CardSwap — Vanilla JS port of the React CardSwap component.
 * Requires GSAP (already loaded on the page).
 */
class CardSwap {
    constructor(container, options = {}) {
        this.container = container;
        this.cardDistance = options.cardDistance ?? 30;
        this.verticalDistance = options.verticalDistance ?? 40;
        this.delay = options.delay ?? 3500;
        this.pauseOnHover = options.pauseOnHover ?? false;
        this.skewAmount = options.skewAmount ?? 5;
        this.easing = options.easing ?? 'elastic';
        this.onSwap = options.onSwap ?? null;

        this.cards = Array.from(container.querySelectorAll('.cs-card'));
        this.total = this.cards.length;
        this.order = this.cards.map((_, i) => i);
        this.tl = null;
        this.interval = null;

        const e = this.easing === 'elastic';
        this.cfg = e
            ? { ease: 'elastic.out(0.6,0.9)', durDrop: 2, durMove: 2, durReturn: 2, overlap: 0.9, retDelay: 0.05 }
            : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, overlap: 0.45, retDelay: 0.2 };

        this._init();
    }

    _makeSlot(i) {
        return {
            x: i * this.cardDistance,
            y: -i * this.verticalDistance,
            z: -i * this.cardDistance * 1.5,
            zIndex: this.total - i
        };
    }

    _placeNow(el, slot) {
        gsap.set(el, {
            x: slot.x, y: slot.y, z: slot.z,
            xPercent: -50, yPercent: -50,
            skewY: this.skewAmount,
            transformOrigin: 'center center',
            zIndex: slot.zIndex,
            force3D: true
        });
    }

    _swap() {
        if (this.order.length < 2) return;

        const [front, ...rest] = this.order;
        const elFront = this.cards[front];
        const newFront = this.cards[rest[0]];

        // Notify listener that the front card is changing
        if (this.onSwap) this.onSwap(newFront);

        const tl = gsap.timeline();
        this.tl = tl;
        const cfg = this.cfg;

        // Drop front card off the bottom
        tl.to(elFront, { y: '+=600', duration: cfg.durDrop, ease: cfg.ease });

        // Promote the rest up
        tl.addLabel('promote', `-=${cfg.durDrop * cfg.overlap}`);
        rest.forEach((idx, i) => {
            const el = this.cards[idx];
            const slot = this._makeSlot(i);
            tl.set(el, { zIndex: slot.zIndex }, 'promote');
            tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: cfg.durMove, ease: cfg.ease },
                `promote+=${i * 0.15}`);
        });

        // Return front card to back slot
        const backSlot = this._makeSlot(this.total - 1);
        tl.addLabel('return', `promote+=${cfg.durMove * cfg.retDelay}`);
        tl.call(() => gsap.set(elFront, { zIndex: backSlot.zIndex }), undefined, 'return');
        tl.to(elFront,
            { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: cfg.durReturn, ease: cfg.ease },
            'return');

        tl.call(() => { this.order = [...rest, front]; });
    }

    _init() {
        // Set initial positions
        this.cards.forEach((card, i) => this._placeNow(card, this._makeSlot(i)));

        this.interval = setInterval(() => this._swap(), this.delay);

        if (this.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => {
                this.tl?.pause();
                clearInterval(this.interval);
            });
            this.container.addEventListener('mouseleave', () => {
                this.tl?.play();
                this.interval = setInterval(() => this._swap(), this.delay);
            });
        }
    }

    destroy() {
        clearInterval(this.interval);
        this.tl?.kill();
    }
}

// Auto-init any element with [data-card-swap]
document.addEventListener('DOMContentLoaded', () => {

    // Elements for the synced left panel
    const featuredCover = document.getElementById('featured-cover');
    const featuredTag = document.getElementById('featured-tag');
    const featuredTitle = document.getElementById('featured-title');
    const featuredDesc = document.getElementById('featured-desc');
    const featuredLink = document.getElementById('featured-link');

    document.querySelectorAll('[data-card-swap]').forEach(el => {
        new CardSwap(el, {
            cardDistance: parseInt(el.dataset.cardDistance ?? 30),
            verticalDistance: parseInt(el.dataset.verticalDistance ?? 40),
            delay: parseInt(el.dataset.delay ?? 3500),
            pauseOnHover: el.dataset.pauseOnHover === 'true',
            skewAmount: parseFloat(el.dataset.skewAmount ?? 5),
            easing: el.dataset.easing ?? 'elastic',
            onSwap: (frontCard) => {
                if (!featuredCover) return; // Skip if we're not on the home page

                // Read data from the incoming front card
                const projectId = frontCard.dataset.projectId;
                const coverImage = frontCard.dataset.cover;
                const tagText = frontCard.querySelector('.cs-card-tag').innerText;
                const titleText = frontCard.querySelector('.cs-card-title').innerText;
                const descText = frontCard.querySelector('.cs-card-desc').innerText;

                // Simple fade out/in animation for the text content
                const textContainer = document.querySelector('.featured-text-content');

                // Animate out
                gsap.to([featuredCover, textContainer], {
                    opacity: 0,
                    y: 10,
                    duration: 0.2,
                    onComplete: () => {
                        // Update DOM
                        featuredCover.src = coverImage || `assets/images/${projectId}.png`;

                        // Fallback image handling
                        featuredCover.onerror = () => {
                            if (projectId === 'arhistory') featuredCover.src = 'assets/images/ar-1.png';
                            if (projectId === 'survival') featuredCover.src = 'assets/images/game-1.png';
                            if (projectId === 'vectorprotocol') featuredCover.src = 'assets/images/vector-1.png';
                        };

                        featuredTag.innerText = tagText;
                        featuredTitle.innerText = titleText;
                        featuredDesc.innerText = descText;
                        featuredLink.href = `project-details.html?id=${projectId}`;

                        // Animate in
                        gsap.to([featuredCover, textContainer], { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
                    }
                });
            }
        });
    });
});
