export default function StayProductives() {
  return (
    <section className="pb-[50px]">
      <div className="container grid grid-flow-col md:grid-cols-2 gab-[30px] place-items-center pb-[150px]">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt=""
          />
        </div>

        <div>
          <h3 className="text-white font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3 >
          <div className="my-[15px] font-normal text-sm tracking-[0.8px] text-white">
            <p >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
          </div>
          <a
            href="/"
          className="text-primary hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200  border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit"
          >
            See how Fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-bounce"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
