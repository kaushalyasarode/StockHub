// StockHub JavaScript

console.log("StockHub loaded successfully!");

// Search Button
const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + searchText);
    }

});


// Navigation Active State

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});