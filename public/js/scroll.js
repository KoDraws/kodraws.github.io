let currentSection = 0;

document.addEventListener('wheel', (e) => {
    const sections = document.querySelectorAll('.fullscreen-section');

    const delta = -e.deltaY || (e.detail);

    const nextSection = currentSection - Math.sign(delta);

    if (nextSection >= 0 && nextSection < sections.length) {
        currentSection = nextSection;
        sections[nextSection].scrollIntoView({ behavior: 'smooth' });
    }
});