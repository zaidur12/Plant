import { useMemo } from "react";

const ShippingReturnInfo = ({ frame12, lucyJohn, propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="h-[536px] w-[392px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[70px] pb-4 pr-[38px] pl-11 box-border max-w-full text-left text-11xl text-black font-gothic-a1">
      <img
        className="w-[136px] h-[136px] relative rounded-46xl overflow-hidden shrink-0 object-cover z-[1]"
        loading="eager"
        alt=""
        src={frame12}
      />
      <div
        className="self-stretch flex-1 rounded-14xl bg-white overflow-hidden flex flex-col items-center justify-start pt-[76px] pb-[27px] pr-3 pl-[38px] gap-[11px] mt-[-58px]"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-0">
          <div className="relative font-extrabold mq750:text-5xl mq450:text-lg">
            {lucyJohn}
          </div>
        </div>
        <div className="self-stretch flex-1 relative text-base font-light">{`Lorem ipsum dolor sit amet consectetur. Tellus lorem viverra non egestas sed ullamcorper morbi. Maecenas sem accumsan placerat euismod dis sollicitudin massa. Elit amet ultricies arcu elit tellus viverra aliquam mattis. Mauris nulla aliquam mauris enim vulputate quis. Vitae dolor justo nulla a amet sit. Volutpat in non mus lectus. In odio magna condimentum donec amet. `}</div>
      </div>
    </div>
  );
};

export default ShippingReturnInfo;
