// Write class below
class ShiftCipher {
  constructor(shiftValue) {
    this.shiftValue = shiftValue;

    this.charCodeFirstCapLetter = 65;
    this.charCodeLastCapLetter = 90;

    this.isCapLetter = (charCode) => {
      if (charCode >= this.charCodeFirstCapLetter && charCode <= this.charCodeLastCapLetter) {
        return true;
      } else {
        return false;
      }
    };

    // this.addToString = (str, charCode) => {
    //   str += String.fromCharCode(charCode);
    //   return str;
    // };

    // this.wrapAroundAlphabet = (charCode) => {
    //   if (charCode > this.charCodeLastCapLetter) {
    //     const difference = charCode - this.charCodeLastCapLetter;
    //     charCode = this.charCodeFirstCapLetter + difference - 1;
    //   } else {
    //     const difference = this.charCodeFirstCapLetter - charCode;
    //     charCode = this.charCodeLastCapLetter - difference + 1;
    //   }
    // };
  }

  encrypt(str) {
    str = str.toUpperCase();
    let encryptedStr = "";

    for (let i = 0; i < str.length; i++) {
      let currentLetterCharCode = str.charCodeAt(i);

      if (this.isCapLetter(currentLetterCharCode)) {
        currentLetterCharCode += this.shiftValue;

        if (!this.isCapLetter(currentLetterCharCode)) {
          // this.wrapAroundAlphabet(currentLetterCharCode);
          const difference = currentLetterCharCode - this.charCodeLastCapLetter;
          currentLetterCharCode = this.charCodeFirstCapLetter + difference - 1;
        }
        // this.addToString(encryptedStr, currentLetterCharCode);
        encryptedStr += String.fromCharCode(currentLetterCharCode);
      } else {
        // this.addToString(encryptedStr, currentLetterCharCode);
        encryptedStr += String.fromCharCode(currentLetterCharCode);
      }
    }
    return encryptedStr;
  }

  decrypt(str) {
    let decryptedString = "";

    for (let i = 0; i < str.length; i++) {
      let currentLetterCharCode = str.charCodeAt(i);

      if (this.isCapLetter(currentLetterCharCode)) {
        currentLetterCharCode -= this.shiftValue;

        if (!this.isCapLetter(currentLetterCharCode)) {
          // this.wrapAroundAlphabet(currentLetterCharCode);
          const difference = this.charCodeFirstCapLetter - currentLetterCharCode;
          currentLetterCharCode = this.charCodeLastCapLetter - difference + 1;
        }
        // this.addToString(decryptedString, currentLetterCharCode);
        decryptedString += String.fromCharCode(currentLetterCharCode);
      } else {
        // this.addToString(decryptedString, currentLetterCharCode);
        decryptedString += String.fromCharCode(currentLetterCharCode);
      }
    }
    return decryptedString.toLowerCase();
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to codez!")); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt("K <3 OA RWRRA")); // returns 'i <3 my puppy'
