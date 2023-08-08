import React, { useState } from "react";
import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import { FaMoneyBill } from "react-icons/fa";
import mpesa from "assets/img/avatars/mpesa.jpg";
import air from "assets/img/avatars/air.png";
import qr from "assets/img/avatars/qr.png";
const Storage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewTicketClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="ml-auto">
        <CardMenu />
      </div>
      {/* Your storage */}
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          <FaMoneyBill />
        </div>
        <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Make Payment
        </h4>
        <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
          <div className="flex gap-5 w-full items-center justify-center">
            <img alt="mpesa" src={mpesa} className="border rounded-md h-20 cursor-pointer" />
            <img alt="air" src={air} className="border rounded-md h-20 cursor-pointer" />
          </div>
          <button className="bg-blue-700 text-white mt-3 p-2 rounded-md" onClick={handleViewTicketClick}
          >View Ticket</button>
        </p>
      </div>

      {/* Progress bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">Balance</p>
          <p className="text-sm font-medium text-gray-600">Ksh 760</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span className="h-full w-1/2 rounded-full bg-brand-500 dark:!bg-white" />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex p-5 w-full mx-2 items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-2 rounded-md shadow-lg">
            {/* Modal content */}
            <h2 className="text-xl font-bold mb-4">Ticket Details</h2>
            <img
              src={qr}
              alt="QR Code"
              className="h-66 w-[222px] rounded-md border "
            />

            <div className="mb-4 w-full justify-center items-center border border-teal-200 flex flex-col">
              <h4>Vehicle :<span className="font-semibold"> City Shuttle 233 </span></h4>
              <h4>Number Plate:<span  className="font-semibold">KBY 323D </span></h4>
              <h4>Route:<span  className="font-semibold"> Ngong to CBD </span></h4>
              <h4>To CBD:<span  className="font-semibold"> 06:00 AM </span></h4>
              <h4>To Ngong:<span  className="font-semibold"> Flexible </span></h4>

              <button
                className="bg-blue-500 text-white w-full px-4 py-2 rounded-md mt-4"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Storage;
