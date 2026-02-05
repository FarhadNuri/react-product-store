import pngwing5 from './assets/pngwing 5.png';
import pngwing6 from './assets/pngwing 6.png';
import pngwing7 from './assets/pngwing 7.png';

function FeaturedFlowers() {
  return (
    <section className="py-12 sm:py-16 pb-6 px-4 sm:px-8 lg:px-16">
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Our Featured Flowers</h2>
        <p className="text-gray-500 text-sm mt-2 px-4">
          Discover our most loved arrangements — fresh, vibrant, and crafted 
          with care for every special moment in your life.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        <div className="text-center w-full sm:w-auto">
          <div className="bg-pink-100 rounded-t-full pt-12 sm:pt-16 px-6 sm:px-8 pb-0 h-72 sm:h-80 md:h-96 flex items-end justify-center overflow-hidden mx-auto max-w-[250px] sm:max-w-none">
            <img src={pngwing6} alt="Pink Tulips" className="max-h-60 sm:max-h-72 md:max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Pink Tulips</h3>
        </div>
        <div className="text-center w-full sm:w-auto">
          <div className="bg-cyan-100 rounded-t-full pt-12 sm:pt-16 px-6 sm:px-8 pb-0 h-72 sm:h-80 md:h-96 flex items-end justify-center overflow-hidden mx-auto max-w-[250px] sm:max-w-none">
            <img src={pngwing5} alt="Garden Bouquet" className="max-h-60 sm:max-h-72 md:max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Garden Bouquet</h3>
        </div>
        <div className="text-center w-full sm:w-auto">
          <div className="bg-lime-100 rounded-t-full pt-12 sm:pt-16 px-6 sm:px-8 pb-0 h-72 sm:h-80 md:h-96 flex items-end justify-center overflow-hidden mx-auto max-w-[250px] sm:max-w-none">
            <img src={pngwing7} alt="Yellow Tulips" className="max-h-60 sm:max-h-72 md:max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Yellow Tulips</h3>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFlowers;
