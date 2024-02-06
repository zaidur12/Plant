const FrameContainer = () => {
  return (
    <section className="w-[1216px] flex flex-row items-start justify-start py-0 pr-7 pl-5 box-border min-h-[498px] max-w-full shrink-0 text-center text-20xl text-white font-gothic-a1">
      <div className="flex-1 rounded-29xl bg-white overflow-hidden flex flex-row items-center justify-center relative max-w-full">
        <img
          className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/pixabay1350175@2x.png"
        />
        <div className="flex-1 bg-gray-400 overflow-hidden flex flex-col items-center justify-start pt-[92px] pb-[116px] pr-12 pl-5 box-border gap-[36px] max-w-full z-[1] mq750:gap-[36px] mq750:pr-6 mq750:box-border mq450:pt-[60px] mq450:pb-[75px] mq450:box-border">
          <h3 className="m-0 h-[98px] relative text-inherit font-extrabold font-inherit inline-block max-w-full mq750:text-12xl mq450:text-4xl">
            <p className="m-0">Get your membership for</p>
            <p className="m-0"> exciting discount</p>
          </h3>
          <div className="w-[268px] h-[70px] flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border">
            <button className="cursor-pointer pt-5 pb-[19px] pr-[29px] pl-4 bg-honeydew-100 h-[86px] rounded-xl box-border overflow-hidden flex flex-row items-center justify-start gap-[6px] whitespace-nowrap border-[8px] border-solid border-gray-200 hover:bg-darkseagreen hover:box-border hover:border-[8px] hover:border-solid hover:border-gray-100">
              <b className="h-[31px] relative text-6xl inline-block font-gothic-a1 text-black text-center">
                Purchases now
              </b>
              <img
                className="h-[22.1px] w-[25px] relative"
                alt=""
                src="/arrow-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameContainer;
