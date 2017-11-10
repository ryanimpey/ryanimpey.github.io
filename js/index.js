//Load Feather Icons
document.addEventListener("DOMContentLoaded", function() {
  feather.replace();

  //Scroll to #About
  document.getElementById("about-link").addEventListener("click", function() {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });

  //Scroll to #Portfolio
  document
    .getElementById("portfolio-link")
    .addEventListener("click", function() {
      document
        .querySelector("#portfolio")
        .scrollIntoView({ behavior: "smooth" });
    });

  //Scroll to #Contact
  document.getElementById("contact-link").addEventListener("click", function() {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });

  document
    .querySelector(".scroll-from-about")
    .addEventListener("click", function() {
      document
        .querySelector("#portfolio")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".scroll-from-portfolio")
    .addEventListener("click", function() {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
  
  document
    .querySelector(".scroll-to-top-from-contact")
    .addEventListener("click", function(){
     document.querySelector("#main").scrollIntoView({ behavior: "smooth" }); 
  });
});