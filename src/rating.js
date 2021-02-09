{
    const stars = document.querySelectorAll("div.stars");
    let left_side;
    let right_side;
    for (let i = 0; i<stars.length; i++){
        for (let y = 0; y<5; y++){
            left_side = document.createElement("img");
            left_side.src = "../src/resources/emoji/cry-laugh/left-side-laugh.png";
            left_side.style.width = "30px";
            left_side.classList.add("fullydesaturatedstar")

            right_side = document.createElement("img");
            right_side.src = "../src/resources/emoji/cry-laugh/right-side-laugh.png";
            right_side.style.width = "30px";
            right_side.classList.add("fullydesaturatedstar");

            stars[i].append(left_side);
            stars[i].append(right_side);
        }
    }

    for (let i = 0; i<stars.length; i++){
        for (let y = 0; y<stars[i].childElementCount; y++){
            stars[i].childNodes[y].addEventListener("mouseenter", on_star_highlight);
            stars[i].childNodes[y].addEventListener("mouseleave", on_star_blur);
            stars[i].childNodes[y].addEventListener("click", on_star_click);
        }
    }
    
    function on_star_highlight(){
        if (Array.from(this.parentNode.classList).indexOf("stars-locked") < 0){
            let starvalue = 0;
            for (let i = 0; i<=Array.from(this.parentNode.childNodes).indexOf(this); i++){
                this.parentNode.childNodes[i].classList.remove("fullydesaturatedstar");
                this.parentNode.childNodes[i].classList.add("fullysaturatedstar");
                starvalue += 5 / Array.from(this.parentNode.childNodes).length;
            }
            this.parentNode.dataset.starValue = starvalue;
        }
    }
    function on_star_blur(){
        if (Array.from(this.parentNode.classList).indexOf("stars-locked") < 0){
            for (let i = 0; i<this.parentNode.childNodes.length; i++){
                this.parentNode.childNodes[i].classList.add("fullydesaturatedstar");
                this.parentNode.childNodes[i].classList.remove("fullysaturatedstar");
            }
            this.parentNode.dataset.starValue = 0;

        }
    }
    function on_star_click(){
        this.parentNode.classList.toggle("stars-locked");
    }
    
}