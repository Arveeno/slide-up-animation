
document.addEventListener("DOMContentLoaded", function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  var elements = document.querySelectorAll('body *:not(script):not(style):not(link)');
  elements.forEach(function(element) {
    element.classList.add('slide-up');
    observer.observe(element);
  });
});
