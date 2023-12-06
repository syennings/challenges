import Link from "../components/Link";

export default function HomePage({ rooms }) {
  const onLights = rooms.filter((room) => room.isOn === true);
  const countOnLights = onLights.length;
  return (
    <div>
      <h1>Home</h1>
      <p>{countOnLights} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
