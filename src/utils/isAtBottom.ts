export const isAtBottom = (offset = 10): boolean => {
  return (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - offset
  );
};
