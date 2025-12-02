var images = [
    "https://images.unsplash.com/photo-1574926824742-a01d65118178?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698362819283-8a321d8cf2ab?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583912489026-898cdc54cbe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559980641-56f8365ccb84?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
var currentIndex = 0;
var galleryImage = document.getElementById("galleryImage");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
// Display first image initially
galleryImage.src = images[currentIndex];
// NEXT button
nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});
// PREV button
prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});


var main = document.querySelector("main")
var prev = document.querySelector("#prevBtn")
var next = document.querySelector("#nextBtn")
next.addEventListener("click", function () {
    main.style.background = "none"
    
    var r1 = Math.floor(Math.random() * 255)
    var r2 = Math.floor(Math.random() * 255)
    var r3 = Math.floor(Math.random() * 255)
    
    var r4 = Math.floor(Math.random() * 255)
    var r5 = Math.floor(Math.random() * 255)
    var r6 = Math.floor(Math.random() * 255)
    
    main.style.background = `linear-gradient(to right, rgb(${r1}, ${r2}, ${r3}), rgb(${r4}, ${r5}, ${r6}))`
    
    
})
prev.addEventListener("click", function () {
    main.style.background = "none"
    

    var r1 = Math.floor(Math.random() * 255)
    var r2 = Math.floor(Math.random() * 255)
    var r3 = Math.floor(Math.random() * 255)

    var r4 = Math.floor(Math.random() * 255)
    var r5 = Math.floor(Math.random() * 255)
    var r6 = Math.floor(Math.random() * 255)

    main.style.background = `linear-gradient(to right, rgb(${r1}, ${r2}, ${r3}), rgb(${r4}, ${r5}, ${r6}))`



})