import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IconfirmModal } from "../../interfaces";

export default function ConfirmModal({
  isOpenConfirmM,
  setIsOpenConfirmM,
  children,
}: IconfirmModal) {
  function close() {
    setIsOpenConfirmM(false);
  }
  //*----------> Handler

  return (
    <>
      <Dialog
        open={isOpenConfirmM}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <DialogBackdrop className={"fixed inset-0 backdrop-blur-md"} />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-2 border-red-500"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Are you sure to delete the product?
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-gray-500">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="flex items-center mt-2 justify-between *:w-full gap-3">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
