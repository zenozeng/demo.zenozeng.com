(function($) {

    var Gallery, gallery;

    Gallery = (function() {

        var _this;

        function Gallery(config) {
            this.config = config;
            this.count = 0;
            this.autoScale = true;
            this.width = 810;
            this.height = 540;
            _this = this;
        }

        Gallery.prototype.start = function() {
            this.next();

            // append control block
            // ATTENTION: the li is float: right, take care of the order
            for(var i = this.config.length - 1, html = ''; i > -1; i--) {
                html += '<li data-nth="'+i+'"></li>';
            }
            $('#index-box-img-go').html(html);

            // bind click events
            $('#index-box-img-go').on('click', 'li', function() {
                var nth = parseInt($(this).attr('data-nth'));
                gallery.go(nth);
            });

            $('#index-box').on('click', '.index-box-img-current', function() {
                var index = (_this.count - 1) % _this.config.length,
                    link = _this.config[index].link;
                window.location.href = link;
            });

            // set interval function
            this.setInterval();
        };

        Gallery.prototype.next = function() {
            var item = this.config[this.count % this.config.length],
                $current = $('.index-box-img-current'),
                $next = $('.index-box-img-next');
            this.count++;

            // set Next Text
            $('#index-box-text .title').html(item.title);
            $('#index-box-text .summary').html(item.summary);

            // set Next Image
            $next.attr('src', item.img);
            this.setScale($next);

            // Animate
            $current.animate({opacity: 0}, 800, 'linear', function() {
                // swap current and next
                $current.attr('src', item.img);
                _this.setScale($current);
                // reshow $current in the background
                $current.css({opacity: 100});
            });
        };

        Gallery.prototype.setInterval = function() {
            this.interval = setInterval(function() {
                _this.next();
            }, 6000);
        };

        Gallery.prototype.resetInterval = function() {
            if(this.interval) {
                clearInterval(this.interval);
                this.setInterval();
            }
        };

        // 跳转到第nth张，nth从0开始
        Gallery.prototype.go = function(nth) {
            this.count = nth;
            this.next();
            this.resetInterval();
        };

        Gallery.prototype.setScale = function($this) {
            // 设定头条的图片的长宽，保证比例不变并且没有白边

            // memory copy 以避免 CSS 影响
            $this.attr('src', $(this).attr('src')).load(function() {
                var imgWidth = this.width,
                    imgHeight = this.height,
                    imgScale = imgWidth / imgHeight,
                    boxWidth = _this.width,
                    boxHeight = _this.height,
                    boxScale = boxWidth / boxHeight;
                if(imgScale > boxScale) {
                    // 图片比较扁
                    $this.css({height: boxHeight, width: 'auto'});
                } else {
                    // 图片比较宽
                    $this.css({height: 'auto', width: boxWidth});
                }
            });
        };

        return Gallery;
    })();

    gallery = new Gallery([
      {
          img: 'http://junxun.myqsc.com/images/8.jpg',
          title: '【行摄军旅】愿世间所有初识都是久别重逢',
          summary: '坐如钟，脊背笔挺，显铮铮傲骨',
          link: 'http://junxun.myqsc.com/index.php/Index/article/id/243'
      },
      {
          img: 'http://junxun.myqsc.com/images/7.jpg',
          title: '【行摄军旅】岂曰无衣，与子同袍',
          summary: '光影流年，你是我心中的日月',
          link: 'http://junxun.myqsc.com/index.php/Index/article/id/175'
      },
      {
          img: 'http://junxun.myqsc.com/images/5.jpg',
          title: '军训师举办拔河比赛',
          summary: '全体教官和参训学员参加了比赛',
          link: 'http://junxun.myqsc.com/index.php/Index/article/id/153'
      },
      {
          img: 'http://junxun.myqsc.com/images/6.jpg',
          title: '军训师举行防恐消防应急综合演练',
          summary: '参训学员们进行紧急逃生演练',
          link: 'http://junxun.myqsc.com/index.php/Index/article/id/152'
      }
    ]);

    $(document).ready(function() {
        gallery.start();
    });

})(jQuery)
