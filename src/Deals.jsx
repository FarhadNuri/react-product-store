import png8 from "./assets/pngwing 8.png";

function Deals() {
  return (
    <section className="py-12 px-12">
      <div className="flex items-center justify-center gap-16 py-12 px-16 bg-[rgba(229,84,115,0.05)] rounded-lg max-w-6xl mx-auto">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hot Deal ! Sale Up To 25% <span className="text-[#e55473]">Off</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Brighten someone's day with our stunning seasonal arrangements. Limited time offer — don't miss out!
          </p>
          <button className="px-8 py-3 bg-[#e55473] hover:bg-[#d44363] text-white rounded-full font-semibold transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="w-64">
          <img src={png8} alt="Deal" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
export default Deals;