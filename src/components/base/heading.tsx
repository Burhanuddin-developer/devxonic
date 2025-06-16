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
    <div className={className}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-white opacity-80">{description}</p>
      )}
      {children}
    </div>
  );
}
