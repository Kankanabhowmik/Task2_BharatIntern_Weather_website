// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
   
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
   });
   
   // Form submission handling
   document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Example: Send form data to a server using fetch API
    const formData = new FormData(this);
    fetch('submit.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        this.reset(); // Reset the form after successful submission
      } else {
        alert('Error occurred while sending message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error occurred while sending message.');
    });
   });
