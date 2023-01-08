const closesidenav = document.getElementById("sidenav-close-checkbox");

closesidenav.addEventListener('change', () => {
    if (closesidenav.checked) {
        const sidenav = document.getElementById("side-nav");
        sidenav.style.left = '-90vh';
        closesidenav.checked = false;
    }
})

const burgercheckbox = document.getElementById("burger-checkbox");
burgercheckbox.addEventListener('change', () => {
    const sidenav = document.getElementById("side-nav");
    if (burgercheckbox.checked) {

        sidenav.style.left = '0vh';
        burgercheckbox.checked = false;

    } else {

    }
})

function thumbs(x) {
    const v = document.getElementById(x);
    if (v.style.color == 'red') {
        v.style.color = 'black'
    } else {
        v.style.color = 'red';
    }
}