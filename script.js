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

const pfp = document.querySelector("#pfp");
const code = document.querySelector("#code");
const subIntro = document.querySelector("#subintro");


function expandIntro() {
    // reset class to remove old animation
    subIntro.className = "";

    subIntro.innerHTML = 'I am learning Front-End Web Development at <a href="https://www.freecodecamp.org/Synic-dx" class="hoveranimation cyantext" target="_blank">freeCodeCamp.org</a>';
    subIntro.style.marginTop = "20px";
    subIntro.style.fontSize = "large";

    // restart animation
    void subIntro.offsetWidth; 
    subIntro.className = "textswitched";
}

pfp.addEventListener('click', expandIntro);
code.addEventListener('click', expandIntro);