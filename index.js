const mainContainerEl = document.querySelector(".main-container");

mainContainerEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    
    mainContainerEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
})


window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage(){
    mainContainerEl.style.opacity = 1 - window.pageYOffset / 900; // opacity'nin eksiye dusmesi sorun teskil etmiyor.
    mainContainerEl.style.backgroundSize = 100 - window.pageYOffset/12 +  "%"
}