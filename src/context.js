import { createContext, useContext, useState } from "react";

const MyContext = createContext();
const MyContextProvider = ({ childen }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetail, setNoteDetail] = useState("");

  return (
    <MyContext.Provider
      value={{ noteTitle, setNoteTitle, noteDetail, setNoteDetail }}
    >
      {childen}
    </MyContext.Provider>
  );
};

export const useApp = () => {
  return useContext(MyContext)
}

export { MyContext, MyContextProvider };
