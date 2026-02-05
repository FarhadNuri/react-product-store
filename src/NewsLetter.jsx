import rectangle from "./assets/Rectangle 9.png";
function NewsLetter() {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-8 lg:px-16">
      <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden">
        <img
          src={rectangle}
          alt="Newsletter background"
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
            Bloom With Us
          </h2>
          <p className="text-gray-500 text-sm mb-4 sm:mb-6 text-center">
            Subscribe & get $30 off your first order
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:bg-white sm:rounded-full sm:shadow-md sm:overflow-hidden w-full max-w-md sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="px-4 sm:px-6 py-3 w-full sm:w-64 md:w-80 text-sm text-gray-600 outline-none text-center sm:text-left bg-white rounded-full sm:rounded-none shadow-md sm:shadow-none"
            />
            <button className="px-6 sm:px-8 py-3 bg-[#e55473] hover:bg-[#d44363] text-white font-semibold transition-colors cursor-pointer w-full sm:w-auto rounded-full sm:rounded-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;