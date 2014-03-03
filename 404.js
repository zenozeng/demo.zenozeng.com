var data = {
    idi: {
        "name": "International Design Institute (IDI) ZHEJIANG UNIVERSITY",
        "url": "http://zenozeng.github.io/www.idi.zju.edu.cn",
        "description": "www.idi.zju.edu.cn/"
    },
    vs: {
        "name": "VS",
        "url": "http://duck.zenozeng.com:42000/",
        "description": "vs"
    }
};
var href = window.location.href;
var paths = href.split('demo.zenozeng.com/').pop().split('/');
var key = paths.shift();
var path = paths.join('/');
if(typeof data[key] != "undefined") {
    var item = data[key];
    var html = '<iframe src="';
    html += item.url;
    html += path;
    html += '" frameborder="0" scrolling="auto" width="100%" height="100%"></iframe>';
    document.body.innerHTML = html;
}
