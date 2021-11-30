export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=VqmZn39pvYft5SZZGT4GZ89MD5mmc4pT&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gift;
};
