document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });
});