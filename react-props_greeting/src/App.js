import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Su" isCoach={false} />
    </div>
  );
}

export function Greeting({ name, isCoach }) {
  return (
    <h1 className="greeting__statement">
      {isCoach ? "Hello, Coach!" : "Hello " + name}
    </h1>
  );
}
