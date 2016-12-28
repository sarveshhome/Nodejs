/*
    @param (number) number
    @param (locale) string
    @return string
 */
module.exports = function (number,locale) {
  return number.toLocaleString(locale);
};
