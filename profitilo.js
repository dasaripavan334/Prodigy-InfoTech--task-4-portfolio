
function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.querySelector(".right button");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight active navigation link on scroll
  window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
  
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  });
  