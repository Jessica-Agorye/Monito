import bannermobile from "../assets/bannermobile.png";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="mt-10 p-0 m-0 ">
      <img src={bannermobile} className="block w-full lg:hidden" alt="banner" />
      <img
        src={banner}
        className="h  hidden lg:block rounded-[20px] w-full h-[378px] px-[100px]"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
