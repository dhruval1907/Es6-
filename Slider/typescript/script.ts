const images: string[] = [
  "https://images.unsplash.com/photo-1574926824742-a01d65118178?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1698362819283-8a321d8cf2ab?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583912489026-898cdc54cbe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559980641-56f8365ccb84?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let currentIndex: number = 0;

const galleryImage = document.getElementById("galleryImage") as HTMLImageElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

// Display first image initially
galleryImage.src = images[currentIndex];

// NEXT button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  galleryImage.src = images[currentIndex];
});

// PREV button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentIndex];
});
  