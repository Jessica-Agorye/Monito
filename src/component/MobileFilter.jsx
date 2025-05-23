import { useState } from "react";

import SortButton from "./SortButton";
import filtericon from "../assets/filtericon.png";

const MobileFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  function toggleFilter() {
    setOpenFilter(!openFilter);
  }
  return (
    <>
      <div className="flex mt-10 px-4 justify-between">
        <div>
          <SortButton />
        </div>
        <div className="flex gap-2 items-center">
          <img src={filtericon} alt="filter-icon" onClick={toggleFilter} />
          <p className="lg:text-[#003459] text-lg font-bold">Filter</p>
        </div>

        {openFilter && (
          <ul className="mt-2 bg-white border rounded shadow-md p-2 absolute z-10 ">
            <li>
              {" "}
              <a href="" className="block px-2 py-1 hover:bg-gray-100 rounded">
                name
              </a>
            </li>
            <li>
              {" "}
              <a href="" lassName="block px-2 py-1 hover:bg-gray-100 rounded">
                popularity
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default MobileFilter;
