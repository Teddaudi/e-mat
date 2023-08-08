import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import mpesa from "assets/img/avatars/mpesa.jpg";
import air from "assets/img/avatars/air.png";
const Storage = () => {
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
          <img alt="mpesa" src={mpesa} className="border rounded-md h-20 cursor-pointer"/>
          <img alt="air" src={air} className="border rounded-md h-20 cursor-pointer"/>
          </div>
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
    </Card>
  );
};

export default Storage;
