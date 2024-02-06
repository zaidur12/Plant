const Rectangle1 = () => {
  return (
    <div className="self-stretch bg-black overflow-hidden flex flex-col items-center justify-start pt-[68px] px-[68px] pb-[78px] box-border gap-[73px] max-w-full mt-[-727px] text-center text-29xl text-white font-gothic-a1 mq750:gap-[73px] mq750:pl-[34px] mq750:pr-[34px] mq750:pb-[51px] mq750:box-border mq450:gap-[73px]">
      <div className="w-[324px] flex flex-row items-start justify-end max-w-full">
        <h2 className="m-0 h-[60px] relative text-inherit font-extrabold font-inherit inline-block mq750:text-19xl mq450:text-10xl">
          Our Service
        </h2>
      </div>
      <div className="self-stretch grid flex-row items-start justify-between gap-[20px] grid-cols-[repeat(3,_minmax(240px,_1fr))] text-15xl text-black mq750:grid-cols-[minmax(240px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <div className="h-[380px] rounded-9xl bg-white overflow-hidden flex flex-col items-center justify-start pt-[27px] pb-[31px] pr-[25px] pl-[23px] box-border gap-[39px] mq450:gap-[39px] mq450:pt-[68px] mq450:pb-5 mq450:box-border">
          <img
            className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/unsplashcbzh3kapxre@2x.png"
          />
          <div className="relative font-semibold mq750:text-8xl mq450:text-xl">
            Planting Tips
          </div>
        </div>
        <div className="h-[380px] rounded-9xl bg-white overflow-hidden flex flex-col items-center justify-start pt-[29px] px-[26px] pb-[31px] box-border gap-[44px] mq450:gap-[44px] mq450:pt-[68px] mq450:pb-5 mq450:box-border">
          <img
            className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/unsplashovjlwywbche@2x.png"
          />
          <div className="relative font-semibold mq750:text-8xl mq450:text-xl">
            Irrigation Tips
          </div>
        </div>
        <div className="h-[380px] rounded-9xl bg-white overflow-hidden flex flex-col items-center justify-start py-[33px] px-7 box-border gap-[46px] mq450:gap-[46px] mq450:pt-[68px] mq450:pb-[21px] mq450:box-border">
          <img
            className="self-stretch flex-1 relative rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/unsplash0xof2r50goa@2x.png"
          />
          <div className="h-[43px] relative font-semibold inline-block mq750:text-8xl mq450:text-xl">
            Fertilizer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle1;
