'use client';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`flex flex-col items-center justify-center text-center ${className}`}>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient mb-4 pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-muted-foreground)] text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-80">
          {subtitle}
        </p>
      )}
      <div className="hairline-divider w-24 mx-auto" />
    </ScrollReveal>
  );
}