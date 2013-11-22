$(document).ready(function() {
    var hoverIn = function() {
        $(this).find('.info').fadeIn();
    };
    var hoverOut = function() {
        $(this).find('.info').fadeOut();
    };
    $('.item').hover(hoverIn, hoverOut);
});


// var items = [
//   {
//       title: "奇怪的蛋糕",
//       price: "￥200",
//       pic: "images/nlnnc.jpg"
//   },
//   {
//       title: "奇怪的蛋糕",
//       price: "￥200",
//       pic: "images/nlnnc.jpg"
//   },
//   {
//       title: "奇怪的蛋糕",
//       price: "￥200",
//       pic: "images/nlnnc.jpg"
//   }
// ];
// $(document).ready(function() {
//     var html = items.map(function(item) {
//         return "<div class='item'><img src='"+item.pic+"'><div class='info'>"+item.title+"<span>"+item.price+"</span></div></div>"
//     });
//     $('#items').html(html.join(''));
//     $('#items').append(html.join(''));
//     $('#items').append(html.join(''));
//     $('#items').append(html.join(''));
//     var pending = false;
//     $(window).scroll(function() {
//         if(pending) return;
//         console.log([$('#items').height(), $(window).height(), window.scrollY]);
//         if($('#items').height() - $(window).height() - window.scrollY < 50)
//         {
//             pending = true;
//             $('#items').append(html.join(''));
//             $('#items').append(html.join(''));
//             $('#items').append(html.join(''));
//             pending = false;
//         }
//     });
// });