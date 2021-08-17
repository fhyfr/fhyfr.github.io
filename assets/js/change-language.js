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
    "about_info_year":"Years experience",
    "about_info_project":"Completed project",
    "about_info_company":"Companies worked",
    "about_button":"Download Resume",

    "skills_section_title" : "Skills",
    "skills_section_subtitle" : "My Technical Level",
    "skills_subtitle_1" : "More than 2 years",
    "skills_subtitle_2" : "More than 2 years",

    "qualification_section_title" : "Qualifications",
    "qualification_section_subtitle" : "My Personal Journey",
    "qualification__title_1" : "Information Systems",
    "qualification__title_2" : "High School - Science",
    "qualification__title_3" : "Junior High School",
    "btn_education" : "Education",
    "btn_work" : "Work",

    "portfolio_section_title" : "Portfolio",
    "portfolio_section_subtitle" : "Most Recent Work",
    "portfolio_description_1" : "RESTful API Dashboard for Staycation website",
    "portfolio_description_2" : "RESTful API service for Open Music Application.",
    "portfolio_description_3" : "Kasbon Kemuning Webapp and RESTful API Service. Build with Microservices Architecture",
    "portfolio_description_4" : "Responsive website to promote Umrah packages from PT. Amania Travel.",
    "demo_account" : "Demo Account",

    "tect_stack" : "Technology Stack",

    "contact_section_title" : "Contact Me",
    "contact_section_subtitle" : "Get in touch",
    "contact_location" : "Location", 
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
    "about_info_year":"Tahun pengalaman",
    "about_info_project":"Proyek selesai",
    "about_info_company":"Perusahaan",
    "about_button":"Unduh Resume",


    "skills_section_title" : "Skill",
    "skills_section_subtitle" : "Kemampuan",
    "skills_subtitle_1" : "Lebih dari 2 tahun",
    "skills_subtitle_2" : "Lebih dari 2 tahun",

    "qualification_section_title" : "Kualifikasi",
    "qualification_section_subtitle" : "Pengalaman",
    "qualification__title_1" : "Sistem Informasi",
    "qualification__title_2" : "SMA - IPA",
    "qualification__title_3" : "SMP",
    "btn_education" : "Pendidikan",
    "btn_work" : "Pekerjaan",

    "portfolio_section_title" : "Portofolio",
    "portfolio_section_subtitle" : "Proyek terbaru",
    "portfolio_description_1" : "RESTful API Dasbor untuk Website Staycation",
    "portfolio_description_2" : "RESTful API Servis untuk Aplikasi Open Music.",
    "portfolio_description_3" : "Kasbon Kemuning Webapp dan RESTful API Servis. Dibangun dengan arsitektur Microservices.",
    "portfolio_description_4" : "Website yang Responsif untuk mempromosikan paket Umrah dari PT. Amania Travel.",

    "tect_stack" : "Teknologi",
    "demo_account" : "Demo Akun",

    "contact_section_title" : "Kontak",
    "contact_section_subtitle" : "Mari terhubung",
    "contact_location" : "Lokasi",
  }
}

