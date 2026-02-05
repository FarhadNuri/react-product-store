import pngwing5 from './assets/pngwing 5.png';
import pngwing6 from './assets/pngwing 6.png';
import pngwing7 from './assets/pngwing 7.png';

function FeaturedFlowers() {
  return (
    <section className="py-16 pb-6">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Featured Flowers</h2>
        <p className="text-gray-500 text-sm mt-2">
          Discover our most loved arrangements — fresh, vibrant, and crafted 
          with care for every special moment in your life.
        </p>
      </div>
      <div className="flex items-end justify-center gap-8">
        <div className="text-center">
          <div className="bg-pink-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing6} alt="Pink Tulips" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Pink Tulips</h3>
        </div>
        <div className="text-center">
          <div className="bg-cyan-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing5} alt="Garden Bouquet" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Garden Bouquet</h3>
        </div>
        <div className="text-center">
          <div className="bg-lime-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing7} alt="Yellow Tulips" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Yellow Tulips</h3>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFlowers;
