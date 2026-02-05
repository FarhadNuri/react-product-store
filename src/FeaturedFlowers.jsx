import pngwing5 from './assets/pngwing 5.png';
import pngwing6 from './assets/pngwing 6.png';
import pngwing7 from './assets/pngwing 7.png';

function FeaturedFlowers() {
  return (
    <section className="py-16 pb-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Featured Flowers</h2>
        <p className="text-gray-500 text-sm mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex items-end justify-center gap-8">
        <div className="text-center">
          <div className="bg-pink-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing6} alt="Pink Flower Tree" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Pink Flower Tree</h3>
        </div>
        <div className="text-center">
          <div className="bg-cyan-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing5} alt="Pink Flower Tree" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Pink Flower Tree</h3>
        </div>
        <div className="text-center">
          <div className="bg-lime-100 rounded-t-full pt-16 px-8 pb-0 h-96 flex items-end justify-center overflow-hidden">
            <img src={pngwing7} alt="Pink Flower Tree" className="max-h-80 object-contain" />
          </div>
          <h3 className="font-semibold text-gray-800 mt-4">Pink Flower Tree</h3>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFlowers;