// Change language function
const langEl = document.querySelector('.langWrap'),
      link = document.querySelectorAll('.lang__link'),
      navHome = document.getElementById('nav__home'),
      navAbout = document.querySelectorAll('#nav__about'),
      navSkills = document.getElementById('nav__skills'),
      navPortfolio = document.querySelectorAll('#nav__portfolio'),
      navContact = document.querySelectorAll('#nav__contact'),

      homeTitle = document.querySelector('.home__title'),
      homeDesc = document.querySelector('.home__description'),
      contactButton = document.getElementById('contact__button'),
      homeScrollBtn = document.querySelector('.home__scroll-name'),

      aboutTitle = document.querySelector('.about__title'),
      aboutSubtitle = document.querySelector('.about__subtitle'),
      aboutDesc = document.querySelector('.about__description'),
      aboutInfoYear = document.getElementById('about_info_year'),
      aboutInfoProject = document.getElementById('about_info_project'),
      aboutInfoCompany = document.getElementById('about_info_company'),
      aboutButton = document.getElementById('about_button');

      skillsTitle = document.querySelector('.skills__section-title'),
      skillsSubtitle = document.querySelector('.skills__section-subtitle'),
      skillSubtitle1 = document.getElementById('skills__subtitle-1'),
      skillSubtitle2 = document.getElementById('skills__subtitle-2'),

      qualificationTitle = document.querySelector('.qualification__section-title'),
      qualificationSubtitle = document.querySelector('.qualification__section-subtitle'),
      qualificationTitle1 = document.getElementById('qualification__title-1'),
      qualificationTitle2 = document.getElementById('qualification__title-2'),
      qualificationTitle3 = document.getElementById('qualification__title-3'),
      btnEdu = document.getElementById('btn--education'),
      btnWork = document.getElementById('btn--work'),

      portfolioTitle = document.querySelector('.portfolio__section-title'),
      portfolioSubtitle = document.querySelector('.portfolio__section-subtitle'),
      techStack = document.querySelectorAll('#tech_stack'),
      portfolioDesc1 = document.getElementById('portfolio__description1'),
      portfolioDesc2 = document.getElementById('portfolio__description2'),
      portfolioDesc3 = document.getElementById('portfolio__description3'),
      portfolioDesc4 = document.getElementById('portfolio__description4'),
      demo = document.querySelectorAll('#demo_account'),
      
      contactTitle = document.querySelector('.contact__section-title'),
      contactSubtitle = document.querySelector('.contact__section-subtitle'),
      contactLoc = document.getElementById('contact_location'),

link.forEach(el => {
  el.addEventListener('click', ()=> {

    const attr = el.getAttribute('language');
      
    navHome.textContent = data[attr].nav_home;
    for(about=0 ; about < navAbout.length; about++) {
      navAbout[about].textContent = data[attr].nav_about;
    }

    navSkills.textContent = data[attr].nav_skills;
    for(portfolio=0 ; portfolio < navPortfolio.length; portfolio++) {
      navPortfolio[portfolio].textContent = data[attr].nav_portfolio;
    }

    for(contact=0 ; contact < navContact.length; contact++) {
      navContact[contact].textContent = data[attr].nav_contact;
    }

    homeTitle.textContent = data[attr].home_title;
    homeDesc.textContent = data[attr].home_description;
    contactButton.textContent = data[attr].contact_button;
    homeScrollBtn.textContent = data[attr].home_scroll;

    aboutTitle.textContent = data[attr].about_title;
    aboutSubtitle.textContent = data[attr].about_subtitle;
    aboutDesc.textContent = data[attr].about_description;
    aboutInfoYear.textContent = data[attr].about_info_year;
    aboutInfoProject.textContent = data[attr].about_info_project;
    aboutInfoCompany.textContent = data[attr].about_info_company;
    aboutButton.textContent = data[attr].about_button;

    skillsTitle.textContent = data[attr].skills_section_title;
    skillsSubtitle.textContent = data[attr].skills_section_subtitle;
    skillSubtitle1.textContent = data[attr].skills_subtitle_1;
    skillSubtitle2.textContent = data[attr].skills_subtitle_2;

    qualificationTitle.textContent = data[attr].qualification_section_title;
    qualificationSubtitle.textContent = data[attr].qualification_section_subtitle;
    qualificationTitle1.textContent = data[attr].qualification__title_1;
    qualificationTitle2.textContent = data[attr].qualification__title_2;
    qualificationTitle3.textContent = data[attr].qualification__title_3;
    btnEdu.textContent = data[attr].btn_education;
    btnWork.textContent = data[attr].btn_work;

    portfolioTitle.textContent = data[attr].portfolio_section_title;
    portfolioSubtitle.textContent = data[attr].portfolio_section_subtitle;
    portfolioDesc1.textContent = data[attr].portfolio_description_1;
    portfolioDesc2.textContent = data[attr].portfolio_description_2;
    portfolioDesc3.textContent = data[attr].portfolio_description_3;
    portfolioDesc4.textContent = data[attr].portfolio_description_4;

    
    for(i=0 ; i < techStack.length; i++) {
      techStack[i].textContent = data[attr].tect_stack;
    }

    for(x=0 ; x < demo.length; x++) {
      demo[x].textContent = data[attr].demo_account;
    }
    
    contactTitle.textContent = data[attr].contact_section_title;
    contactSubtitle.textContent = data[attr].contact_section_subtitle;
    contactLoc.textContent = data[attr].contact_location;
  });
});
