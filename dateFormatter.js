const dateFormatter = (strDate, outputFormat) => {
  //get string as YYMMDD, return string as YYYY/MM/DD
  if (outputFormat === 'long') {
    const day = strDate.slice(4, 6);
    const month = strDate.substring(2, 4);
    const year = '20' + strDate.substring(0, 2);
    return `${year}/${month}/${day}`;
  }
  //get string as YYYY/MM/DD, return string as YYYY/MM/DD
  let date = strDate.toString().replace(/\//g, '');
  date = date.slice(2, 8);
  return date;
}

module.exports = dateFormatter;