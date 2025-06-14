const About = () => {
  return (
    <>
      <div className="px-5 sm:px-10 flex justify-center items-center bristol py-20 min-h-[70vh]">
        <section className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-center text-5xl sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] text-[#2AB6A5] select-none">
            We are useRecipe
          </h1>
          <p className="max-w-xl mx-auto mt-6 text-[#E4572E] text-xl sm:text-2xl md:text-4xl uppercase text-center leading-relaxed">
            useRecipe is a space for people who love cooking (or just love
            eating). We're here to make recipes fun to share, easy to browse,
            and full of flavor — just like your food.
          </p>
        </section>
      </div>

      <div className="bristol uppercase flex gap-6 my-4 justify-center text-xl">
        <a
          href="https://github.com/c0nfu5ing-5pring"
          target="_blank"
          className="hover:text-[#E4572E] transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shish-frutwala/"
          target="_blank"
          className="hover:text-[#E4572E] transition"
        >
          LinkedIn
        </a>
      </div>

      <footer className="w-full bristol uppercase text-center py-6 border-t border-[#2f2f2f] text-sm sm:text-base text-[#2f2f2f]">
        © {new Date().getFullYear()} Shish Frutwala. All rights reserved.
      </footer>
    </>
  );
};

export default About;
