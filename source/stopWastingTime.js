// hide notifications
var btn = document.getElementsByClassName('_2n_9');
btn[2].style.display = 'none';

function hideNewsfeed() {
    // hide newsfeed
    if (window.location.href == 'https://www.facebook.com/') {
        var contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';
    }
}

setInterval(hideNewsfeed, 500);

hideNewsfeed();