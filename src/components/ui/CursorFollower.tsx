'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CursorFollower() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setIsTouchDevice(navigator.maxTouchPoints > 0);
    
    if (navigator.maxTouchPoints > 0) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('data-cursor') === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="cursor-dot rounded-full pointer-events-none fixed z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--color-palette-medium)',
        }}
      />
      <motion.div
        className="cursor-ring border-2 rounded-full pointer-events-none fixed z-[9999]"
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? 'var(--color-palette-dark)' : 'var(--color-palette-medium)',
          opacity: isHovering ? 0.8 : 0.5
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
}