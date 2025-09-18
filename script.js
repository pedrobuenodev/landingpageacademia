// IronPulse — interactions (parallax, reveal on scroll, nav toggle, floating elements)
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      nav.style.display = open ? 'flex' : '';
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Parallax background
  const bg = document.querySelector('[data-parallax]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (bg){
      bg.style.transform = `translateY(${y * 0.2}px) scale(1.02)`;
    }
    // Floating SVGs drift upward slightly with scroll
    document.querySelectorAll('.floater').forEach((el, i) => {
      const speed = 0.08 + i * 0.04;
      el.style.transform = `translateY(${-y * speed}px)`;
    });
  }, { passive:true });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Carousel logic
const track = document.querySelector('.carousel-track');
if(track){
  const slides = Array.from(track.children);
  let index = 0;
  const updateCarousel = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };
  document.querySelector('.carousel-btn.next').addEventListener('click', ()=>{
    index = (index+1) % slides.length;
    updateCarousel();
  });
  document.querySelector('.carousel-btn.prev').addEventListener('click', ()=>{
    index = (index-1+slides.length) % slides.length;
    updateCarousel();
  });
}

// Smooth scroll for "Quero conhecer"
const startBtn = document.getElementById('startBtn');
if(startBtn){
  startBtn.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#sobre').scrollIntoView({behavior:'smooth'});
  });
}


// Smooth scroll triggered by hero primary CTA
document.querySelectorAll('.hero-cta').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const href = btn.getAttribute('href');
    if (href && href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});

// Carousel buttons
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel__track');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const step = () => Math.min(track.clientWidth * 0.9, 480 + 12); // one image width-ish

  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior:'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left:  step(), behavior:'smooth' }));
});


// Intro screen logic
const intro = document.getElementById('intro');
if(intro){
  document.body.classList.add('locked');
  const btn = intro.querySelector('.start-btn');
  if(btn){
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      intro.classList.add('hidden');
      document.body.classList.remove('locked');
    });
  }
}
