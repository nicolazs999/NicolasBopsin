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