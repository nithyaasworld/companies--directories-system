// Write firebase related methods here.
import { databaseRef } from "../firebaseConfig";

export const addCompanyToDB = async (payload) => {
    return await databaseRef.collection("companies").add(payload);
    // .then((addedData) => {
    //   console.log(
    //     "Data with id: " +
    //       addedData.id +
    //       " Path: " +
    //       addedData.path +
    //       " successfully added to DB"
    //   );
    //   let itemToAdd = {
    //     id: addedData.id,
    //     content: inputRef.current.value,
    //     completed: false,
    //   };
    //   console.log({ itemToAdd });
    //   dispatch(addTodo(itemToAdd));
    //   inputRef.current.value = "";
    // })
    // .catch((e) => {
    //   console.error("Not able to add data to DB.", e);
    // });
}
