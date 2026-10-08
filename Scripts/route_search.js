const searchInput = document.getElementById("routeSearch");
const filterBtn = document.getElementById("filterBtn");
const filterDropdown = document.getElementById("filterDropdown");
const routes = document.querySelectorAll(".Route");

let activeFilters = {
    type: new Set(),
    difficulty: new Set()
};

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();

    routes.forEach((route) => {
        const title = route.querySelector(".route_title").textContent.toLowerCase();
        const text = route.querySelector(".route_text").textContent.toLowerCase();
        const type = route.dataset.type;
        const difficulty = route.dataset.difficulty;

        const matchesSearch = title.includes(searchTerm);
        const matchesType = activeFilters.type.size === 0 || activeFilters.type.has(type);
        const matchesDifficulty = activeFilters.difficulty.size === 0 || activeFilters.difficulty.has(difficulty);

        const show = matchesSearch && matchesType && matchesDifficulty;
        route.style.display = show ? "flex" : "none";
    });
}

searchInput.addEventListener("input", applyFilters);

filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    filterDropdown.classList.toggle("open");
    if (filterDropdown.classList.contains("open")) {
        const containerRect = filterBtn.parentElement.getBoundingClientRect();
        const btnRect = filterBtn.getBoundingClientRect();
        filterDropdown.style.top = `${btnRect.bottom - containerRect.top + 8}px`;
        filterDropdown.style.left = `${btnRect.left - containerRect.left}px`;
        filterDropdown.style.right = "auto";
    }
});

document.addEventListener("click", (e) => {
    if (!filterDropdown.contains(e.target) && e.target !== filterBtn) {
        filterDropdown.classList.remove("open");
    }
});

filterDropdown.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        const section = e.target.closest(".filter-section");
        const category = section.querySelector("label").textContent.toLowerCase();
        const value = e.target.value;

        if (e.target.checked) {
            activeFilters[category].add(value);
        } else {
            activeFilters[category].delete(value);
        }
        applyFilters();
    });
});