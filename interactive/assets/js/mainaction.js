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

function showDialogWindow(id_dialog,id_video)
{
    document.getElementById(id_dialog).classList.add("window-action");
}