/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

const Hyper = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">
                  Our successfull studetns who are now trainers in our school
                </h2>

                <p class="hidden text-white/90 sm:mt-4 sm:block">
                  Welcome to our women's yoga school, where empowerment and
                  enlightenment intertwine. Our journey began with dedicated
                  students who have since blossomed into inspiring trainers,
                  nurturing the flame of yoga within themselves and others.
                </p>

                <div class="mt-4 md:mt-8">
                  <a
                    href="#"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get More Info
                  </a>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://i.ibb.co/7jQMKf6/vertical-portrait-muscular-young-athletic-woman-with-strong-beautiful-body-black-sportswear-standing.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src="https://i.ibb.co/sKDysKH/4712700.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hyper;
