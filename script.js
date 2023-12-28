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

        var clickPointers = document.querySelectorAll('.click-pointer');
    setInterval(function() {
        clickPointers.forEach(function(clickPointer) {
            clickPointer.style.display = 'block';
            setTimeout(function() {
                clickPointer.style.display = 'none';
            }, 3000);
        });
    }, 6000);
    
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

    var loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'SITE CARREGANDO, por favor aguarde...';
    document.body.appendChild(loadingMessage);

    if (window.innerWidth <= 1025) {
        
        var alertBoxParagraph = document.querySelector('#alertBox p');
        if (alertBoxParagraph) {
            alertBoxParagraph.textContent = 'Atenção! Este site está em desenvolvimento. Carregando, por favor aguarde. Clique nos quadrados para acessar o conteúdo.';
        }
    }
    
    setTimeout(function() {
        loadingMessage.style.display = 'none';
        siteCarregado = true;  

        if (siteCarregado) {
            document.querySelector('#alertBox .closeButton').style.display = 'block';
            var setaElement = document.querySelector('.seta');
            setaElement.style.display = 'block';
        }

    }, 3000);
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
    var bodyBackgroundImage;
    var sectionBackgroundImage;
    var buttonColor;

    switch (color) {
        case 'red':
            videoSrc = 'img/particles-red.mp4';
            bodyBackgroundImage = 'img/tec-red.png';
            sectionBackgroundImage = 'img/red-ofc.png'; 
            buttonColor = '#FF0000'; 
            break;
        case 'blue':
            videoSrc = 'img/particles-purple.mp4';
            bodyBackgroundImage = 'img/tec-purple.png';
            sectionBackgroundImage = 'img/purple-ofc.png'; 
            buttonColor = '#0000FF'; 
            break;
        case 'green':
            videoSrc = 'img/particles-greennnn.mp4';
            bodyBackgroundImage = 'img/tec-green.png';
            sectionBackgroundImage = 'img/green-ofc.png'; 
            buttonColor = '#008000'; 
            break;
    }

    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.src = videoSrc;
    });
    var buttonsS = document.querySelectorAll('section button');
    buttonsS.forEach(function(button) {
        button.style.backgroundColor = color;
    });
    var textElements = document.querySelectorAll('h2');
    textElements.forEach(function(element) {
        element.style.color = color;
    });
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.backgroundImage = 'url(' + sectionBackgroundImage + ')';
    });
    var buttons = document.querySelectorAll('.button.expand, .button.collapse');
    buttons.forEach(function(button) {
        button.style.backgroundColor = buttonColor;
    });
    document.body.style.backgroundImage = 'url(' + bodyBackgroundImage + ')';
}
function resetTheme() {
    var bodyBackgroundImage = 'img/tec-blu1.jpg'; 
    var sectionBackgroundImage = 'img/blue-ofc.jpg'; 
    var buttonColor = '#4169E1'; 

    var textElements = document.querySelectorAll('h2');
    textElements.forEach(function(element) {
        element.style.color = '#4169E1'; 
    });

    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.backgroundImage = 'url(' + sectionBackgroundImage + ')';
    });

    var buttonsS = document.querySelectorAll('section button');
    buttonsS.forEach(function(button) {
        button.style.backgroundColor = '#4169E1' ;
    });

    var buttons = document.querySelectorAll('.button.expand, .button.collapse');
    buttons.forEach(function(button) {
        button.style.backgroundColor = buttonColor;
    });

    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.src = 'img/Particle_Wave_4K_Motion_Background_Loop.mp4';
    });

    document.body.style.backgroundImage = 'url(' + bodyBackgroundImage + ')';
 
}


