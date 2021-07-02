const palindromes = function(string) {
   let reversedString = "";
   let j = 0;
   let punctuationless = string.replace(/[\.,-\/#!$%\^&\*;:{}" "=\-_`~()@\+\?><\[\]\+]/g, '');
   let cleanString = punctuationless.replace(/\s{2,}/g," ");
    cleanString = cleanString.toLowerCase();

   console.log("clean string: " + cleanString);
   for(i = cleanString.length-1; i >= 0; i--) {
        reversedString = reversedString + cleanString[i].toLowerCase();
       j++;
   }
   console.log("reversed string: " + reversedString);

   if(cleanString === reversedString) {
       return true;
   } else {
       return false;
   }
}

module.exports = palindromes
