import { introduction, volumes } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Overview() {
  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const goToRandomVolume = () => {
    const randomVolumeSlug = getRandomElement(volumes).slug;
    router.push(`/volumes/${randomVolumeSlug}`);
  };
  const router = useRouter();
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p> {introduction} </p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}> {volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goToRandomVolume}>Random Volume</button>
    </>
  );
}
