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

const next_binary_number = (array = [1, 0]) => {
  let valToAdd = 1;
  let result = [];
  
  for (let i = array.length-1; i >= 0; i--){
  
    let tempRes = array[i] + valToAdd
    if (tempRes <= 1) {
         result.push(tempRes) 
        valToAdd = 0
    } else {
         result.push(0)
    }
  
  }

    if (valToAdd > 0) {
        result.push(1);
    }
  
  return reverseArray(result)
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
