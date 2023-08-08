import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "components/card";

const NftCard = ({ title, author, price, image, bidders, extra }) => {
  const [heart, setHeart] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    nftTitle: "",
    userName: "",
    contactNumber: ""
  });

  const handleBookRideClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}{" "}
            </p>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0 justify-center items-center">
          Likes <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +5 
            </span>
            
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          
          <button
            href=""
            onClick={handleBookRideClick}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Book Ride
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 mx-3 rounded-md flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            {/* Modal content */}
            <h4 className="text-[16px] font-bold mb-4 w-full items-center justify-center">Book Ride...</h4>
            <p className="text-gray-600 mb-4">
            <span className="font-semibold">
            Title: {" "} 
            </span>
            {title}, KDC 877F
            
            </p>
            <div className="flex gap-1">
            <input
            type="text"
            name="nftTitle"
            value={bookingData.nftTitle}
            placeholder="Name"
            onChange={handleInputChange}
            className="mb-3 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
            type="text"
            name="userName"
            value={bookingData.userName}
            placeholder="Number"
            onChange={handleInputChange}
            className="mb-3 p-2 border border-gray-300 rounded-md w-full"
            />
            </div>
            <div className="flex gap-3">
            <input
            type="text"
            name="nftTitle"
            value={bookingData.nftTitle}
            placeholder="Residence From"
            onChange={handleInputChange}
            className="mb-3 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
            type="text"
            name="userName"
            value={bookingData.userName}
            placeholder="To"
            onChange={handleInputChange}
            className="mb-3 p-2 border border-gray-300 rounded-md w-full"
            />
            </div>
            
        
        <select
          className="auth mb-3 w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="route"
          name="route"
        >
          <option value="">Select Route</option>
          <option value="route1">Ngong to Kamakis</option>
          <option value="route1">Ngong to CBD via South C</option>
          <option value="route1">Thika to CBD,Archive</option>
        
        </select>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleBookRideClick}

            >
              Book Ride
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default NftCard;
