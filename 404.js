var data = {
    idi: {
        "name": "International Design Institute (IDI) ZHEJIANG UNIVERSITY",
        "url": "http://zenozeng.github.io/www.idi.zju.edu.cn",
        "description": "www.idi.zju.edu.cn"
    }
};
var href = window.location.href;
var key = href.replace(new RegExp('http:\/\/[^\/]*\/'), '');
if(typeof data.key != "undefined") {
    var item = data.key;
    var html = '<iframe src="';
    html += item.url;
    html += '" frameborder="0" scrolling="auto" width="100%" height="100%"></iframe>';
    html += '<div id="info">'+item.name+' - '+item.description+'</div>';
    document.body.innerHTML = html;
}
