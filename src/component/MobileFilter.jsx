import SortButton from "./SortButton";
import filterIcon from "../assets/filterIcon.png";

const MobileFilter = () => {
  return (
    <>
      <div className="flex mt-10 px-4 justify-between">
        <div>
          <SortButton />
        </div>
        <div className="flex gap-2 items-center">
          <img src={filterIcon} alt="filter-icon" />
          <p className="lg:text-[#003459] text-lg font-bold">Filter</p>
        </div>
      </div>
    </>
  );
};

export default MobileFilter;
