import image from "../assets/undraw_investing_7u74.svg";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-12 bg-white text-slate-800" id="home">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-900">
            Make Your Business <br className="hidden sm:inline" />
            <span className="text-sky-600">More Profitable</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed py-6 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>

          <button className="bg-sky-500 cursor-pointer hover:bg-sky-600 text-white font-semibold px-7 py-3 rounded-lg shadow-md shadow-sky-500/20 transition-all duration-200 active:scale-95">
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center w-full">
          <img
            src={image}
            alt="Business Investment Illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
