import ShippingReturnInfo from "./ShippingReturnInfo";

const HelpText = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[62px] box-border max-w-full text-left text-11xl text-black font-gothic-a1 mq1050:pb-10 mq1050:box-border mq450:pb-[26px] mq450:box-border">
      <div className="h-[740px] flex-1 relative bg-black overflow-hidden max-w-full mq1050:h-auto mq1050:min-h-[740]">
        <div className="absolute top-[118px] left-[36px] w-[1192px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
          <ShippingReturnInfo frame12="/frame-12@2x.png" lucyJohn="Lucy John" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border min-w-[265px] max-w-full">
            <div className="self-stretch h-[536px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[70px] pb-4 pr-[38px] pl-11 box-border">
              <img
                className="w-[136px] h-[136px] relative rounded-46xl overflow-hidden shrink-0 object-cover z-[1]"
                alt=""
                src="/frame-12-1@2x.png"
              />
              <div className="self-stretch flex-1 rounded-14xl bg-white overflow-hidden flex flex-col items-center justify-start pt-[82px] pb-[21px] pr-[18px] pl-8 gap-[11px] mt-[-58px]">
                <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-0">
                  <div className="h-[38px] relative font-extrabold inline-block mq750:text-5xl mq450:text-lg">
                    Lewis Hall
                  </div>
                </div>
                <div className="self-stretch flex-1 relative text-base font-light">{`Lorem ipsum dolor sit amet consectetur. Tellus lorem viverra non egestas sed ullamcorper morbi. Maecenas sem accumsan placerat euismod dis sollicitudin massa. Elit amet ultricies arcu elit tellus viverra aliquam mattis. Mauris nulla aliquam mauris enim vulputate quis. Vitae dolor justo nulla a amet sit. Volutpat in non mus lectus. In odio magna condimentum donec amet. `}</div>
              </div>
            </div>
          </div>
          <ShippingReturnInfo
            frame12="/frame-12-2@2x.png"
            lucyJohn="Any Adam"
            propGap="15px"
          />
        </div>
        <h3 className="m-0 absolute top-[81px] left-[446px] text-21xl font-extrabold font-inherit text-white mq750:text-13xl mq450:text-5xl">
          Customer Reviews
        </h3>
      </div>
    </section>
  );
};

export default HelpText;
