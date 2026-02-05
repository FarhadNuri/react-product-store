import insta1 from './assets/Flower 01.png';
import insta2 from './assets/Rectangle 4.png';
import insta3 from './assets/Rectangle 5.png';
import insta4 from './assets/Rectangle 6.png';

function Instagram() {
  return (
    <div className="flex flex-col text-center max-w-6xl mx-auto pb-20 px-4 sm:px-8 lg:px-16">
      <div className="mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Instagram
        </h1>
        <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
          Follow us for daily floral inspiration and behind-the-scenes glimpses
          of our beautiful arrangements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mt-10">
        <div>
          <img src={insta1} alt="Instagram post 1" className="rounded-xl w-full h-auto object-cover aspect-square" />
        </div>
        <div>
          <img src={insta2} alt="Instagram post 2" className="rounded-xl w-full h-auto object-cover aspect-square" />
        </div>
        <div>
          <img src={insta3} alt="Instagram post 3" className="rounded-xl w-full h-auto object-cover aspect-square" />
        </div>
        <div>
          <img src={insta4} alt="Instagram post 4" className="rounded-xl w-full h-auto object-cover aspect-square" />
        </div>
      </div>
    </div>
  );
}
export default Instagram;