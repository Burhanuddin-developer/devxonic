// app/components/Heading.tsx
import React from "react";

interface HeadingProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Heading({
  title,
  description,
  children,
  className,
}: HeadingProps) {
  return (
    <>
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-t from-[#3b0087] via-[#0b0b17]  text-white px-4">
    <div className={className}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-white opacity-80">{description}</p>
      )}
      {children}
    </div>
     </section>
     </>
  );
}
