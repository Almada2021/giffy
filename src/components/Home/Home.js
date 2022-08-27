import useLocation from "wouter";
export default function Home(props) {
  const [location, setLocation] = useLocation("/");
  return (
    <h1
      onClick={() => {
        if (location != "/") {
          setLocation("../../");
          props.keyword("");
        } else {
          return false;
        }
      }}
    >
      App
    </h1>
  );
}
