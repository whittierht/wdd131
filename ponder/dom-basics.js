const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("Img");
newImage.setAttribute('src', 'https://picsum.photos/200');
newImage.setAttribute('alt', 'image from picsum')
document.body.appendChild(newImage);