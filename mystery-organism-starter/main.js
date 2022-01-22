// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const baseToMutate = Math.floor(Math.random() * 15) - 1;
      let mutadedBase = this.dna[baseToMutate];
      switch (mutadedBase) {
        case "A":
          mutadedBase = ["T", "C", "G"][Math.floor(Math.random() * 3)];
          break;
        case "T":
          mutadedBase = ["A", "C", "G"][Math.floor(Math.random() * 3)];
          break;
        case "C":
          mutadedBase = ["T", "A", "G"][Math.floor(Math.random() * 3)];
          break;
        case "G":
          mutadedBase = ["T", "C", "A"][Math.floor(Math.random() * 3)];
          break;
        default:
          break;
      }
      this.dna[baseToMutate] = mutadedBase;
    },
    compareDNA(pAequor) {
      let matches = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matches++;
        }
      }
      let commonDNA = Math.floor((matches / 15) * 100);
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${commonDNA}% DNA in common.`);
    },
    willLikelySurvive() {
      let cOrGBases = 0;
      this.dna.forEach((base) => {
        if (base === "C" || base === "G") {
          cOrGBases++;
        }
      });
      if (Math.floor((cOrGBases / 15) * 100) >= 60) {
        return true;
      }
      return false;
    },
  };
};

const create30Survivors = () => {
  let pAequorSirvivors = [];
  let specimenNum = 1;
  while (pAequorSirvivors.length < 30) {
    let specimen = pAequorFactory(specimenNum, mockUpStrand());
    if (specimen.willLikelySurvive()) {
      pAequorSirvivors.push(specimen.dna);
    }
    specimenNum++;
  }
  return pAequorSirvivors;
};
