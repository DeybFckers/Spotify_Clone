const leftsearchBar = document.querySelector(".left-searchbar");
const leftsearchBtn = document.querySelector(".left-searchbtn");
const leftsearchInput = document.querySelector(".left-input")

leftsearchBtn.addEventListener("click", () => {
    leftsearchBar.style.backgroundColor = "#1f1f1f"
    leftsearchInput.placeholder = "Search In your Library";
    
})