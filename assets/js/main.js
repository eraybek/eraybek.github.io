var counterContainerEl = document.querySelector(".website-counter");
var visitCountEl = localStorage.getItem("page_view");

if (visitCountEl) {
    visitCountEl= Number(visitCountEl) + 1;
    localStorage.setItem("page_view", visitCountEl);
}else {
    visitCountEl = 1;
    localStorage.setItem("page_view", 1);
}

counterContainerEl.innerHTML += visitCountEl;
