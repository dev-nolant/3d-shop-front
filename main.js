// Parallax movements
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const sizes_active = document.querySelector('.sizes button.active');
// Animations
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.0s ease';
    sneaker.style.transform = 'translateZ(150px)';
    title.style.transform = 'translateZ(130px)';
    description.style.transform = 'translateZ(110px)';
    sizes.style.transform = 'translateZ(90px)';
    purchase.style.transform = 'translateZ(70px)';
    
    
})

container.addEventListener('mouseleave', (e) => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'all 0.5s ease';
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
})

