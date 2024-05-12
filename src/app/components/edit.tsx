import { useState } from "react";
import Modal from "./modal";
import { UPDATE_TODO } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Edit: React.FC<any> = ({ title, id, completed }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ title, completed });

  const [updatTodo] = useMutation(UPDATE_TODO);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked } = e.target;
    let value = type === "checkbox" ? checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clickHandler = () => {
    updatTodo({ variables: { id, ...data } });
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <input
          type="text"
          name="title"
          placeholder="enter title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:border-slate-400 my-3"
        />
        <label className="w-2/3 block text-gray-500 my-3">
          <span className="text-xs">
            if the task is done click here: &nbsp;
          </span>
          <input
            type="checkbox"
            name="completed"
            checked={data.completed}
            onChange={onChangeHandler}
            className="bg-[#f4f2ff] border border-slate-200 rounded-lg focus:border-slate-400 align-middle"
          />
        </label>
        <button
          onClick={clickHandler}
          className="w-1/2 m-auto bg-[#f4f2ff] px-4 py-2 border border-slate-200 rounded-lg focus:border-slate-400 my-3"
        >
          Edit
        </button>
      </Modal>

      <PencilSquareIcon
        onClick={() => setOpen(true)}
        className="h-4 w-4 mt-2"
        aria-hidden="true"
      />
    </>
  );
};

export default Edit;
