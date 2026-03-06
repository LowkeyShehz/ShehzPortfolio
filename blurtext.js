class BlurText {
    constructor(element, options = {}) {
        this.element = element;
        // Use provided text or fallback to the element's inner text
        this.text = options.text || element.textContent.trim();

        // Delay translates to a stagger step in GSAP (.05s = 50ms)
        this.delay = options.delay !== undefined ? options.delay : 50;
        this.animateBy = options.animateBy || 'words'; // 'words' or 'letters'
        this.direction = options.direction || 'top'; // 'top' or 'bottom'
        this.threshold = options.threshold || 0.1;
        this.rootMargin = options.rootMargin || '0px';
        this.stepDuration = options.stepDuration || 0.35; // Duration per step

        // Clear original text
        this.element.textContent = '';
        this.element.style.display = 'flex';
        this.element.style.flexWrap = 'wrap';
        this.element.style.justifyContent = window.getComputedStyle(this.element).justifyContent || 'inherit'; // maintain parent alignment

        this.spans = [];
        this.buildSpans();
        this.setupObserver();
    }

    buildSpans() {
        const elements = this.animateBy === 'words'
            ? this.text.replace(/\s+/g, ' ').trim().split(' ')
            : this.text.replace(/\s+/g, ' ').trim().split('');

        elements.forEach((segment, index) => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.style.willChange = 'transform, filter, opacity';

            // Initial snapshot values
            const startY = this.direction === 'top' ? -50 : 50;

            gsap.set(span, {
                filter: 'blur(10px)',
                opacity: 0,
                y: startY
            });

            // Handle explicit spaces if animating by letters
            span.textContent = segment === ' ' ? '\u00A0' : segment;

            this.element.appendChild(span);
            this.spans.push(span);

            // If animating by words, the split removes the spaces, so we must add them back
            if (this.animateBy === 'words' && index < elements.length - 1) {
                const spaceSpan = document.createElement('span');
                spaceSpan.style.display = 'inline-block';
                spaceSpan.innerHTML = '&nbsp;';
                this.element.appendChild(spaceSpan);
            }
        });
    }

    setupObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    this.animate();
                    observer.unobserve(this.element);
                }
            },
            { threshold: this.threshold, rootMargin: this.rootMargin }
        );
        observer.observe(this.element);

        // If the element is ALREADY in viewport when the observer is first attached,
        // the IntersectionObserver callback won't fire immediately. Trigger manually.
        const rect = this.element.getBoundingClientRect();
        const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (alreadyInView) {
            this.animate();
            observer.unobserve(this.element);
        }
    }

    animate() {
        // The React version has a midpoint snapshot
        const midY = this.direction === 'top' ? 5 : -5;

        gsap.to(this.spans, {
            keyframes: [
                { filter: 'blur(5px)', opacity: 0.5, y: midY, duration: this.stepDuration },
                { filter: 'blur(0px)', opacity: 1, y: 0, duration: this.stepDuration }
            ],
            // Delay between each word/letter starting
            stagger: this.delay / 1000,
            ease: 'power2.out',
            onComplete: () => {
                if (this.options?.onAnimationComplete) {
                    this.options.onAnimationComplete();
                }
            }
        });
    }
}

// Auto-initialize any element with the 'blur-text' class
window.initBlurText = () => {
    const blurElements = document.querySelectorAll('.blur-text:not(.blur-inited)');
    if (typeof gsap !== 'undefined') {
        blurElements.forEach(el => {
            el.classList.add('blur-inited');
            new BlurText(el, {
                delay: parseInt(el.dataset.delay || (el.dataset.animateBy === 'letters' ? 30 : 100)),
                animateBy: el.dataset.animateBy || 'words',
                direction: el.dataset.direction || 'top',
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Small timeout to let fonts/layout settle before measuring positions
    setTimeout(window.initBlurText, 80);
});
