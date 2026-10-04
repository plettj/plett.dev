import Photo from "../common/photos/Photo";

// Used in book markdown as <BookImage src="..." alt="..." width="..." height="..." location="..." year="..." />
export default function BookImage({
  src,
  alt,
  width,
  height,
  location,
  year,
}: {
  src: string;
  alt: string;
  width: string;
  height: string;
  location: string;
  year: string;
}) {
  return (
    <Photo
      image={{
        src,
        alt,
        location,
        year,
        size: [Number(width), Number(height)],
      }}
      loadMethod="border"
    />
  );
}
