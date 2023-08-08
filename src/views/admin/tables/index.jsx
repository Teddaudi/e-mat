import React, { useState } from "react";
import CheckTable from "./components/CheckTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

const Tables = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [complaint, setComplaint] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setComplaint(""); // Clear the complaint input when the modal is closed
  };

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleReportIncident = () => {
    // Here you can implement the logic to report the incident or complaint
    console.log("Complaint:", complaint);
    // Add more logic, like sending the complaint to a server or performing an action
    handleCloseModal(); // Close the modal after reporting
  };

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <button
          className="bg-blue-700 text-white mt-3 p-2 rounded-md"
          onClick={handleOpenModal}
        >
          Report Incident / Add Complaint
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Report Incident / Add Complaint
            </h2>
            <textarea
              value={complaint}
              onChange={handleComplaintChange}
              placeholder="Enter your complaint or incident report here..."
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleReportIncident}
            >
              Submit Report
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
    </div>
  );
};

export default Tables;
