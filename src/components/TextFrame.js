const TextFrame = () => {
  return (
    <header className="self-stretch bg-palegreen overflow-hidden flex flex-row items-end justify-start pt-3.5 pb-[29px] pr-6 pl-[34px] box-border gap-[154px] top-[0] z-[99] sticky max-w-full text-center text-28xl text-black font-darumadrop-one mq750:gap-[154px] mq450:gap-[154px]">
      <div className="flex flex-row items-start justify-start">
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <img
            className="w-[54px] h-[54px] relative object-cover"
            loading="eager"
            alt=""
            src="/plant@2x.png"
          />
        </div>
        <h2 className="m-0 h-[51px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap">
          PlantEarth
        </h2>
      </div>
      <div className="flex-1 overflow-hidden flex flex-row items-end justify-between pt-0 pb-1.5 pr-[23px] pl-[38px] box-border gap-[20px] max-w-full text-4xl font-gothic-a1">
        <div className="h-[31px] w-[449px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
            <b className="h-[29px] relative inline-block">Home</b>
            <b className="h-[35px] relative inline-block whitespace-nowrap">
              <span>About</span>
              <span className="text-9xl">{` `}</span>
            </b>
            <b className="h-[29px] relative inline-block">Contact</b>
            <b className="h-[29px] relative inline-block">Order</b>
          </div>
        </div>
        <b className="relative">Login</b>
      </div>
    </header>
  );
};

export default TextFrame;
