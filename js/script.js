var search = document.getElementById("search");
var delete_button = document.getElementsByClassName("header__search__delete");
var banner__content = document.getElementById("content");
var banner = document.getElementById("banner");
const IMG_WIDTH = 0;
var images = [
    "url(Images/banner1.PNG)",
    "url(Images/banner.PNG)",

];
var index = 0;

function OpenSearchBox() {
    search.style.transform = "translateY(200px)"
    search.style.visibility = "visible";
    search.style.transition = "all 0.2s";
}

function CloseSearchBox() {

    search.style.transform = "translateY(-200px)"
    search.style.visibility = "hidden";
    search.style.transition = "all 0.2";
}

setTimeout(function() { ShowContent() }, 2000)
    //show content after load page
function ShowContent() {
    banner__content.style.visibility = "visible";
    banner__content.style.opacity = 1;
    banner__content.style.transform = "translateY(-80px)"

}

function Next() {

    index++;
    if (index >= images.length) {
        index = 0;
    }

    banner.style.backgroundImage = images[index];


}

function Pre() {

    if (index < 0) {
        index = images.length - 1;
    } else {
        index--;
    }

    banner.style.backgroundImage = images[index];

}

window.onscroll = function() {
    var position = document.documentElement.scrollTop;
    fixedHeader(position);
    console.log(position);

    var productitem = document.getElementsByClassName("content__product-item");

    for (var i = 0; i < productitem.length; i++) {

        var itemPosition = productitem[i].offsetTop;

        console.log("item: " + itemPosition);
        productitem[i].style.transition = "all 0.5s ease-in-out";
        productitem[i].style.transform = "scale(0.9,0.9)";
        productitem[i].style.opacity = 0;



        if (position >= itemPosition - 600) {
            productitem[i].style.transition = "all 0.5s ease-in-out";
            productitem[i].style.transform = "scale(1,1)";
            productitem[i].style.opacity = 1;

        }
    }
}

function fixedHeader($position) {
    var pageHeader = document.getElementById("pageHeader");

    if ($position > 300 || document.body.scrollTop > 300) {
        pageHeader.style.position = "fixed";

        pageHeader.style.left = 0;
        pageHeader.style.zIndex = 20;
        pageHeader.style.backgroundColor = "rgb(255,255,255,0.9)";
        pageHeader.style.paddingTop = "15px";
        pageHeader.style.paddingBottom = "15px";
        pageHeader.style.transition = " 0.3s";




    } else {
        pageHeader.style.position = "relative";
        pageHeader.style.backgroundColor = "#FFFFFF";
        pageHeader.style.paddingTop = "50px";
        pageHeader.style.paddingBottom = "50px";

    }

}