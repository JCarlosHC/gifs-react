import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import { Gif } from "./Gif"

export function ListOfGifs({ params }) {
    const { keyword } = params;

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword })
          .then(gifs => setGifs(gifs));
      }, [keyword]);

    return (
        gifs.map(({id, title, url}) =>
          <Gif
            key={id}
            title={title}
            id={id}
            url={url}
          />
        )
    )
}
