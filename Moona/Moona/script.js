function scrollGallery(direction) {
    const container = document.getElementById('galleryScroll');
    const scrollAmount = 420; // iets meer dan 1 afbeelding
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  function scrollSlider(id, direction) {
    const container = document.getElementById(id);
    const scrollAmount = 300;
    container.parentElement.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
  
        // Highlight current page
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
          }
        });
      })
      .catch(error => console.error('Error loading navbar:', error));
  });
  