$(document).ready(function () {
    const screenSize = screen.width;
    var imgWidth = (screenSize/4) - 50;
    $(".seasonImg").each(function(){
        var height =   $(this).height();
        var ratio = imgWidth / $(this).width();
        $(this).css("width", imgWidth);
        $(this).css("height", height * ratio);
        $(this).css({
            WebkitFilter: "blur(5px) grayscale(70%)"});
    })
})


function hoverOverImg(season){   
    var id = "#img"+season;
    $(id).toggleClass("seasonHovered");
}


$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('#arrowImg').addClass("hide");
    }
    else {
        $('#arrowImg').removeClass("hide");
    }
});
