import { Dialog, Transition,TransitionChild,DialogPanel } from "@headlessui/react";
import React from "react";
import ButtonClose from "../../../shared/ButtonClose/ButtonClose";
import ProductQuickView from "./ProductQuickView";
// import ProductQuickView2 from "./ProductQuickView2";



const ModalQuickView = ({
  show,
  onCloseModalQuickView,
}) => {

  return (
    <Transition appear show={show} as={'div'}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50"
        onClose={onCloseModalQuickView}
      >
        <div className="flex items-stretch md:items-center justify-center h-full text-center md:px-4">
          <TransitionChild
            as={'div'}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
    
          </TransitionChild>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block align-middle" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as={'div'}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-flex xl:py-8 w-full max-w-5xl max-h-full">
              <div
                className="flex-1 flex overflow-hidden max-h-full p-8 w-full text-left align-middle transition-all transform lg:rounded-2xl bg-white 
              dark:bg-neutral-900 dark:border dark:border-slate-700 dark:text-slate-100 shadow-xl"
              >
                <span className="absolute right-3 top-3 z-50">
                  <ButtonClose onClick={onCloseModalQuickView} />
                </span>

                <div className="flex-1 overflow-y-auto rounded-xl hiddenScrollbar ">
                  {/* {location.pathname.includes("home2") ? (
                    <ProductQuickView2 />
                  ) : (
                    <ProductQuickView />
                  )} */}
                  <ProductQuickView />
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalQuickView;
