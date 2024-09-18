import { getRandomGifByWord } from "./getRandomGifByWord";
import { loadFooterCat } from "./loadFooterCat";

window.onload = async () => {
  const gifBox = document.getElementById("gif-container");
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    img.src = await getRandomGifByWord("cat");
    gifBox.appendChild(img);
  }
  loadFooterCat();
};
