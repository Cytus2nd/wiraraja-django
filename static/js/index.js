document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = ["businessDropdown", "companyDropdown", "careerDropdown"];

    dropdowns.forEach(function (id) {
        let dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.addEventListener("click", function (event) {
                event.stopPropagation();
                window.location.href = this.getAttribute("href");
            });
        }
    });
});
