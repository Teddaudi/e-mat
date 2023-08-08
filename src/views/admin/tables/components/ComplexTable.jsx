import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo } from "react";
import Progress from "components/progress";
const ComplexTable = (props) => {
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
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          Incidents Reports
        </div>
        <CardMenu />
      </div>

      <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
      <table className="w-full">
      <thead>
        <tr>
          <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
            <p className="text-xs tracking-wide text-gray-600">Region</p>
          </th>
          <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
            <p className="text-xs tracking-wide text-gray-600">Extend</p>
          </th>
          <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
            <p className="text-xs tracking-wide text-gray-600">DATE</p>
          </th>
         
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              Cabanas
            </p>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]">
            <div className="flex items-center gap-2">
             
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Minor
              </p>
            </div>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              2023-08-08
            </p>
          </td>   
               
        </tr>
        <tr>
        <td className="pt-[14px] pb-[18px] sm:text-[14px]">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            Thika Road
          </p>
        </td>
        <td className="pt-[14px] pb-[18px] sm:text-[14px]">
          <div className="flex items-center gap-2">
           
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              Major
            </p>
          </div>
        </td>
        <td className="pt-[14px] pb-[18px] sm:text-[14px]">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            2023-07-06
          </p>
        </td>   
             
      </tr>
      
      <tr>
      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          Ngong
        </p>
      </td>
      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
        <div className="flex items-center gap-2">
         
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            Critical
          </p>
        </div>
      </td>
      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          2023-06-08
        </p>
      </td>   
           
    </tr>
    
        
      </tbody>
    </table>
    
      </div>
    </Card>
  );
};

export default ComplexTable;
