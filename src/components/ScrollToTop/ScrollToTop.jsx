import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";

const SCROLL_THRESHOLD = 300;

/**
 * Floating button that appears once the page is scrolled past
 * SCROLL_THRESHOLD, and smoothly scrolls back to the top on click.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      &uarr;
    </button>
  );
};

export default ScrollToTop;
