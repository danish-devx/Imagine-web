import heroBg from "../assets/hero_1.jpg";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat py-20 sm:py-28 px-6 lg:px-8 mt-10"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="contact"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-900/80 via-slate-900/85 to-sky-850/90 backdrop-blur-[2px]" />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-400 to-sky-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
          Contact <span className="text-sky-400">Us</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-200">
          Got a question or want to work together? Drop us a message below.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-xl bg-white p-8 sm:p-10 shadow-2xl border border-slate-100">
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-slate-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="John"
                  className="block w-full rounded-lg bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-sky-600 focus:bg-white focus:ring-1 focus:ring-sky-600 focus:outline-none sm:text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-slate-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Doe"
                  className="block w-full rounded-lg bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-sky-600 focus:bg-white focus:ring-1 focus:ring-sky-600 focus:outline-none sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-slate-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company name"
                  className="block w-full rounded-lg bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-sky-600 focus:bg-white focus:ring-1 focus:ring-sky-600 focus:outline-none sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="block w-full rounded-lg bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-sky-600 focus:bg-white focus:ring-1 focus:ring-sky-600 focus:outline-none sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-slate-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-lg bg-slate-50 border border-slate-200 focus-within:border-sky-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-sky-600 transition-all">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-l-lg py-2.5 pr-7 pl-3.5 text-slate-700 bg-transparent focus:outline-none sm:text-sm"
                    >
                      <option className="bg-white text-slate-900">US</option>
                      <option className="bg-white text-slate-900">CA</option>
                      <option className="bg-white text-slate-900">PK</option>
                      <option className="bg-white text-slate-900">EU</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-slate-400 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow bg-transparent py-2.5 pr-3 pl-1 text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="block w-full rounded-lg bg-slate-50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-sky-600 focus:bg-white focus:ring-1 focus:ring-sky-600 focus:outline-none sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-x-3 sm:col-span-2">
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600 cursor-pointer"
              />
              <label
                htmlFor="agree-to-policies"
                className="text-sm text-slate-600 cursor-pointer"
              >
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold text-sky-600 hover:underline"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-lg bg-sky-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
