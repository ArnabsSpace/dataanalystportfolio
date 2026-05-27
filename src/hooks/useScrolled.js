import { useEffect, useState } from 'react';

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Used by the Navbar to apply a compact/scrolled style.
 *
 * @param {number} threshold - scroll offset in px
 * @returns {boolean}
 */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
