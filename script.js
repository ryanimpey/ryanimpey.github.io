$('.nav-toggle').click(function(){
  $('.nav-menu').toggle(function(){
    $(this).toggleClass('is-active');
  })
});

window.onload = function() {
  Particles.init({ options });
};

// e.g.
window.onload = function() {
  Particles.init({
    selector: '#myCanvas',
    color: '#ffffff'
  });
};
