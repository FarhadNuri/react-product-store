import pngwing10 from './assets/pngwing 10.png';

function Hero() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full bg-[#fdf2f4] flex flex-col md:flex-row items-center justify-center md:justify-around px-6 sm:px-12 lg:px-16 py-12 md:py-0">
        <div className="max-w-xl text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight pb-4 sm:pb-6">
            Bring nature's beauty into your everyday moments.
          </h1>
          <p className="text-gray-600 text-sm pb-6 sm:pb-8 max-w-md mx-auto md:mx-0">
            Handpicked blooms, artfully arranged and delivered fresh to your door. 
            Whether it's a celebration, a gesture of love, or simply brightening 
            your space — we have the perfect arrangement for every occasion.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#e55473] hover:bg-[#d44363] cursor-pointer text-white rounded-full font-semibold transition-colors">
            Shop Now
          </button>
        </div>

        <div className="w-2/3 sm:w-1/2 md:w-1/3 order-1 md:order-2 mb-8 md:mb-0">
          <img src={pngwing10} alt="Beautiful tulips" className="w-full h-auto object-contain"/>
        </div>
      </div>
    </div>
  );
}
export default Hero;
