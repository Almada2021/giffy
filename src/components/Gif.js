export default function Gif({ title, id, url }) {
  return (
    <a className="gif__div" href={`#${id}`}>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title}></img>
    </a>
  );
}
