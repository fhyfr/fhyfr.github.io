// Language data
let data = {
  "english" : {
    "nav_home" : "Home",
    "nav_about" : "About",
    "nav_skills" : "Skills",
    "nav_portfolio" : "Portfolio",
    "nav_contact" : "Contact",

    "home_title" : "Hi, I'm Firman",
    "home_description" : "I'm specialized in software backend development.",
    "contact_button" : "Hire me",
    "home_scroll" : "Scroll Down",

    "about_title" : "About Me",
    "about_subtitle" : "Introduction",
    "about_description" : "A highly motivated and self-learner Software Engineer who has an interest in solving problems with algorithms and code. I also use machine learning for the better future of web technology. Has experience of developing systems using PHP, Node.js, Python and other technologies",

    "skills_section_title" : "Skills",
    "skills_section_subtitle" : "My Technical Level",

    "qualification_section_title" : "Qualification",
    "qualification_section_subtitle" : "My Personal Journey",

    "portfolio_section_title" : "Portfolio",
    "portfolio_section_subtitle" : "Most Recent Work",

    "contact_section_title" : "Contact Me",
    "contact_section_subtitle" : "Get in touch",
  },
  "bahasa" : {
    "nav_home" : "Beranda",
    "nav_about" : "Tentang",
    "nav_skills" : "Skill",
    "nav_portfolio" : "Portofolio",
    "nav_contact" : "Kontak",
    
    "home_title" : "Halo, Saya Firman",
    "home_description" : "Saya seorang Software Engineer dengan spesialisasi di bidang Backend Development.",
    "contact_button" : "Terhubung",
    "home_scroll" : "Geser ke bawah",

    "about_title" : "Tentang saya",
    "about_subtitle" : "Perkenalan",
    "about_description" : "Seorang Software Engineer yang memiliki semangat tinggi untuk belajar dan memecahkan masalah dengan algoritma dan kode. Saya juga menggunakan Machine Learning untuk masa depan teknologi web yang lebih baik. Memiliki pengalaman mengembangkan sistem menggunakan PHP, Node.js, Python, dan teknologi lainnya",

    "skills_section_title" : "Skill",
    "skills_section_subtitle" : "Kemampuan",

    "qualification_section_title" : "Kualifikasi",
    "qualification_section_subtitle" : "Pengalaman",

    "portfolio_section_title" : "Portofolio",
    "portfolio_section_subtitle" : "Proyek terbaru",

    "contact_section_title" : "Kontak",
    "contact_section_subtitle" : "Mari terhubung",
  }
}

// Change language function
const langEl = document.querySelector('.langWrap'),
      link = document.querySelectorAll('.lang__link'),
      navHome = document.querySelector('.nav__home'),
      navAbout = document.querySelector('.nav__about'),
      navSkills = document.querySelector('.nav__skills'),
      navPortfolio = document.querySelector('.nav__portfolio'),
      navContact = document.querySelector('.nav__contact'),

      homeTitle = document.querySelector('.home__title'),
      homeDesc = document.querySelector('.home__description'),
      contactButton = document.getElementById('contact__button'),
      homeScrollBtn = document.querySelector('.home__scroll-name'),

      aboutTitle = document.querySelector('.about__title'),
      aboutSubtitle = document.querySelector('.about__subtitle'),
      aboutDesc = document.querySelector('.about__description'),

      skillsTitle = document.querySelector('.skills__section-title'),
      skillsSubtitle = document.querySelector('.skills__section-subtitle'),

      qualificationTitle = document.querySelector('.qualification__section-title'),
      qualificationSubtitle = document.querySelector('.qualification__section-subtitle'),

      portfolioTitle = document.querySelector('.portfolio__section-title'),
      portfolioSubtitle = document.querySelector('.portfolio__section-subtitle'),

      contactTitle = document.querySelector('.contact__section-title'),
      contactSubtitle = document.querySelector('.contact__section-subtitle');

link.forEach(el => {
  el.addEventListener('click', ()=> {

    const attr = el.getAttribute('language');
      
    navHome.textContent = data[attr].nav_home;
    navAbout.textContent = data[attr].nav_about;
    navSkills.textContent = data[attr].nav_skills;
    navPortfolio.textContent = data[attr].nav_portfolio;
    navContact.textContent = data[attr].nav_contact;

    homeTitle.textContent = data[attr].home_title;
    homeDesc.textContent = data[attr].home_description;
    contactButton.textContent = data[attr].contact_button;
    homeScrollBtn.textContent = data[attr].home_scroll;

    aboutTitle.textContent = data[attr].about_title;
    aboutSubtitle.textContent = data[attr].about_subtitle;
    aboutDesc.textContent = data[attr].about_description;

    skillsTitle.textContent = data[attr].skills_section_title;
    skillsSubtitle.textContent = data[attr].skills_section_subtitle;

    qualificationTitle.textContent = data[attr].qualification_section_title;
    qualificationSubtitle.textContent = data[attr].qualification_section_subtitle;

    portfolioTitle.textContent = data[attr].portfolio_section_title;
    portfolioSubtitle.textContent = data[attr].portfolio_section_subtitle;
    
    contactTitle.textContent = data[attr].contact_section_title;
    contactSubtitle.textContent = data[attr].contact_section_subtitle;
  });
});
