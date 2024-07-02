import {  Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IPropsModle } from "../../interfaces";
// import { useState } from "react";



export default function Modle({isOpen,close,title,children}:IPropsModle) {


  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none text-black"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="font-medium text-xl"
                >
                  {title}
                </DialogTitle>
              )}
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
