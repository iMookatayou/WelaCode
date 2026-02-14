"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Intro.module.css";

type IntroProps = {
  children: React.ReactNode;
};

const Intro: React.FC<IntroProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default Intro;
