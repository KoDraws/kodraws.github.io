window.onload = function() {
    introAnimation();
};

function introAnimation() {
    var introH1 = document.getElementById('intro-h1');
    introH1.style.opacity = '0';
    introH1.style.transition = 'all 5s ease';
    introH1.style.opacity = '1';

    var introP = document.getElementById('intro-p');
    introP.style.opacity = '0';
    introP.style.transition = 'all 5s ease';
    introP.style.opacity = '1';
    
    var introSecond = document.getElementById('intro-second');
    introSecond.style.flex = '3';
}
