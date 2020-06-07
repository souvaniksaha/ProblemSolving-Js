//Reverse a string
// Approach 1 
/* function reverseString(str){
   let reverseStr = "";
   for (let index = str.length-1; index>=0 ; index--)
        reverseStr+=str[index];
  return reverseStr;
} */

//Approach 2 
/* const reverseString = str=>{
   //1.Split the string
   let strArr = str.split('');
   //2.reverse the strArr
   strArr.reverse();
   //3. Turn reverse array into string
   return strArr.join('');
} */

//Approach 3
/* function reverseString(str) {
    let reverseStr="";
    for (const chracter of str) {
        reverseStr= chracter + reverseStr;
    }
    return reverseStr;
} */
//Approaqch 4
/* function revString(str) {
    let revstr = "";
    str.split('').forEach(element => {
        revstr = element+revstr;
    });
   return revstr;
} */
//Approach 5
function revString(str) {
    return str.split('').reduce((revstr, char) => char + revstr, '');
}


// Check a string is palindrome or not 
function isPalindrome(str) {

    const revstr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === revstr;
}

//Reverse an Integer
function reverseInteger(number) {
    const reverseNum = number.toString()
                                .split('')
                                .reverse()
                                .join('');
    return parseInt(reverseNum) * Math.sign(number);
}


// Capitalize each word

function capitaLizeWord(sentence) {
   return sentence.toLowerCase()
                    .split(' ')
                    .map(function(word){
                        return word.substr(0,1).toUpperCase() + word.substr(1);
                    })
                    
                    .join(' ');
            }
console.log(capitaLizeWord('hey My SELF SouvNik SahA'));