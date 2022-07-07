function removeActivityFromHistory(index) {
  console.log("remove", index);
  return { type: "REMOVE_ACTIVITY_FROM_HISTORY", index };
}

export default removeActivityFromHistory;
