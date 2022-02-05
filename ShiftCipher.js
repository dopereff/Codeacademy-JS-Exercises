// Write class below
class ShiftCipher {
  constructor(shiftValue) {
    this.shiftValue = shiftValue;
  }

  charCodeFirstCapLetter = 65;
  charCodeLastCapLetter = 90;

  isCapLetter = (charCode) => charCode >= this.charCodeFirstCapLetter && charCode <= this.charCodeLastCapLetter;

  wrapAroundAlphabet = (charCode) => {
    if (charCode > this.charCodeLastCapLetter) {
      const difference = charCode - this.charCodeLastCapLetter;
      charCode = this.charCodeFirstCapLetter + difference - 1;
    } else {
      const difference = this.charCodeFirstCapLetter - charCode;
      charCode = this.charCodeLastCapLetter - difference + 1;
    }
    return charCode;
  };

  toLetterFromCharCode = (charCode) => String.fromCharCode(charCode);

  encrypt(str) {
    str = str.toUpperCase();
    let encryptedStr = "";

    for (let i = 0; i < str.length; i++) {
      let currentLetterCharCode = str.charCodeAt(i);

      if (this.isCapLetter(currentLetterCharCode)) {
        currentLetterCharCode += this.shiftValue;

        if (!this.isCapLetter(currentLetterCharCode)) {
          currentLetterCharCode = this.wrapAroundAlphabet(currentLetterCharCode);
        }
      }
      encryptedStr += this.toLetterFromCharCode(currentLetterCharCode);
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
          currentLetterCharCode = this.wrapAroundAlphabet(currentLetterCharCode);
        }
      }
      decryptedString += this.toLetterFromCharCode(currentLetterCharCode);
    }
    return decryptedString.toLowerCase();
  }
}