function addlocalStorageToStore(localStorageData) {
  return { type: "LS_TO_STORE", localStorageData };
}

export default addlocalStorageToStore;
