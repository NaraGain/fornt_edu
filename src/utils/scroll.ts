// src/utils/scroll.ts
export const saveScrollPosition = (key: string) => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem(key, JSON.stringify(scrollPosition));
  };
  
  export const restoreScrollPosition = (key: string) => {
    const scrollPosition = sessionStorage.getItem(key);
    if (scrollPosition) {
      window.scrollTo(0, JSON.parse(scrollPosition));
    }
  };
  