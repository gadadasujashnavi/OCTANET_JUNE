document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message.`);

    // Reset the form
    document.getElementById('contactForm').reset();
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can add form submission logic here
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('button').addEventListener('click', function() {
    const location = document.getElementById('location-search').value.toLowerCase();
    const listings = document.querySelectorAll('.listing');

    listings.forEach(listing => {
        const listingLocation = listing.getAttribute('data-location').toLowerCase();
        if (listingLocation.includes(location)) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });

    scrollToSection('listings');
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentSlide = 0;

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide * 320 + 'px)';
    currentSlide = targetSlide;
};

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        moveToSlide(track, currentSlide, currentSlide);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < track.children.length - 1) {
        currentSlide++;
        moveToSlide(track, currentSlide, currentSlide);
    }
});



