import firebase from "../../utils/firebase";

// export const firebase_push = (data, ref) => {
//   const rootRef = firebase.database().ref(ref);
//   rootRef.push(data);
// };

export const firebase_readdata = (ref) => {
  return new Promise((resolve, reject) => {
    let rootRef = firebase.database().ref(ref);
    rootRef.on("value", function (snapshot) {
      const _data = snapshot.val();
      const _listData = [];
      for (let key in _data) {
        _listData.push({ key, ..._data[key] });
      }
      resolve(_listData);
    });
  });
};

export const firebase_push = (data, ref) => {
  return new Promise((resolve, reject) => {
    try {
      if (data) {
        const rootRef = firebase.database().ref(ref);
        rootRef.push(data);
        resolve({
          ...data,
          status: "success",
          message: "create new data success.",
        });
      } else {
        resolve({ status: "error", message: "don't have data." });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const firebase_update = (key, data, ref) => {
  return new Promise((resolve, reject) => {
    try {
      if (key) {
        const rootRef = firebase.database().ref(ref).child(key);
        rootRef.update(data);
        resolve({ key, status: "success", message: "update data success." });
      } else {
        resolve({ status: "error", message: "don't have key." });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const firebase_delete = (key, ref) => {
  return new Promise((resolve, reject) => {
    try {
      if (key) {
        const rootRef = firebase.database().ref(ref).child(key);
        rootRef.remove();
        resolve({ key, status: "success", message: "delete data success." });
      } else {
        resolve({ status: "error", message: "don't have key." });
      }
    } catch (error) {
      reject(error);
    }
  });
};
