import Banner from "./components/Banner";
import ride1 from "assets/img/dashboards/ride1.jfif";
import ride2 from "assets/img/dashboards/ride2.jpg";
import ride3 from "assets/img/dashboards/ride3.jpg";

import NFt4 from "assets/img/nfts/Nft4.png";

import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">


        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Top Rides
          </h4>

        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Deuces"
            author="Ngong Road Sacco"
                        image={ride1}
          /><NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Thika Road Sugar"
            author="Thika Road Bosses"
            
            image={ride2}/>
            <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Africanah"
            author="City Shuttle"
            
            image={ride3}
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <NftCard
        bidders={[avatar1, avatar2, avatar3]}
        title="Thika Road Sugar"
        author="Thika Road Bosses"
        
        image={ride2}/>
        <NftCard
        bidders={[avatar1, avatar2, avatar3]}
        title="Africanah"
        author="City Shuttle"
        
        image={ride3}
      />
          
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />

      </div>
    </div>
  );
};

export default Marketplace;
