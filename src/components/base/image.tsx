"use client";

import Image from "next/image";

interface ImageGalleryProps {
  title?: string;
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }[];
}

export default function ImageGallery({ title, images }: ImageGalleryProps) {
  return (
    <div className="mt-8">
      {title && <h3 className="text-2xl font-semibold mb-6">{title}</h3>}
      <div className="grid md:grid-cols-4">
        {images.map((img:any, index:any) => (
          <div key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width || 300}
              height={img.height || 600}
              className={`rounded-xl${img.className ? ` ${img.className}` : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
