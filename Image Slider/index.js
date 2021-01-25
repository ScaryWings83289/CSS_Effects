var items = document.getElementsByClassName('item');
var current = 0;
var total = items.length;
var rightSlide = document.getElementById('right-slide');
var leftSlide = document.getElementById('left-slide');

rightSlide.addEventListener('click', function () {
    changeSlide(0);
});
leftSlide.addEventListener('click', function () {
    changeSlide(1);
});

function changeSlide(direction) {
    items[current].classList.remove('active');
    if(direction === 0) {
        current = current +1;
        if(current >= total)
            current = 0;
    } else {
        current = current -1;
        if(current < 0)
            current = total - 1;
    }
    items[current].classList.add('active');
}