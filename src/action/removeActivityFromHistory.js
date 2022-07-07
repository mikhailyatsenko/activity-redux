function removeActivityFromHistory(index) {
  return { type: "REMOVE_ACTIVITY_FROM_HISTORY", index };
}

export default removeActivityFromHistory;
