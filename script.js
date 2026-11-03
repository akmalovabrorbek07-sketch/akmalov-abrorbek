// AKMALOV 3.0

// Анимация появления
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.7s";
        document.body.style.opacity = "1";
    }, 50);

    // Подсветка активной страницы
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Эффект кнопок
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.filter = "brightness(1.2)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.filter = "brightness(1)";
        });
    });

    console.log("AKMALOV 3.0 LOADED!");
});