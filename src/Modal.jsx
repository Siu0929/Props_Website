// src/Modal.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // Delay for 10 seconds (10000 milliseconds)

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      <div className="flex justify-center items-center h-screen">
        {isOpen && (
          <dialog id="my_modal_2" className="modal modal-open">
            <div className="modal-box relative flex flex-col p-0 w-[1000px] bg-white border-none shadow-none">
              <img
                src="/Image.jpeg"
                alt="modal"
                className="w-full"
              />
              <button
                onClick={() => navigate("/black-screen")}
                className="btn btn-ghost absolute top-[420px] left-[37px] mb-2 w-[200px] rotate-[7.5deg] text-center text-transparent hover:bg-transparent z-10 "
              >
                Close
              </button>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={toggleModal}>close</button>
            </form>
          </dialog>
        )}
      </div>
    </>
  );
}

export default Modal;
