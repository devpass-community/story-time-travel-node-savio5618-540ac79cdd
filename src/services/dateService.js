const getCurrentDate = () => {
  const date = new Date().toLocaleDateString("pt-BR");

  return date;
};

module.exports = {
  getCurrentDate,
};
