import MiniCalendar from "components/calendar/MiniCalendar";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">

        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spent this month"}
          subtitle={"Ksh 5,910"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Monthly Cost"}
          subtitle={"Ksh 6,670"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"Ksh 760"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Routes Active"}
          subtitle={"2"}
        />

      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        {/*<div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
  </div>*/}

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

       

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
