import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function VolumeDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volumes) => volumes.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover } = currentVolume;

  const currentIndex = volumes.findIndex((volumes) => volumes.slug === slug);
  const slugs = volumes.map((volumes) => volumes.slug);

  function getPreviousVolumeSlug() {
    const previousIndex = (currentIndex - 1 + volumes.length) % volumes.length;
    return volumes[previousIndex].slug;
  }

  function getNextVolumeSlug() {
    const nextIndex = (currentIndex + 1) % volumes.length;
    return volumes[nextIndex].slug;
  }

  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      <Link href="/overview"> ← All Volumes </Link>
      <h1>{title}</h1>
      <p> {description}</p>
      <ul>
        {currentVolume.books.map((book, color) => (
          <li key={color}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Link href={`/volumes/${getPreviousVolumeSlug(slug)}`}>Previous</Link>
      <Image src={cover} alt={slug} width={500} height={800} />

      <Link href={`/volumes/${getNextVolumeSlug(slug)}`}>Next</Link>
    </>
  );
}
