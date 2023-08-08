import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/avatars/kck.jfif";
import image2 from "assets/img/avatars/kdg.jfif";
import Card from "components/card";

const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          My Routes
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here are some of the routes you can use
        </p>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-1 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Ngong - CBD
            </p>
            <p className="mt-2 text-sm text-gray-600">
              KDG 189K
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See vehicle details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              South C - Archives
            </p>
            <p className="mt-2 text-sm text-gray-600">
            KCK 555D
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See vehicle details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
          </div>
          </div>
          <button className="bg-blue-700 p-1 text-white rounded-md mt-1">
          Update Routes          
          </button>
      
    </Card>
  );
};

export default Project;
