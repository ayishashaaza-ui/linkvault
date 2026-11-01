
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LinkContext = createContext();

const initialLinks = [
  {
    id: 1,
    title: "React Documentation",
    url: "https://react.dev",
    description: "Official guide to learning React.",
    category: "Development",
    type: "Website",
  },
  {
    id: 2,
    title: "Python Tutorial",
    url: "https://www.python.org",
    description: "Python learning and documentation.",
    category: "Programming",
    type: "Article",
  },
  {
    id: 3,
    title: "Web Development Course",
    url: "https://developer.mozilla.org",
    description: "Resources for web developers.",
    category: "Learning",
    type: "Website",
  },
];

export function LinkProvider({ children }) {
  const [links, setLinks] = useState(initialLinks);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedLinks = localStorage.getItem("linkvault-links");

      if (savedLinks !== null) {
        setLinks(JSON.parse(savedLinks));
      }
    } catch (error) {
      console.error("Could not load saved links:", error);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("linkvault-links", JSON.stringify(links));
    }
  }, [links, isLoaded]);

  function addLink(newLink) {
    setLinks((previousLinks) => [
      ...previousLinks,
      {
        ...newLink,
        id: Date.now(),
      },
    ]);
  }

  function deleteLink(id) {
    setLinks((previousLinks) =>
      previousLinks.filter((link) => link.id !== id)
    );
  }

  return (
    <LinkContext.Provider value={{ links, addLink, deleteLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinks() {
  return useContext(LinkContext);
}
