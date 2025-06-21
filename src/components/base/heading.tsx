// app/components/Heading.tsx
'use client';

import React from "react";

interface HeadingProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Heading({
  title,
  description,
  children,
  className,
  style = {},
}: HeadingProps) {
  return (
    <section className="page-section bg-gradient-to-t from-[#3b0087] via-[#0b0b17] text-white text-center">
      <div className={`section-container ${className || ''}`} style={style}>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="section-subtext">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
