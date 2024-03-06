window.addEventListener('DOMContentLoaded', (event) => {
    let elementsToShow = document.querySelectorAll('.hideme');

    function checkPosition() {
        for (let i = 0; i < elementsToShow.length; i++) {
            let element = elementsToShow[i];
            let positionFromTop = elementsToShow[i].getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                setTimeout(function() {
                    element.classList.add('fade-in-element');
                    element.classList.remove('hideme');
                }, 300);
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();
});