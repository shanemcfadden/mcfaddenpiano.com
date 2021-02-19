export default (clickFn) => {
  return (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      clickFn();
    }
  };
};
