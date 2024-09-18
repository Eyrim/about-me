(() => {
  // js/getRandomGifByWord.js
  async function getRandomGifByWord(word) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=VTqst2kPUNFkNUuBzf8k1fd5icvPepCf&tag=${word}&rating=g`;
    return await fetch(url, {
      method: "GET"
    }).then(
      (response) => response.json().then((json) => {
        console.log(json);
        return json;
      }).then((json) => json.data.images.original.url)
    ).catch((error) => console.error(error));
  }

  // js/loadFooterCat.js
  function loadFooterCat() {
    const footerCat = `
    ,_     _
    |\\_,-~/
    / _  _ |    ,--.
   (  @  @ )   / ,-'
    \\  _T_/-._( (
    /         \`. \\
   |         _  \\ |
    \\ \\ ,  /      |
     || |-_\\__   /
    ((_/\`(____,-'
`;
    document.getElementById("footer-cat-carrier").innerHTML = footerCat;
  }

  // js/main.js
  window.onload = async () => {
    const gifBox = document.getElementById("gif-container");
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = await getRandomGifByWord("cat");
      gifBox.appendChild(img);
    }
    loadFooterCat();
  };
})();
