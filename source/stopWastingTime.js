var balloonInterval, iconInterval;

var hideIcon = function() {
    var btn = document.getElementsByClassName('_2n_9');
    if (btn && btn.length > 0) {
        btn[2].style.display = 'none';
        clearInterval(iconInterval);
    }
};

// the small balloon with the amount of notifications
var hideBalloon = function() {
    var attrName = 'data-intl-translation';
    var attrValue = 'notifications from';

    var elements = document.getElementsByClassName('_4qba');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute(attrName)) {
            if (elements[i].getAttribute(attrName).indexOf(attrValue) > 0) {
                elements[i].style.display = 'none';
                clearInterval(balloonInterval);
            }
        }
    }
};

// set the title from "(5) Facebook" to "Facebook"
var hideNumberFromTitle = function() {
    var wantedTitle = 'Facebook';
    if (document.title != wantedTitle) {
        document.title = wantedTitle;
    }
};


// hide newsfeed - on startup and in case we go back to newsfeed
var hideNewsfeed = function() {
    var domain = 'https://www.facebook.com/';
    var contentArea = document.getElementById('contentArea');
    if (contentArea && contentArea.style.display != 'none') {
        var url = window.location.href;
        if (url == domain || url.indexOf(domain + '?') > -1 || url.indexOf(domain + '#') > -1) {
            contentArea.innerHTML = '';
        }
    }
};

var init = function() {
    //// run once on startup once the element is created on the DOM
    balloonInterval = setInterval(hideBalloon, 10);
    iconInterval = setInterval(hideIcon, 10);

    //// run all the time since pages are changes via AJAX
    setInterval(hideNewsfeed, 50);

    // run all the time since the title is changed dynamically
    setInterval(hideNumberFromTitle, 50);
};

init();