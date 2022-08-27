const apiKey = "qQ9Xcg6kX66ozMhkAhjyk7HinObBpJgx&q";
export default function getGifs({keyword} = "spiderman") {
  if (keyword === "" || keyword === undefined){
    keyword = "spiderman"
  }
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const url = image.images.downsized_medium.url;
        let obj = {
          url,
          images,
          title,
          id
        };
        return obj;
      });
      return gifs;
    });
}
