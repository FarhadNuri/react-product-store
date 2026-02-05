import insta1 from './assets/Flower 01.png';
import insta2 from './assets/Rectangle 4.png';
import insta3 from './assets/Rectangle 5.png';
import insta4 from './assets/Rectangle 6.png';

function Instagram() {
  return (
    <div className='flex flex-col text-center  max-w-6xl mx-auto pb-20'>
    <div className='mt-10 '>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Instagram</h1>
        <p className='text-gray-500 text-sm mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    <div className='flex gap-10 mt-10'>
        <div>
            <img src={insta1} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={insta2} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={insta3} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={insta4} alt="" className='rounded-xl'/>
        </div>
    </div>
    </div>
  );
}
export default Instagram;