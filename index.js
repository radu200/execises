const repeat = (array, times = 3) => {
   let result = [];

  for (let i = 0; i < times; i++) {
    result = [...result, ...array];
  }
  return result;
};

///reformat string
const reformat = string => {
  const result = [];
  //replace vowels with  empty string and turn to lowercasw
  const replaceStr = string.replace(/[aeiou]/gi, "").toLowerCase();

  result.push(replaceStr[0].toUpperCase() + replaceStr.slice(1));
  return result.join();
};

const next_binary_number = (num = [1, 0]) => {
    const binaryNum = [];
    let dec = 1;

  //convert binary to decimal 
  for (let i = 0; i <= num.length; i++) {
    if (num[num.length - (i + 1)] === 1) {
      dec += 2 ** i;
    }
  }

  //converting from decimal to binary
  while (dec > 0) {
    binaryNum.push(dec % 2);
    dec = Math.floor(dec / 2);
  }

  return reverseArray(binaryNum);
};

const reverseArray = array => {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

module.exports = {
  repeat,
  reformat,
  next_binary_number,
  reverseArray
};
