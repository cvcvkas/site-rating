{
    let productStars = document.querySelector("#product-stars");

    for (let i = 0; i<productStars.childElementCount; i++){
        productStars.childNodes[i].style.width = "125px";
    }
}