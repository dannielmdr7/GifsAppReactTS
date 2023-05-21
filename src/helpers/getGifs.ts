import { APIGiffResponse, MapImages } from "../interfaces/Gifs.interface";

export const getGifs = async (category: string): Promise<MapImages[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=F8jnIzAaFhu5G7K7d6xB5GqJ7E0bBB2K&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data }: APIGiffResponse = await resp.json();
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_still.url
    }
  });
  return gifs;
}