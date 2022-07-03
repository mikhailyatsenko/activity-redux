import { useEffect, useCallback } from "react";
import { useDispatch, useStore } from "react-redux";
import addlocalStorageToStore from "../action/addlocalStorageToStore";

function LocalStorageAndStoreConnector() {
  const dispatch = useDispatch();
  const store = useStore();

  const storeToLocalStorage = useCallback(() => {
    let activity = store.getState().activity;
    if (activity) {
      localStorage.setItem("activityData", JSON.stringify(activity));
    }
  }, [store]);

  const localStorageToStore = useCallback(() => {
    const localStorageData = JSON.parse(localStorage.getItem("activityData"));
    if (localStorageData !== null) {
      dispatch(addlocalStorageToStore(localStorageData));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorageToStore();
    window.addEventListener("beforeunload", storeToLocalStorage);
  }, [storeToLocalStorage, localStorageToStore]);
}

export default LocalStorageAndStoreConnector;
