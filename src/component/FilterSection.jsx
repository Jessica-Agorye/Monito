import { useState } from "react";
import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
import ProductDisplay from "./ProductDisplay";
import { pets } from "../data/petData";

const FilterSection = () => {
  const [geneFilter, setGeneFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  const filteredPets = geneFilter
    ? pets.filter((pet) => pet.gene.toLowerCase() === geneFilter.toLowerCase())
    : pets;

  const handleFilterChange = (newFilter) => {
    setGeneFilter(newFilter);
    setCurrentPage(0);
  };
  return (
    <div>
      <div className="lg:hidden">
        <MobileFilter selected={geneFilter} onChange={handleFilterChange} />
        <ProductDisplay
          pets={filteredPets}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="hidden lg:flex gap-6 lg:mx-22">
        <div className="w-1/4">
          <DesktopFilter selected={geneFilter} onChange={handleFilterChange} />
        </div>

        <div className="w-3/4">
          <ProductDisplay
            pets={filteredPets}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
