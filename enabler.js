document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showColumn1").addEventListener("click", function() {
        showOnlyColumn("column-1");
    });

    document.getElementById("showColumn2").addEventListener("click", function() {
        showOnlyColumn("column-2");
    });

    document.getElementById("showColumn3").addEventListener("click", function() {
        showOnlyColumn("column-3");
    });
});

function showOnlyColumn(columnClass) {
    
    document.querySelectorAll("p").forEach(p => p.style.display = "none");

    document.querySelectorAll("." + columnClass).forEach(p => p.style.display = "block");
}


document.addEventListener('DOMContentLoaded', function () {
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
});