"use client";

import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../graphql/mutation";
import { useState } from "react";
import GET_TODOS from "../graphql/query";
import { useSnackbar } from "notistack";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  const { enqueueSnackbar } = useSnackbar();

  const onChangeHandler = (value: string) => {
    setTitle(value);
  };

  const clickHandler = async () => {
    if (title.trim() != "") {
      await addTodo({ variables: { title: title } });
       enqueueSnackbar("Item added successfully!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 3000,
      });
      setTitle(""); 
    } else {
      enqueueSnackbar("Note is empty!", {
        variant: 'error',
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div className="w-1/2 m-auto my-5 flex justify-around">
      <input
        type="text"
        className="w-4/5 px-4 py-2 border border-slate-200 rounded-lg focus:border-slate-400"
        placeholder="Enter your note..."
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <button
        className="bg-[#f4f2ff] px-4 py-2 border border-slate-200 rounded-lg text-gray-500 focus:border-slate-400"
        onClick={clickHandler}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
