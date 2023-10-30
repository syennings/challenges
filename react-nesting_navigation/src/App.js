import "./styles.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Image } from "./components/Image";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
