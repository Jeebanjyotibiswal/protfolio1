
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


let backToTopButton = document.createElement("button");
backToTopButton.textContent = "Top";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);


window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};


backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.querySelectorAll(".projects ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#f8bb31";
        link.style.fontWeight = "bold";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#333";
        link.style.fontWeight = "normal";
    });
});