const container = document.querySelector('.container'); // Etsitään elementti, jolla on luokka "container"
const left = document.querySelector('.left'); // Etsitään elementti, jolla on luokka "left"
const right = document.querySelector('.right'); // Etsitään elementti, jolla on luokka "right"

left.addEventListener('mouseenter', () => container.classList.add('hover-left')); // Lisätään "hover-left" luokka container-elementille, kun hiiri siirtyy "left" elementin päälle
left.addEventListener('mouseleave', () => container.classList.remove('hover-left')); // Poistetaan "hover-left" luokka container-elementiltä, kun hiiri poistuu "left" elementin päältä

right.addEventListener('mouseenter', () => container.classList.add('hover-right')); // Lisätään "hover-right" luokka container-elementille, kun hiiri siirtyy "right" elementin päälle
right.addEventListener('mouseleave', () => container.classList.remove('hover-right')); // Poistetaan "hover-right" luokka container-elementiltä, kun hiiri poistuu "right" elementin päältä
