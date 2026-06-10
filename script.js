const button = document.querySelector(".order-btn");

button.addEventListener("click", () => {

    alert("Order page coming soon!");

});

document.querySelectorAll('.cake-card').forEach(card => {

    const slides = card.querySelectorAll('.slide');

    const nextBtn = card.querySelector('.next-btn');

    const prevBtn = card.querySelector('.prev-btn');

    let current = 0;

    function showSlide(index){

        slides.forEach(slide => {

            slide.classList.remove('active');

            if(slide.tagName === "VIDEO"){
                slide.pause();
            }

        });

        slides[index].classList.add('active');

        if(slides[index].tagName === "VIDEO"){
            slides[index].play();
        }
    }

    nextBtn.addEventListener('click', () => {

        current = (current + 1) % slides.length;

        showSlide(current);

    });

    prevBtn.addEventListener('click', () => {

        current = (current - 1 + slides.length) % slides.length;

        showSlide(current);

    });

});