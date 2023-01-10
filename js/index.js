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

function thumbsup(x) {
    var t = x.slice(2, 6);
    const v = document.getElementById(x);
    var y = 'do' + t;
    const z = document.getElementById(y);
    if (z.style.filter = 'grayscale(0%)') {
        z.style.filter = 'grayscale(100%)'
    }
    if (v.style.filter = 'grayscale(100%)') {
        v.style.filter = 'grayscale(0%)'
    }
}

function thumbsdown(x) {
    var t = x.slice(2, 6);
    const v = document.getElementById(x);
    var y = 'up' + t;
    const z = document.getElementById(y);
    if (z.style.filter = 'grayscale(0%)') {
        z.style.filter = 'grayscale(100%)'
    }

    if (v.style.filter = 'grayscale(100%)') {
        v.style.filter = 'grayscale(0%)'
    }
}


const search = document.getElementById("search")
search.addEventListener('click', function () {
    const searchbar = document.getElementById('search-bar');
    if (searchbar.style.display == 'none') {
        searchbar.style.display = 'block';
        // searchbar.style.opacity = '1';
    } else {
        searchbar.style.display = 'none';
        // searchbar.style.opacity = '0';
    }
})


function google() {
    const s = document.getElementById('search-text');
    console.log(s.value);
    location.href = 'http://www.google.com/search?q=' + s.value;
}

const searchmin = document.getElementById("search-min")
searchmin.addEventListener('click', function () {
    const searchbarmin = document.getElementById('search-bar-min');
    if (searchbarmin.style.display == 'none') {
        searchbarmin.style.display = 'block';

    } else {
        searchbarmin.style.display = 'none';
    }
})


function google() {
    const s = document.getElementById('search-text');
    console.log(s.value);
    location.href = 'http://www.google.com/search?q=' + s.value;
}