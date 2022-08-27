import Spinner from "../../components/spinner/spinner";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGIfs";
export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  return;
  <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
