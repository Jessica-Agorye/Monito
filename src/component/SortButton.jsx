import { useState } from "react";

import arrowdown from "../assets/arrowdown.png";

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleArrow() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {" "}
      <div className="">
        <button
          className="flex rounded-[20px] border border-solid border-black pt-[10px] pr-[12px] pb-[8px] pl-[20px]"
          onClick={toggleArrow}
        >
          Sort by Popular:
          <span>
            {" "}
            <img
              src={arrowdown}
              alt="arrow-pointing-down"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </button>

        {isOpen && (
          <ul className="mt-2 bg-white border rounded shadow-md p-2 absolute z-10 ">
            <li>
              {" "}
              <a href="" className="block px-2 py-1 hover:bg-gray-100 rounded">
                greyhound
              </a>
            </li>
            <li>
              {" "}
              <a href="" lassName="block px-2 py-1 hover:bg-gray-100 rounded">
                Pitbull
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortButton;
