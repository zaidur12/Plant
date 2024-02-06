const FrameComponent1 = () => {
  return (
    <footer className="bg-black overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[46px] pb-7 pr-[78px] pl-[49px] box-border gap-[44px] max-w-full text-center text-9xl text-white font-gothic-a1 mq750:gap-[44px] mq750:pt-[30px] mq750:pb-5 mq750:pr-[39px] mq750:pl-6 mq750:box-border mq1225:flex-wrap">
      <div className="w-[350px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-28xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[72px] mq450:gap-[72px]">
          <div className="h-[83px] flex flex-row items-start justify-start gap-[10px] font-darumadrop-one">
            <img
              className="h-[54px] w-[54px] relative object-cover"
              alt=""
              src="/plant@2x.png"
            />
            <h2 className="m-0 h-[51px] relative text-inherit font-normal font-inherit inline-block mq750:text-19xl mq450:text-9xl">
              PlantEarth
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-xl">
            <div className="relative font-extrabold mq450:text-base">{`Subscribe to our weekly newsletter `}</div>
            <div className="self-stretch h-[53px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[11px]">
              <img
                className="h-[34px] w-[34px] relative object-cover"
                loading="eager"
                alt=""
                src="/search@2x.png"
              />
              <div className="h-[55px] w-0.5 relative box-border border-r-[2px] border-solid border-black" />
            </div>
          </div>
          <div className="w-[215px] flex flex-row items-start justify-start py-0 px-[18px] box-border text-2xl">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
              <b className="relative mq450:text-mid">Follow us on :</b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1">
                <div className="flex-1 flex flex-row items-start justify-start gap-[18px]">
                  <img
                    className="h-[46px] w-[46px] relative object-cover"
                    loading="eager"
                    alt=""
                    src="/facebook@2x.png"
                  />
                  <img
                    className="h-[49px] w-[49px] relative object-cover min-h-[49px]"
                    loading="eager"
                    alt=""
                    src="/twitter@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-11 h-11 relative object-cover"
                      loading="eager"
                      alt=""
                      src="/instagram@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[367px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start pt-[29px] pb-[61px] pr-11 pl-[86px] relative gap-[56px] mq750:pt-5 mq750:pb-10 mq750:box-border mq450:gap-[56px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
            <b className="h-[35px] relative inline-block mq450:text-3xl">
              About Us
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[35px] relative inline-block mq450:text-3xl">
              About
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[52px]">
            <div className="relative mq450:text-3xl">Blog</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[42px]">
              <div className="relative mq450:text-3xl">Privacy Policy</div>
              <div className="h-[35px] relative inline-block mq450:text-3xl">{`Term & Condition`}</div>
            </div>
          </div>
          <img
            className="w-16 h-16 absolute my-0 mx-[!important] top-[195px] right-[119px] object-cover z-[1]"
            loading="eager"
            alt=""
            src="/magnifying-glass-search@2x.png"
          />
        </div>
      </div>
      <div className="w-[348px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[29px] pb-[66px] pr-[39px] pl-0 box-border gap-[56px] max-w-full mq750:pt-5 mq750:pb-[43px] mq750:box-border">
        <div className="w-[113px] flex flex-row items-start justify-start">
          <b className="relative mq450:text-3xl">Help</b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[45px]">
          <div className="h-[35px] relative inline-block mq450:text-3xl">
            FAQ
          </div>
          <div className="flex flex-col items-start justify-start gap-[55px]">
            <div className="h-[35px] relative font-medium inline-block mq450:text-3xl">
              Contact
            </div>
            <div className="flex flex-col items-start justify-start gap-[46px]">
              <div className="relative mq450:text-3xl">Shipping</div>
              <div className="h-[35px] relative font-medium inline-block mq450:text-3xl">
                Return
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
