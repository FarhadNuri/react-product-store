import pngwing10 from './assets/pngwing 10.png';

function Hero() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full bg-[#fdf2f4] flex items-center justify-around px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight pb-6">
            Let's make beautiful flowers a part of your life.
          </h1>
          <p className="text-gray-600 text-sm pb-8 max-w-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <button className="px-8 py-4 bg-[#e55473] hover:bg-[#d44363]  cursor-pointer text-white rounded-full font-semibold transition-colors">
            Shop Now
          </button>
        </div>

        <div className="w-1/3">
          <img src={pngwing10} alt="Beautiful tulips" className="w-full h-auto object-contain"/>
        </div>
      </div>
    </div>
  );
}
export default Hero;
