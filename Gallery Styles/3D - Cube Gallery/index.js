var currentClass = 'front';
function addRotationClass(sideName) {
    $('#cube').removeClass('cube-rotate-' + currentClass);
    $('#cube').addClass('cube-rotate-' + sideName);
    currentClass = sideName;
}

$('.change-button').click(function(event) {
    addRotationClass(event.target.value);
});