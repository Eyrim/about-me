export async function getRandomGifByWord(word) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=VTqst2kPUNFkNUuBzf8k1fd5icvPepCf&tag=${word}&rating=g`;
  return await fetch(url, {
    method: "GET",
  })
    .then((response) =>
      response
        .json()
        .then((json) => {
          console.log(json);
          return json;
        })
        .then((json) => json.data.images.original.url)
    )
    .catch((error) => console.error(error));
}
