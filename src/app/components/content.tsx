import { useState } from "react";
import Modal from "./modal";
import { UPDATE_TODO } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Content: React.FC<any> = ({ title, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-64 truncate" onClick={() => setOpen(true)}>
        {title}
      </div>
      <Modal open={open} setOpen={setOpen} request={undefined}>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Your Note
        </label>
        <textarea
          id="message"
          className="block p-2.5 md:h-60 w-full md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={title}
        ></textarea>
      </Modal>
    </>
  );
};

export default Content;
