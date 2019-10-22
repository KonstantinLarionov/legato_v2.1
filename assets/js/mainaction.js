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
    setTimeout(function () {
        $(".logo").animate({  textIndent: 0 }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform','rotate(' + now + 'deg)');
            },

        }, 'linear');
        $(".head-corusel-wrapper").animate({  text: 15 }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform','translateX(' + now + '%)');
            },

        }, 'linear');
        $(".social-item").animate({  textIndent: 0 }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform','rotate(' + now + 'deg)');
            },

        }, 'linear');
        AutoCorusel();
    }, 3000);
};

$(function() {
    var box = $(".text-showing").get(),
        len = box.length,
        indx = 0,
        opacity = 100,
        duration = 6000 / len;
    //box.reverse();
    (function fn() {
        $(box[indx]).delay((len - indx) * duration / 3).fadeTo(duration, opacity, fn);
        indx = ++indx % len;
        if (!indx) {
            opacity = +!opacity;

            if  ($("#mainlink").css("font-size") == "40px")
            {
                $("#mainlink").css("font-size","32px");
            }
            else
            {
                $("#mainlink").css("font-size","40px");
            }

        }
        else
        {

        }

    })()
});
//
// function FadeText(number)
// {
//     switch (number) {
//         case 1:
//             $("#text1").css("opacity",".9");
//             $("#text14").css("opacity",".0");
//
//             break;
//         case 2:
//             $("#text2").css("opacity",".9");
//             $("#text1").css("opacity",".0");
//             break;
//         case 3:
//             $("#text3").css("opacity",".9");
//             $("#text2").css("opacity",".0");
//             break;
//         case 4:
//             $("#text4").css("opacity",".9");
//             $("#text3").css("opacity",".0");
//             break;
//         case 5:
//             $("#text5").css("opacity",".9");
//             $("#text4").css("opacity",".0");
//             break;
//         case 6:
//             $("#text6").css("opacity",".9");
//             $("#text5").css("opacity",".0");
//             break;
//         case 7:
//             $("#text7").css("opacity",".9");
//             $("#text6").css("opacity",".0");
//             break;
//         case 8:
//             $("#text8").css("opacity",".9");
//             $("#text7").css("opacity",".0");
//             break;
//         case 9:
//             $("#text9").css("opacity",".9");
//             $("#text8").css("opacity",".0");
//             break;
//         case 10:
//             $("#text10").css("opacity",".9");
//             $("#text9").css("opacity",".0");
//             break;
//         case 11:
//             $("#text11").css("opacity",".9");
//             $("#text10").css("opacity",".0");
//             break;
//         case 12:
//             $("#text12").css("opacity",".9");
//             $("#text11").css("opacity",".0");
//             break;
//         case 13:
//             $("#text13").css("opacity",".9");
//             $("#text12").css("opacity",".0");
//             break;
//         case 14:
//             $("#text14").css("opacity",".9");
//             $("#text13").css("opacity",".0");
//             break;
//     }
// }

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
                MarginItem(2);
                break;
            case "rgb(239, 112, 93)" : //Второе состояние
                head.css("background-color","rgb(0, 190, 117)");
                maxRect.css("background-color","rgb(34,199,135)");
                soc.css("background-color","rgb(34,199,135)");
                maxRect.css("background-image","url(assets/img/e7b9d2da469b32a08cd5a275850600af.png)");
                minRect.css("border-color","rgb(85,171,136)");
                MarginItem(3);
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
                MarginItem(1);
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

$("#first_section_people").one('inview', function(event, isInView)
{
    if (isInView)
    {
        $(".finaly-rs-title").animate({  textIndent: 0 }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform','rotate(' + now + 'deg)');
            },

        }, 'linear');
        $(".finaly-ls-call-comment").animate({  textIndent: 0 }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform','rotate(' + now + 'deg)');
            },

        }, 'linear');
    }
});
$(".bottom-rs-wave-arrow").one('inview', function(event, isInView)
{
    $(".bottom-rs-call-finally").animate({  textIndent: 0 }, {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate(' + now + 'deg)');
        },

    }, 'linear');
    $(".bottom-ls-call-finally").animate({  textIndent: 0 }, {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate(' + now + 'deg)');
        },

    }, 'linear');
});


// $("#second-page").on("click",function () {
//     if( $("#firstItem").css("transform","translateX(0%)"))
//     {
//         $("#secondItem").animate({  text: -100 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".9");
//             },
//
//         }, 'linear');
//         $("#firstItem").animate({  text: 240 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".3");
//             },
//
//         }, 'linear');
//         $("#thirdItem").animate({  text: -80 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".5");
//             },
//
//         }, 'linear');
//     }else
//     {
//         $("#secondItem").animate({  text: -100 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".9");
//             },
//
//         }, 'linear');
//         $("#firstItem").animate({  text: 120 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".5");
//             },
//
//         }, 'linear');
//         $("#thirdItem").animate({  text: 40 }, {
//             step: function(now, fx) {
//                 $(this).css('-webkit-transform','translateX(' + now + '%)').css("opacity",".3");
//             },
//
//         }, 'linear');
//     }
// });
$("#first-page").on("click", function (){MarginItem(1)});
$("#second-page").on("click",function (){MarginItem(2)});
$("#third-page").on("click",function (){MarginItem(3)});
function MarginItem(position)
{
    switch(position)
    {
        case 1:
            $("#firstItem").css("transform","translateX(0%)").css("opacity", ".9");
            $("#secondItem").css("transform","translateX(20%)").css("opacity", ".5");
            $("#thirdItem").css("transform","translateX(40%)").css("opacity", ".3");

            $(".corusel-slider").css("transform","translateX(0%)");

            $("#first-page").css("color","white");
            $("#second-page").css("color","gray");
            $("#third-page").css("color","gray");
            break;
        case 2:
            $("#firstItem").css("transform","translateX(240%)").css("opacity", ".3");
            $("#secondItem").css("transform","translateX(-100%)").css("opacity", ".9");
            $("#thirdItem").css("transform","translateX(-80%)").css("opacity", ".5");

            $(".corusel-slider").css("transform","translateX(50%)");

            $("#first-page").css("color","gray");
            $("#second-page").css("color","white");
            $("#third-page").css("color","gray");

            break;
        case 3:
            $("#firstItem").css("transform","translateX(120%)").css("opacity", ".5");
            $("#secondItem").css("transform","translateX(140%)").css("opacity", ".3");
            $("#thirdItem").css("transform","translateX(-200%)").css("opacity", ".9");

            $(".corusel-slider").css("transform","translateX(100%)");

            $("#first-page").css("color","gray");
            $("#second-page").css("color","gray");
            $("#third-page").css("color","white");


            break;
    }
}

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
