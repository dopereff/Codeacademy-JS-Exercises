// Write class below
class ShiftCipher {
  constructor(shiftValue) {
    this.shiftValue = shiftValue;
  }
  encrypt(str) {
    str = str.toUpperCase();
    let encryptedStr = "";
    let charCodeOfFirstCapLetter = 65;
    let charCodeOfLastCapLetter = 90;

    for (let i = 0; i < str.length; i++) {
      let currentLetterCharCode = str.charCodeAt(i);

      if (currentLetterCharCode >= charCodeOfFirstCapLetter && currentLetterCharCode <= charCodeOfLastCapLetter) {
        currentLetterCharCode += this.shiftValue;
        let isCapLetter = currentLetterCharCode - charCodeOfLastCapLetter <= 0;

        if (!isCapLetter) {
          currentLetterCharCode = charCodeOfFirstCapLetter + (currentLetterCharCode - charCodeOfLastCapLetter + 1);
        }

        // fromCharToLetter(currentLetterCharCode, encryptedStr);
        encryptedStr += String.fromCharCode(currentLetterCharCode);
      } else {
        // fromCharToLetter(currentLetterCharCode, encryptedStr);
        encryptedStr += String.fromCharCode(currentLetterCharCode);
      }
    }

    return encryptedStr;
  }

  decrypt(str) {
    let charCodeOfFirstCapLetter = 65;
    let charCodeOfLastCapLetter = 90;
    let decryptedString = "";

    for (let i = 0; i < str.length; i++) {
      let currentLetterCharCode = str.charCodeAt(i);

      if (currentLetterCharCode >= charCodeOfFirstCapLetter && currentLetterCharCode <= charCodeOfLastCapLetter) {
        currentLetterCharCode -= this.shiftValue;
        let isCapLetter = currentLetterCharCode - charCodeOfFirstCapLetter >= 0;

        if (!isCapLetter) {
          currentLetterCharCode = charCodeOfLastCapLetter + (currentLetterCharCode - charCodeOfFirstCapLetter + 1);
        }

        // fromCharToLetter(currentLetterCharCode, encryptedStr);
        decryptedString += String.fromCharCode(currentLetterCharCode);
      } else {
        // fromCharToLetter(currentLetterCharCode, encryptedStr);
        decryptedString += String.fromCharCode(currentLetterCharCode);
      }
    }
    return decryptedString.toLowerCase();
  }
}
// const fromCharToLetter = (charCode, str) => {
//   let letter = String.fromCharCode(charCode);
//   str += letter;
// };

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to code!")); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
