import rightArrow from "../assets/rightArrow.png";

const TopFilter = () => {
  return (
    <div className=" pl-6 lg:pl-[120px] ">
      <ul className="flex gap-6">
        <li>
          <a href="" className="flex">
            Home{" "}
            <span>
              <img src={rightArrow} alt="" />
            </span>
          </a>
        </li>
        <li>
          <a href="" className="flex">
            Dog{" "}
            <span>
              <img src={rightArrow} alt="" />
            </span>
          </a>
        </li>
        <li>
          <a href="">Small Dog </a>
        </li>
      </ul>
    </div>
  );
};

export default TopFilter;
