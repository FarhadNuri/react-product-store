import group57 from './assets/Group 57.png';
import group58 from './assets/Group 58.png';
import group59 from './assets/Group 59.png';

function Support() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-32 items-center py-8 sm:py-12 bg-gray-100 rounded-lg max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={group57} alt="Same Day Delivery" className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4" />
          <p className="text-gray-700 font-medium text-sm sm:text-base">Same Day Delivery. Click & Collect.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={group58} alt="Fresh Flowers" className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4" />
          <p className="text-gray-700 font-medium text-sm sm:text-base">Fresh Flowers. Local Growers.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={group59} alt="24/7 Free Support" className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4" />
          <p className="text-gray-700 font-medium text-sm sm:text-base">24/7 Free Support.</p>
        </div>
      </div>
    </section>
  );
}

export default Support;
