export default slugyId => {
  const splitted = slugyId.split("-");
  return splitted[splitted.length - 1];
};
