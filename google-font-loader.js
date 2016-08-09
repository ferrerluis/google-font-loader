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
