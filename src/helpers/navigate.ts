export const navigate = (section: string) => {
  const elementToScroll = document.getElementById(section);
  if (elementToScroll) {
    window.scrollTo(0, elementToScroll.offsetTop);
  }
};
