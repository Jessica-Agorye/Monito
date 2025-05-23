const DesktopFilter = ({ selected, onChange }) => {
  return (
    <div className="mb-10">
      <aside>
        <div className="mt-10">
          <p className="lg:text-[#003459] text-lg font-bold">Filter</p>
        </div>

        <div>
          <div className="pt-10">
            <p className="font-bold">Gender</p>
            <label htmlFor="" className="flex pt-2">
              <input
                type="radio"
                name="gender"
                checked={selected === "male"}
                onChange={() => onChange("male")}
              />
              <span className="pl-2">Male</span>
            </label>
            <label htmlFor="" className="flex">
              <input
                type="radio"
                name="gender"
                checked={selected === "female"}
                onChange={() => onChange("female")}
              />
              <span className="pl-2">Female</span>
            </label>

            {/* <label htmlFor="" className="flex">
              <input
                type="radio"
                name="gender"
                checked={selected === "female" && "male"}
                onChange={() => onChange("")}
              />
              <span className="pl-2">All</span>
            </label> */}
          </div>
          <div className="mt-10  border-t-1 border-gray-200  pt-2.5 ">
            <p className="font-bold">Color</p>
            <label htmlFor="" className="flex pt-2 ">
              <input type="checkbox" />
              <span className="pl-2">Red</span>
            </label>

            <label htmlFor="" className="flex">
              <input type="checkbox" />
              <span className="pl-2">Apricot</span>
            </label>
            <label htmlFor="" className="flex">
              <input type="checkbox" />
              <span className="pl-2">Black</span>
            </label>
            <label htmlFor="" className="flex">
              <input type="checkbox" />
              <span className="pl-2">Black & White</span>
            </label>
            <label htmlFor="" className="flex">
              <input type="checkbox" />
              <span className="pl-2">Silver</span>
            </label>
            <label htmlFor="" className="flex">
              <input type="checkbox" />
              <span className="pl-2">Tan</span>
            </label>
          </div>

          <div className=" mt-4 border-t-1 border-gray-200 ">
            <p className="font-bold pt-2">Price</p>
            <div className="mt-2 space-x-2">
              <button className="  border-gray-200 w-[130px] h-[40px] border-b-1">
                <p> Min </p>
              </button>
              <button className="  border-gray-200 w-[130px] h-[40px] border-b-1">
                <p> Max</p>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-b-1 border-gray-200 pb-3 ">
          <p className="font-bold">Breed</p>
          <label htmlFor="" className="flex">
            <input type="checkbox" />
            <span className="pl-2">Small</span>
          </label>
          <label htmlFor="" className="flex">
            <input type="checkbox" />
            <span className="pl-2">Medium</span>
          </label>
          <label htmlFor="" className="flex">
            <input type="checkbox" />
            <span className="pl-2">Large</span>
          </label>
        </div>
      </aside>
    </div>
  );
};

export default DesktopFilter;
