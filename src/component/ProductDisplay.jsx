// import { useState } from "react";
import ReactPaginate from "react-paginate";
// import { pets } from "../data/petData";
import SortButton from "./SortButton";

const ProductDisplay = ({ pets, currentPage, setCurrentPage }) => {
  //   const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 12;

  const offset = currentPage * itemsPerPage;
  const currentPets = pets.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(pets.length / itemsPerPage);

  console.log({
    currentPage,
    offset,
    itemsPerPage,
    petsLength: pets.length,
    currentPetsLength: currentPets.length,
    pageCount,
  });

  return (
    <div className="mt-10 lg:px-8">
      <div className=" lg:flex lg:justify-between">
        <p className="pl-6 lg:pl-0 font-bold text-xl text-[#003459]  ">
          Small Dogs :{" "}
          <span className="text-gray-400 text-sm">{pets.length} puppies</span>
        </p>

        <div className="hidden lg:block">
          {" "}
          <SortButton />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
        {currentPets.map((pet, id) => (
          <div key={id} className="bg-white rounded-lg shadow-lg p-4  ">
            <div className="px-2 py-2 leading-10 ">
              <img
                src={pet.image}
                className="rounded-lg mx-auto object-cover w-full h-48"
              />

              <div className="pt-4">
                <p className="font-bold text-lg"> {pet.breed}</p>
                <div className="flex space-x-2 text-gray-400">
                  <p className="font-bold">{pet.gene}</p>
                  <p className="font-bold">{pet.age}</p>
                </div>
                <p>{pet.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"← "}
        nextLabel={" →"}
        pageCount={pageCount}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"flex justify-center mt-8 space-x-2"}
        pageClassName={"px-3 py-1 border rounded cursor-pointer"}
        activeClassName={"bg-[#003459] text-white cursor-pointer"}
        previousClassName={"px-3 py-1 border rounded cursor-pointer"}
        nextClassName={"px-3 py-1 border rounded cursor-pointer"}
        disabledClassName={"opacity-50 cursor-not-allowed cursor-pointer"}
      />
    </div>
  );
};

export default ProductDisplay;
