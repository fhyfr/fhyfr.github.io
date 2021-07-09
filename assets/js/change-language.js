// Language data
let data = {
  "english" : {
    "nav_home" : "Home",
    "nav_about" : "About",
    "nav_skills" : "Skills",
    "nav_services" : "Services",
    "nav_portfolio" : "Portfolio",
    "nav_contact" : "Contactme",
    "home_title" : "Hi, I'm Firman",
    "home_description" : "Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.",
    "contact_button" : "Contact me",
    "about_title" : "About Me",
    "about_subtitle" : "My Introduction",
    "skills_section_title" : "Skills",
    "skills_section_subtitle" : "My Technical Level",
    "qualification_section_title" : "Qualification",
    "qualification_section_subtitle" : "My Personal Journey",
    "services_section_title" : "Services",
    "services_section_subtitle" : "What i offer",
    "portfolio_section_title" : "Portfolio",
    "portfolio_section_subtitle" : "Most Recent Work",
    "testimonial_section_title" : "Testimonial",
    "testimonial_section_subtitle" : "My Client Saying",
    "contact_section_title" : "Contact Me",
    "contact_section_subtitle" : "Get in touch",
  },
  "bahasa" : {
    "nav_home" : "Beranda",
    "nav_about" : "Tentang",
    "nav_skills" : "Skill",
    "nav_services" : "Layanan",
    "nav_portfolio" : "Portofolio",
    "nav_contact" : "Kontak",
    "home_title" : "Halo, Saya Firman",
    "home_description" : "Web Developer, dengan pengetahuan luas dan pengalaman bertahun-tahun, bekerja dalam teknologi web dan desain Ui/Ux, memberikan pekerjaan yang berkualitas.",
    "contact_button" : "Hubungi saya",
    "about_title" : "Tentang saya",
    "about_subtitle" : "Perkenalkan",
    "skills_section_title" : "Skill",
    "skills_section_subtitle" : "Level teknikal",
    "qualification_section_title" : "Kualifikasi",
    "qualification_section_subtitle" : "Pengalaman saya",
    "services_section_title" : "Layanan",
    "services_section_subtitle" : "Dapatkan layanan terbaikmu",
    "portfolio_section_title" : "Portofolio",
    "portfolio_section_subtitle" : "Proyek terbaru",
    "testimonial_section_title" : "Testimoni",
    "testimonial_section_subtitle" : "Lihat apa kata pelanggan",
    "contact_section_title" : "Hubungi Saya",
    "contact_section_subtitle" : "Mari terhubung",
  }
}

// Change language function
const langEl = document.querySelector('.langWrap'),
      link = document.querySelectorAll('.lang__link'),
      navHome = document.querySelector('.nav__home'),
      navAbout = document.querySelector('.nav__about'),
      navSkills = document.querySelector('.nav__skills'),
      navServices = document.querySelector('.nav__services'),
      navPortfolio = document.querySelector('.nav__portfolio'),
      navContact = document.querySelector('.nav__contact'),
      homeTitle = document.querySelector('.home__title'),
      homeDesc = document.querySelector('.home__description'),
      aboutTitle = document.querySelector('.about__title'),
      aboutSubtitle = document.querySelector('.about__subtitle'),
      skillsTitle = document.querySelector('.skills__section-title'),
      skillsSubtitle = document.querySelector('.skills__section-subtitle'),
      qualificationTitle = document.querySelector('.qualification__section-title'),
      qualificationSubtitle = document.querySelector('.qualification__section-subtitle'),
      servicesTitle = document.querySelector('.services__section-title'),
      servicesSubtitle = document.querySelector('.services__section-subtitle'),
      portfolioTitle = document.querySelector('.portfolio__section-title'),
      portfolioSubtitle = document.querySelector('.portfolio__section-subtitle'),
      testimonialTitle = document.querySelector('.testimonial__section-title'),
      testimonialSubtitle = document.querySelector('.testimonial__section-subtitle'),
      contactTitle = document.querySelector('.contact__section-title'),
      contactSubtitle = document.querySelector('.contact__section-subtitle');

link.forEach(el => {
    el.addEventListener('click', ()=> {

        const attr = el.getAttribute('language');
        
        navHome.textContent = data[attr].nav_home;
        navAbout.textContent = data[attr].nav_about;
        navSkills.textContent = data[attr].nav_skills;
        navServices.textContent = data[attr].nav_services;
        navPortfolio.textContent = data[attr].nav_portfolio;
        navContact.textContent = data[attr].nav_contact;

        homeTitle.textContent = data[attr].home_title;
        homeDesc.textContent = data[attr].home_description;
        aboutTitle.textContent = data[attr].about_title;
        aboutSubtitle.textContent = data[attr].about_subtitle;
        skillsTitle.textContent = data[attr].skills_section_title;
        skillsSubtitle.textContent = data[attr].skills_section_subtitle;
        qualificationTitle.textContent = data[attr].qualification_section_title;
        qualificationSubtitle.textContent = data[attr].qualification_section_subtitle;
        servicesTitle.textContent = data[attr].services_section_title;
        servicesSubtitle.textContent = data[attr].services_section_subtitle;
        portfolioTitle.textContent = data[attr].portfolio_section_title;
        portfolioSubtitle.textContent = data[attr].portfolio_section_subtitle;
        testimonialTitle.textContent = data[attr].testimonial_section_title;
        testimonialSubtitle.textContent = data[attr].testimonial_section_subtitle;
        contactTitle.textContent = data[attr].contact_section_title;
        contactSubtitle.textContent = data[attr].contact_section_subtitle;
    });
});
