import Gif from "./Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
export default function ListOfGifs(params) {
  const keyword = params.params.keyword;
  const [gifs, setGifs] = useState([]);
  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
      });
    },
    [keyword]
  );
  // setGifs(keyword.gifs)
  return gifs.map(({ url, id, title }) => (
    <Gif key={url} title={title} id={id} url={url} />
  ));
}
