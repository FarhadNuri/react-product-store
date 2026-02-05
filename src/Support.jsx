import group57 from './assets/Group 57.png';
import group58 from './assets/Group 58.png';
import group59 from './assets/Group 59.png';

function Support() {
  return (
    <section className="py-10 px-16">
      <div className="flex justify-center gap-32 items-center py-12 bg-gray-100 rounded-lg max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={group57} alt="Same Day Delivery" className="w-16 h-16 mb-4" />
          <p className="text-gray-700 font-medium">Same Day Delivery. Click & Collect.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={group58} alt="Fresh Flowers" className="w-16 h-16 mb-4" />
          <p className="text-gray-700 font-medium">Fresh Flowers. Local Growers.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={group59} alt="24/7 Free Support" className="w-16 h-16 mb-4" />
          <p className="text-gray-700 font-medium">24/7 Free Support.</p>
        </div>
      </div>
    </section>
  );
}

export default Support;
