// hide notifications
var btn = document.getElementsByClassName('_2n_9');
btn[2].style.display = 'none';


function hideNewsfeed() {
    // hide newsfeed
    var url = window.location.href;
    if (url == 'https://www.facebook.com/' || url.indexOf('https://www.facebook.com/?') > -1) {
        var contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';
    }
}

// in case we go back to newsfeed
setInterval(hideNewsfeed, 500);

// on startup
hideNewsfeed();