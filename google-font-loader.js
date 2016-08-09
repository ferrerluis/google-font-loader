/**
 * Created by luis on 8/7/16.
 */

var GoogleFontLoader = function (config) {
    this.config = config;
    this.baseUrl = "https://fonts.googleapis.com/css?family=";
    this.added = [];
};

GoogleFontLoader.prototype.load = function (family) {
    var wf = document.createElement('link');
    wf.href = this.baseUrl + family.replace(' ', '+');
    wf.rel = 'stylesheet';
    var head = document.head;
    this.added.push(head.appendChild(wf));
    return wf;
};

GoogleFontLoader.prototype.remove = function (family) {
    var links = document.head.getElementsByTagName('link');
    var i;
    for (i = 0; i < this.added.length; i++) {
        if (this.added[i].href === this.baseUrl + family.replace(' ', '+')) {
            this.added[i].remove();
            return this.added[i];
        }
    }
};

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
//
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// var fonts = [];
// var families = [];
//
// httpGetAsync('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ5GjW4JHu3GpBpcHh4o26R5-Fba7uMjw',
//     function (response) {
//         fonts = JSON.parse(response).items;
//
//         var i;
//         for (i=0; i < fonts.length; i++) {
//             families.push(fonts[i].family);
//         }
//         console.log(families);
//
//         var baseUrl = "https://fonts.googleapis.com/css?family=";
//         for (i=0; i < families.length; i++) {
//             var wf = document.createElement('link');
//             wf.href = baseUrl + families[i].replace(' ', '+');
//             wf.rel = 'stylesheet';
//             var s = document.getElementsByTagName('link')[0];
//             s.parentNode.insertBefore(wf, s);
//         }
//
//         setInterval(function () {
//             var title = document.getElementById('title');
//             var text = document.getElementById('text');
//             title.style.fontFamily = families[getRandomInt(0, families.length)]
//             text.style.fontFamily = families[getRandomInt(0, families.length)]
//         }, 3000);
//     });
