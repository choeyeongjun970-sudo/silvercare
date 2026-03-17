/* =========================================
   실버케어 파트너스 - 인터랙션 및 애니메이션 Scripts
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ===== Show Menu (Mobile) ===== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');
  
    // Validate if constant exists
    if(navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
  
    // Validate if constant exists
    if(navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  
    /* ===== Remove Menu Mobile on Link Click ===== */
    const navLink = document.querySelectorAll('.nav-link');
  
    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav-link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    };
    navLink.forEach(n => n.addEventListener('click', linkAction));
  
  
    /* ===== Change Background Header ===== */
    const scrollHeader = () => {
      const header = document.getElementById('header');
      // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
      if(this.scrollY >= 50) header.classList.add('scroll-header'); 
      else header.classList.remove('scroll-header');
    };
    window.addEventListener('scroll', scrollHeader);
  
  
    /* ===== Scroll Sections Active Link ===== */
    const sections = document.querySelectorAll('section[id]');
  
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
  
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 100,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
  
        if(sectionsClass) {
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
            sectionsClass.style.color = 'var(--pr-color)';
          } else {
            sectionsClass.classList.remove('active-link');
            sectionsClass.style.color = '';
          }
        }
      });
    };
    window.addEventListener('scroll', scrollActive);
  
  
    /* ===== Show Scroll Up Button ===== */
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById('scroll-up');
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
      if(this.scrollY >= 350) scrollUpBtn.classList.add('show-scroll');
      else scrollUpBtn.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);
  
  
    /* ===== Scroll Reveal Animations ===== */
    const fadeElements = document.querySelectorAll('.fade-in-up, .reveal');
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;
  
      fadeElements.forEach((el) => {
        const revealTop = el.getBoundingClientRect().top;
  
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
  
    // Trigger on load
    revealOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);
  
    /* ===== Contact Form Submission ===== */
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form inputs
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
  
        // In a real app, you would send this to a server.
        // For now, we simulate success.
        
        if(name && phone) {
            alert(`[접수 완료] ${name}님의 상담 신청이 정상적으로 등록되었습니다.\n입력하신 연락처(${phone})로 영업일 기준 1-2일 내에 전문 상담사가 연락드리겠습니다.`);
            contactForm.reset();
        }
      });
    }
  });
