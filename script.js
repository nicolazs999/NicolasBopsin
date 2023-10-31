    function expandContent(button) {

        var section = button.parentNode;
    section.style.transform = 'scale(1.1)';

        var section = button.parentNode;
    section.classList.add("open");

        var allSections = document.querySelectorAll('section');
    allSections.forEach(function(sec) {
        if (sec !== section) {
            sec.style.display = 'none'; 
        } else {
            sec.style.display = 'flex'; 
        }
    });
    document.querySelector('.seta').style.display = 'none';
    }

    function collapseContent(button) {
    var section = button.parentNode;
    section.style.transform = 'scale(1)';

    var section = button.parentNode;
    section.classList.remove("open");

    var allSections = document.querySelectorAll('section');
    allSections.forEach(function(sec) {
        sec.style.display = 'flex'; 
    });
    document.querySelector('.seta').style.display = 'block';
    }
    window.onload = function() {
 
    updateTime();
    setInterval(updateTime, 1000);
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.addEventListener('mouseover', function() {
            var lockScreen = section.querySelector('.lock-screen');
            lockScreen.style.opacity = '0';
            lockScreen.style.pointerEvents = 'none';
            lockScreen.querySelector('video').style.display = 'none';
        });
        section.addEventListener('mouseout', function() {
            var lockScreen = section.querySelector('.lock-screen');
            lockScreen.style.opacity = '1';
            lockScreen.style.pointerEvents = 'auto';
            lockScreen.querySelector('video').style.display = 'block';

        });
    });

    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.style.transform = 'scale(1.2)';
            setTimeout(function() {
                button.style.transform = '';
            }, 300);
        });
    });

    document.querySelector('#alertBox .closeButton').onclick = function() {
        document.querySelector('#alertBox').style.display = 'none';
        document.querySelector('#overlay').style.display = 'none';
    };
    
    };

function updateTime() {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
if (minutes < 10) {
    minutes = '0' + minutes;
}
var timeString = hours + ':' + minutes;

var timeElements = document.querySelectorAll('.time');
timeElements.forEach(function(element) {
    element.textContent = timeString;
});
}
function changeTheme(color) {

    var videoSrc;
    var backgroundImage;
    switch (color) {
        case 'red':
            videoSrc = 'img/particles-red.mp4';
            backgroundImage = 'img/tec-red.png';
            break;
        case 'blue':
            videoSrc = 'img/particles-purple.mp4';
            backgroundImage = 'img/tec-purple.png';
            break;
        case 'green':
            videoSrc = 'img/particles-greennnn.mp4';
            backgroundImage = 'img/tec-green.png';
            break;
    }

    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.src = videoSrc;
    });

    var buttons = document.querySelectorAll('section button');
    buttons.forEach(function(button) {
        button.style.backgroundColor = color;
    });

    var textElements = document.querySelectorAll('h2');
    textElements.forEach(function(element) {
        element.style.color = color;
    });

    
    document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
   
}
function resetTheme() {

    var textElements = document.querySelectorAll('h2');
    textElements.forEach(function(element) {
        element.style.color = '#4169E1'; 
    });
    document.body.style.backgroundImage = 'img/tec-blu1.jpg'; 

    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.src = 'img/Particle_Wave_4K_Motion_Background_Loop.mp4';
    });
    backgroundImage = 'img/tec-blu1.jpg';
    document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
    
    var buttons = document.querySelectorAll('section button');
    buttons.forEach(function(button) {
        button.style.backgroundColor = '#4169E1'; 
    });
}
