import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import personImage1 from "../assets/person_1.jpg";
import personImage2 from "../assets/person_2.jpg";
import personImage3 from "../assets/person_3.jpg";
import personImage4 from "../assets/person_4.jpg";
import personImage5 from "../assets/person_5.jpg";
import personImage6 from "../assets/person_6.jpg";

const team = [
  {
    person: personImage1,
    name: "Cloe Marena",
    title: "President",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    person: personImage2,
    name: "John Rooster",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    person: personImage3,
    name: "Will Turner",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    person: personImage4,
    name: "Nicolas Stainer",
    title: "Financing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    person: personImage5,
    name: "George Brook",
    title: "Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    person: personImage6,
    name: "Emely Hopson",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="relative overflow-hidden aspect-[4/3.5] bg-slate-100">
              <img
                src={item.person}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-sky-600/95 backdrop-blur-sm py-3 px-6 flex justify-center items-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <a
                  href="#"
                  className="text-white hover:text-sky-200 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-sky-200 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-sky-200 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
                </a>
              </div>
            </div>

            <div className="p-6 ">
              <h3 className="font-bold text-xl text-slate-900">{item.name}</h3>
              <span className="text-xs uppercase font-semibold text-sky-600 tracking-wider block mt-1">
                {item.title}
              </span>

              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
