        // Initialize AOS animations
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out',
            });
            
            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
            
            // Testimonial slider functionality
            const slider = document.querySelector('.testimonials-slider');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            let currentIndex = 0;
            
            // Set initial slider position
            updateSliderPosition();
            
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderPosition();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                if (currentIndex < testimonialCards.length - 1) {
                    currentIndex++;
                    updateSliderPosition();
                }
            });
            
            function updateSliderPosition() {
                const cardWidth = testimonialCards[0].offsetWidth + parseInt(getComputedStyle(testimonialCards[0]).marginRight);
                slider.scrollTo({
                    left: currentIndex * cardWidth,
                    behavior: 'smooth'
                });
                
                // Update button states
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex === testimonialCards.length - 1;
            }
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                    contactForm.reset();
                });
            }
            
            // Handle responsive behavior on window resize
            window.addEventListener('resize', function() {
                updateSliderPosition();
            });
        });