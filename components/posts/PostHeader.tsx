import Image from "next/image";

export default function PostHeader({
  title,
  coverImage,
  date,
}: {
  title: string;
  coverImage?: string;
  date: string;
}) {
  return (
    <div>
      <h1>{title}</h1>
      {coverImage && <Image src={coverImage} alt={title} />}
      <p>{date}</p>
    </div>
  );
}
