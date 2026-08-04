import image from "../assets/undraw_bookmarks_r6up.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-6 bg-slate-50 text-slate-800 mt-20" id="about">
      <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-slate-900 text-center">
        About <span className="text-sky-600">Us</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 sm:mt-14">
        <div className="flex justify-center items-center w-full order-1 md:order-1">
          <img
            src={image}
            alt="About Us Illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-start justify-center order-2 md:order-2">
          <h3 className="font-bold text-2xl sm:text-4xl lg:text-4xl tracking-tight leading-tight text-slate-900">
            Our <span className="text-sky-600">Mission</span>
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed py-4 max-w-lg">
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>

          <ul className="space-y-3 mt-2 text-slate-700 font-medium text-base sm:text-lg">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faCheck} className="text-xs" />
              </span>
              Laborum enim quasi at modi
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faCheck} className="text-xs" />
              </span>
              Ad at tempore
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faCheck} className="text-xs" />
              </span>
              Labore quaerat esse
            </li>
          </ul>

          <button className="bg-sky-500 cursor-pointer hover:bg-sky-600 text-white font-semibold px-7 py-3 rounded-lg shadow-md shadow-sky-500/20 transition-all duration-200 active:scale-95 mt-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
