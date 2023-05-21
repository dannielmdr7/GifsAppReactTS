import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && (<h1>Cargando...</h1>)
      }
      <div className="card-grid" >
        {
          images.map(({ id, title, url }) => (
            <GifItem
              key={id}
              title={title}
              url={url}
            />

          ))
        }
      </div>
    </>
  )
}
