import { Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  request: any;
  children: any;
}

export default function Modal({
  open,
  setOpen,
  request,
  children,
}: ModalProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
  as="div"
  className="fixed inset-0 z-10 overflow-y-auto w-full"
  onClose={() => setOpen(false)}
>
  <TransitionChild
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  </TransitionChild>

  {/* Adjusted container to center the modal */}
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="flex min-h-1/2 min-width-full items-stretch justify-stretch text-center sm:items-stretch sm:p-3">
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <DialogPanel className="w-full flex flex-col transform overflow-hidden sm:rounded-lg rounded-none bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
          <div className="absolute left-2 top-0 pr-4 pt-4 sm:block">
            <button
              type="button"
              className="text-left rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <br></br>
          {children}
          <div className="container mx-auto my-auto">{request}</div>
        </DialogPanel>
      </TransitionChild>
    </div>
  </div>
</Dialog>

    </Transition>
  );
}
