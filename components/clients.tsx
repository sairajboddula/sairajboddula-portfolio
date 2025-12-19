import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My Technical <span className="text-purple">Proficiencies</span> and <span className="text-purple">Testimonials</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name }) => (
            <div key={id} className="flex items-center gap-2 md:gap-3">
              <Image
                height={40}
                width={40}
                src={img}
                alt={`${name}'s logo`}
                className="w-8 md:w-10 object-contain"
              />

              <p className="text-lg md:text-2xl font-semibold text-white">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
