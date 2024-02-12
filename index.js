const conatainer = document.querySelectorAll("span")
console.log(conatainer)
conatainer.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle('active')
    })
})