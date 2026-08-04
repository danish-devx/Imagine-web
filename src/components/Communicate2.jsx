import image from "../assets/undraw_metrics_gtu7.svg";
import avatar from "../assets/person_1.jpg";

export default function CommunicateSection2() {
  return (
    <section className="pt-14 md:pt-14 pb-12 sm:pb-16 md:pb-20 px-6 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col items-start justify-center order-2 md:order-1 pl-0 lg:pl-20 ">
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-slate-900">
            Communicate and <br className="hidden sm:inline" />
            <span className="text-sky-600">gather feedback</span>
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed py-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>

          <div className="border-l-4 border-sky-600 pl-5 mt-2 space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <img
                  src={avatar}
                  alt="Kimberly Gush"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-base">
                  Kimberly Gush
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Co-Founder, XYZ Inc.
                </p>
              </div>
            </div>

            <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed max-w-lg">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full order-1 md:order-2">
          <img
            src={image}
            alt="Communicate Illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
