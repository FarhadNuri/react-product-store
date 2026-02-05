import rectangle from "./assets/Rectangle 9.png";
function NewsLetter() {
  return (
    <section className="py-8 px-16">
      <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden">
        <img
          src={rectangle}
          alt="Newsletter background"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Bloom With Us
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Subscribe & get $30 off your first order
          </p>
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="px-6 py-3 w-80 text-sm text-gray-600 outline-none"
            />
            <button className="px-8 py-3 bg-[#e55473] hover:bg-[#d44363] text-white font-semibold transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;