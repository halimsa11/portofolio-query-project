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
      <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-gradient mb-4 pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="font-display text-[var(--color-muted-foreground)] text-sm md:text-base tracking-wide max-w-2xl mx-auto mb-6 opacity-90">
          {subtitle}
        </p>
      )}
      <div className="hairline-divider w-24 mx-auto" />
    </ScrollReveal>
  );
}