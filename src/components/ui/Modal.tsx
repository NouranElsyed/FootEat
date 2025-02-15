import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface IProps {
  isOpen:boolean,
  closeModal:()=>void,
  openModal:()=>void,
  children:ReactNode,
}

export const Modal = ({  isOpen,closeModal,children}:IProps)=> {


  return (
    <>
      <Transition appear show={isOpen} as={Fragment} >
        <Dialog as="div" className="relative z-50 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-">
            <div className="flex  justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl  bg-white   py-4 px-6 text-left align-middle shadow-xl transition-all">
               
                  <div className="mt-2 flex flex-col">
                      <button onClick={closeModal} className='icon-close text-md absolute right-0 top-0 p-4 cursor-pointer  hover:text-red-500  transition-all duration-500  '/>

                      {children} 
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
    </>
 
  )
}
