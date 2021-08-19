import defaultStrings from "./localString.json";

const getString = (label, printWarning = true) => {
  const languageCode = process.env.REACT_APP_LANGUAGE_CODE;
  if (strings[label]) {
    return strings[label][languageCode]
      ? strings[label][languageCode]
      : strings[label].en;
  } else {
    if (printWarning) {
      console.log(`String ${label} not found in any language!`);
    }
    return "";
  }
};

let strings = defaultStrings;

export const Strings = {
  local: strings,
  setStrings: (translations) => {
    strings = { ...strings, ...translations };
  },
  getString: (label) => {
    return getString(label);
  },
};
