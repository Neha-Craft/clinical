"use client"


import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollTo = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - "65" - scrollRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <div ref={scrollRef}>{children}</div>
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};