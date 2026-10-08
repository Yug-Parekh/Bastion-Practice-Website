
const toggles = document.querySelectorAll(".Route_Toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentElement.classList.toggle("Active");
    })
}) 