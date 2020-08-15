import '../sass/main.scss';
document.body.onload = () => {
  loadingEffect();
};
function loadingEffect() {
  const dv = gsap.timeline();
  dv.to('.loader_container', {
    opacity: 0,
    duration: 1,
  })
    .to('.loader_container', {
      display: 'none',
    })
    .to('.welcome_conatainer div', {
      duration: 0.9,
      text: {
        value: 'IDEAMASN',
        delimiter: '',
      },
    })
    .to('.welcome_conatainer', {
      opacity: 0,
      duration: 1,
      delay: 1,
    })
    .to('.welcome_conatainer', {
      display: 'none',
    })
    .from('.text article', {
      x: -200,
      opacity: 0,
    })
    .from('.low button', {
      scale: 0,
    });
}
