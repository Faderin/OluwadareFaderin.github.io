const nav = document.querySelector(".nav");

const handleHover = function(e) {
    const hovered = e.target;
    if(hovered.classList.contains("nav"))return

    const siblings = hovered.closest("nav").querySelectorAll("a");
    if(e.type === "mouseover"){
        siblings.forEach(el => el.classList.add("transparent"));
        hovered.classList.remove("transparent")
    }else{
        siblings.forEach(el => el.classList.remove("transparent"))
    }
    
    
}

nav.addEventListener("mouseover", handleHover.bind(1));
nav.addEventListener("mouseout", handleHover.bind(0))