import { useEffect, useCallback } from "react";
import { useDispatch, useStore } from "react-redux";
import addlocalStorageToStore from "../action/addlocalStorageToStore";

function LocalStorageAndStoreConnector() {
  const dispatch = useDispatch();
  const store = useStore();

  const storeToLocalStorage = useCallback(() => {
    if (store.getState) {
      localStorage.setItem("activityData", JSON.stringify(store.getState()));
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
