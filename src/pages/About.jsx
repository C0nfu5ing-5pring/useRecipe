const About = () => {
  return (
    <div className="px-5 sm:px-10 flex justify-center items-center bristol py-20 min-h-[90vh]">
      <section className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center text-5xl sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] text-[#2AB6A5] select-none">
          We are useRecipe
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-[#E4572E] text-xl sm:text-2xl md:text-4xl uppercase text-center leading-relaxed">
          useRecipe is a space for people who love cooking (or just love
          eating). We're here to make recipes fun to share, easy to browse, and
          full of flavor — just like your food.
        </p>
      </section>
    </div>
  );
};

export default About;
