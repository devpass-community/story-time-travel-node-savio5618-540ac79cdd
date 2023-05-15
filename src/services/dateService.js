const getCurrentDate = () => {
  const date = new Date();
  const formatedDate = `${date.getDate().toString()}/${date
    .getMonth()
    .toString()}/${date.getFullYear().toString()}`;
  return formatedDate;
};

module.exports = {
  getCurrentDate,
};
