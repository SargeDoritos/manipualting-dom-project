let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

pButton.addEventListener("click", function() {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Don't read this, it's random!";
    pDiv.appendChild(newParagraph);
});

imgButton.addEventListener("click", function() {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

    let newImage = document.createElement("img");
    newImage.src = "images/pika.png";
    newImage.alt = "A pikachu picture";
    imgDiv.appendChild(newImage);
});
