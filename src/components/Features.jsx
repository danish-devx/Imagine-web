import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faStore,
  faBasketShopping,
  faRotateLeft,
  faSmile,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Marketing Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faRotate,
  },
  {
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faStore,
  },
  {
    title: "Easy Purchase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faBasketShopping,
  },
  {
    title: "Free Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faRotateLeft,
  },
  {
    title: "100% Satisfied",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faSmile,
  },
  {
    title: "Easy Plugin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: faPlug,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 mt-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative bg-gray-100 rounded-lg pt-12 pb-8 px-8 flex flex-col items-center text-center shadow-sm hover:bg-sky-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-sky-600 text-white group-hover:bg-white group-hover:text-sky-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
              <FontAwesomeIcon icon={item.icon} className="text-3xl" />
            </div>

            <h3 className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed pt-4 text-sm sm:text-base group-hover:text-sky-50 transition-colors duration-300">
              {item.description}
            </p>

            <a
              href="#"
              className="mt-6 font-semibold text-sky-600 group-hover:text-white underline-offset-4 hover:underline transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
