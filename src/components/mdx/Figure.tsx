import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  number,
}: {
  src: string;
  alt: string;
  caption?: string;
  number?: number;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-xl border border-ink-100 dark:border-ink-700">
        <Image src={src} alt={alt} width={1200} height={675} className="w-full h-auto" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {number ? <span className="font-medium text-ink-700 dark:text-ink-300">Figure {number}. </span> : null}
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
