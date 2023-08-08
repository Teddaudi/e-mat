import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const ColumnsTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Vehicle Ratings
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
  <table className="w-full">
    <thead>
      <tr>
        <th className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700">
          <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
            Number Plate
          </div>
        </th>
        <th className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700">
          <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
            Rating
          </div>
        </th>
        <th className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700">
          <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
            Route
          </div>
        </th>
        <th className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700">
          <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
            Age
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          KDC 442F
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
          4.5
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          Utawala - CBD
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          37
        </p>
      </td>
    </tr>
    <tr>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          KDC 442F
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
          3.5
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          Utawala - CBD
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          27
        </p>
      </td>
    </tr>
    <tr>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          KBD 242E
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
          4.5
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          Ngong - CBD
        </p>
      </td>
      <td className="pt-[14px] pb-[20px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          47
        </p>
      </td>
    </tr>
    
    </tbody>
  </table>
</div>

    </Card>
  );
};

export default ColumnsTable;
