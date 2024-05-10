import { useState } from "react";
import Modal from "./Modal";
import { UPDATE_TODO } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

const Edit: React.FC<any> = ({ title , id }) => {
  const [open, setOpen] = useState(false);

  const [updatTodo, { loading, data, error }] = useMutation(UPDATE_TODO);

  return (
    <>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <input
          type="text"
          placeholder="enter title"
          onChange={(e) => updatTodo({ variables: {  id:id , title: e.target.value } })}
          value={title}
        />
      </Modal>
      <button
        type="button"
        className="bg-blue-500"
        onClick={() => setOpen(true)}
      >
        Edit
      </button>
    </>
  );
};

export default Edit;
