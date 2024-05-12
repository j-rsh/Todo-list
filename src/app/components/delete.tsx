import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/mutation";
import { closeSnackbar, useSnackbar } from "notistack";
import GET_TODOS from "../graphql/query";
import { TrashIcon } from "@heroicons/react/24/outline";

const Delete: React.FC<any> = ({id}) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async (id: string) => {
    const action = () => (
      <div className="text-xs">
        <button
          onClick={confirmAction}
          className="text-rose-600 bg-white mr-2 p-1 rounded-lg"
        >
          delete
        </button>
        <button
          onClick={cancelAction}
          className="text-yellow-600	 bg-white p-1 rounded-lg"
        >
          cancel
        </button>
      </div>
    );

    const snackbarId = enqueueSnackbar(
      "Are you sure you want to delete this item?",
      {
        action,
        variant: "warning",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 3000,
        key: "delete-snackbar",
      },
    );

    const confirmAction = async () => {
      await deleteTodo({ variables: { id: id } });
      enqueueSnackbar("Item deleted successfully!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 1000,
      });
      closeSnackbar(snackbarId);
    };

    const cancelAction = () => {
      enqueueSnackbar("Deletion cancelled.", {
        variant: "info",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 1000,
      });
      closeSnackbar(snackbarId);
    };
  };
  return (
    <TrashIcon
      onClick={() => handleDelete(id)}
      className="h-4 w-4"
      aria-hidden="true"
    />
  );
};

export default Delete;
