$(document).ready(function () {
    
    var currentPage = window.location.pathname;
    var screenSize = screen.width - 100;
    $(".grid").append(" <div><p class=\"footerText\" id=\"impress\"><a href=\"/impressum\">Impressum</a></p></div><div sec:authorize=\"hasRole('ROLE_ADMIN')\"><p class=\"footerText\" id=\"upload\"><a href=\"/upload\">Hochladen</a></p></div><div><p class=\"footerText\" id=\"login\"><a href=\"/login\">Login</a></p></div>")


    var folder = "/schwabbeldabbel.github.io/images" + currentPage + "/";
    const overLay = 'images/pictureOverlay.png';
    $.ajax({url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) {
                    const img = new Image();
                    img.src = folder + val;
                    const div = alignment(img);
                    createGalleryImg(div, folder + val, img, screenSize, overLay); 
                    $("body").append( "<img src='"+ folder + val +"'>" );
                } 
            });
        }
    });
});

function alignment(img){
    if(img.width > img.height){
        return 'horizontal';
    }else if(img.width < img.height){
        return 'vertical';
    }else{
        return 'square';
    }
}

function createGalleryImg(div, val, img, screenSize, overLay) {
    var picWidth;
    var divide;
    var id;
    var parentDiv = document.getElementById(div);
    if (screenSize > 1200) {
        picWidth = screenSize / 4.4;
        divide = img.width / picWidth;
        id = 'galleryImg';
    } else {
        picWidth = $(".content").width() - 100;
        divide = img.width / picwidth;
        id = 'galleryImgSingle';
        $(".content").css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        });
    }
    const width = img.width / divide;
    const height = img.weight / divide;
    parentDiv.innerHTML += "<div class='galleryContainer'><div id='" + id + "' onclick='galleryClicked(this)'><img src='" + overLay + "' class='overlayImg' width='" + width + "' height='" + height + "'></img><img src='" + val + "' width= '" + width + "' height ='" + height + "'></img></div></div>";


}


function galleryClicked(element) {
    var clicked = $(".clicked");

    if (clicked.length > 0) {
        clicked[0].className = "";
    }
    if (clicked[0] == element) {
        element.className = "";
    } else {
        element.className = "clicked";
    }
}

window.onclick = function(event){
    unclick(event);
};

function unclick(event) {
    var clicked = $(".clicked");
    if (clicked.length > 0 && (event.target.tagName == 'HTML'|| event.target.id == 'head'|| event.target.id == 'placeholder' || event.target.tagName == 'H1'  || event.target.tagName == 'BODY')) {
        clicked[0].className = "";
    }
}

window.onresize = resize;

function resize() {
    window.location.hash = "";
    window.location.reload();
}
