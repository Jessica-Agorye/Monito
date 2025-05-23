import Nav from "../component/Nav";
import TopFilter from "../component/TopFilter";
import Banner from "../component/Banner";
import FilterSection from "../component/FilterSection";

const MainLayout = () => {
  return (
    <div className="mb-10">
      <Nav />
      <TopFilter />
      <Banner />
      <FilterSection />
    </div>
  );
};

export default MainLayout;
