document.addEventListener("DOMContentLoaded", function() {
    const hideButtons = document.querySelectorAll(".hide-result");
    

    hideButtons.forEach(button => {
        button.addEventListener("click", function() {
            const imageBox = this.parentNode;
            imageBox.style.display = "none";
        });
    });
});