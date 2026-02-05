import png8 from "./assets/pngwing 8.png";

function Deals() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 py-8 sm:py-12 px-6 sm:px-12 lg:px-16 bg-[rgba(229,84,115,0.05)] rounded-lg max-w-6xl mx-auto">
        <div className="text-center max-w-md order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Hot Deal ! Sale Up To 25% <span className="text-[#e55473]">Off</span>
          </h2>
          <p className="text-gray-500 text-sm mb-4 sm:mb-6">
            Brighten someone's day with our stunning seasonal arrangements. Limited time offer — don't miss out!
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#e55473] hover:bg-[#d44363] text-white rounded-full font-semibold transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="w-40 sm:w-52 md:w-64 order-1 md:order-2">
          <img src={png8} alt="Deal" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
export default Deals;