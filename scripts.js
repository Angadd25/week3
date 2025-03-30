document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop();

    // selection of navbar content
    let links = document.querySelectorAll("nav ul li");
    
    //active page is highlighted for the user
    links.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // for going back home
    document.getElementById("logo").onclick = function() {
        window.location.href = "index.html";
    };

    //gets the year on the footer
    document.getElementById("year").textContent = new Date().getFullYear();
});


