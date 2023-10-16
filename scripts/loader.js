window.addEventListener("load", function () {
    const loader = document.querySelector(".loader_outer");
    const loader2 = document.querySelector(".loader_inner");
    const loader3 = document.querySelector(".loader_message");

    setTimeout(function () {
        loader.style.display = "none";
        loader2.style.display = "none";
        loader3.style.display = "none";
    }, 200); // 200 milliseconds
});
