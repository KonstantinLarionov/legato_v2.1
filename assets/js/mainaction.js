// var ObjectInterface =
//     {
//       MenuButton: document.getElementById('menu_buttom')
//     };
// var UserExperience =
//     {
//         MenuShow: function (button) {
//             alert(1);
//             button.visibility = "hidden";
//         }
//     };

function showMenu() {
    $('#menu').toggleClass('menu-active');
    $('.content').toggleClass('content-active');
   if ($('#menu').hasClass('menu-active')) {
       $('#menu_buttom :first-child').css("transform", "rotate(-45deg)");
       $('#menu_buttom :last-child').css("transform", "rotate(45deg)");
       $('#menu_buttom :nth-child(2)').css("display", "none");
   }
   else
   {
       $('#menu_buttom :first-child').css("transform", "rotate(0deg)");
       $('#menu_buttom :last-child').css("transform", "rotate(0deg)");
       $('#menu_buttom :nth-child(2)').css("display", "block");
   }
}


var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function()
    {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);hellopreloader.style.display = "none";
        }},16);
}
window.onload = function(){
    setTimeout(function(){fadeOutnojquery(hellopreloader);},1600);
    fading();
};

function fading() {
    var maxRect = $(".rectfirst");
    var minRect = $(".minirectfirst");
    var head = $("#head");
    var soc = $(".social-item");
    setInterval(function () {
        switch (head.css("background-color"))
        {
            case "rgb(127, 48, 161)" : //Первое состояние
                head.css("background-color","rgb(239, 112, 93)");
                maxRect.css("background-color","rgb(242,142,127)");
                soc.css("background-color","rgb(242,142,127)");
                maxRect.css("background-image","url(assets/img/f5d772e55bbaaf7437aa4d761cd9c103.png)");
                minRect.css("border-color","rgb(239,127,105)");

                break;
            case "rgb(239, 112, 93)" : //Второе состояние
                head.css("background-color","rgb(0, 190, 117)");
                maxRect.css("background-color","rgb(34,199,135)");
                soc.css("background-color","rgb(34,199,135)");
                maxRect.css("background-image","url(assets/img/e7b9d2da469b32a08cd5a275850600af.png)");
                minRect.css("border-color","rgb(85,171,136)");

                break;
            case "rgb(0, 190, 117)" : //Третье состояние
                head.css("background-color","rgb(37, 42, 207)");
                maxRect.css("background-color","rgb(57,61,234)");
                soc.css("background-color","rgb(57,61,234)");
                maxRect.css("background-image","url(assets/img/4f33762bf186b2413b4b9bd7b79adddc.png)");
                minRect.css("border-color","rgb(53,57,224)");

                break;
            case "rgb(37, 42, 207)" : //Четвертое состояние
                head.css("background-color","rgb(127, 48, 161)");
                maxRect.css("background-color","rgb(132,55,186)");
                soc.css("background-color","rgb(132,55,186)");
                maxRect.css("background-image","url(assets/img/d49a745ad39c067f58112d446170d9b5.png)");
                minRect.css("border-color","rgb(118,42,226)");
                break;
        }
        if ($(".wrappersmoke").css('height') == "139px")
        {
            $(".wrappersmoke").css('height','0');
        }
        else
        {
            $(".wrappersmoke").css('height','139px');
        }

    }, 5000)
}

$('#about').one('inview', function(event, isInView) {
    if (isInView) {
        $(".card-out").removeClass("card-out");
        $(".fofth-card").css("transform","rotate(-21deg)");
        $(".third-card").css("transform","rotate(75deg)");
        $(".second-card").css("transform","rotate(9deg)");
        $(".first-card").css("transform","rotate(33deg)");
    } else {
        // element has gone out of viewport
    }
});
$(window).on('mousemove', function (e) {
    var width = $(window).width();
    var hieght = $(window).height();

    var offsetX = 0.5 - e.pageX /width;
    var offsetY = 0.5 - e.pageY / hieght;

    $(".parallax").each(function (i, el) {
        var offset = parseInt($(el).data('offset'));

        var translate = "translate3d(" + Math.round(offsetX * offset) + "px, " + Math.round(offsetY*offset)+"px, 0px)";
        $(el).css({
            'transform': translate
        });
    });
});
//
// $(function () {
//     $(document).on('mousemove', function (e) {
//
//         var intTop =  Number.parseInt($('.interactive-rs-yellow-shape-title').css("margin-top"));
//         var intLeft = Number.parseInt( $('.interactive-rs-yellow-shape-title').css("margin-left"));
//
//         $('.interactive-rs-yellow-shape-title').css({
//             marginLeft: -e.pageX / 1000 + intLeft,
//             marginTop:  -e.pageY / 1000 + intTop
//         });
//         $('.interactive-rs-yellow-shape-title').css({
//             marginLeft: e.pageX / 1000 - intLeft,
//             marginTop:  e.pageY / 1000 - intTop
//         });
//
//
//     });
// });
