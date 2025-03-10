/* eslint-disable react-refresh/only-export-components */
import {  Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { IPropsModle } from "../../interfaces";
import { memo } from "react";
// import { useState } from "react";



function Modle({isOpen,close,title,children}:IPropsModle) {


  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none text-black  "
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 backdrop-blur-sm" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto  ">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-2"
            >
              {title && (
                <DialogTitle as="h3" className="font-medium text-xl">
                  {title}
                </DialogTitle>
              )}

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default memo(Modle)