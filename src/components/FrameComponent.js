import FrameComponent2 from "./FrameComponent2";
import Rectangle1 from "./Rectangle1";
import Rectangle from "./Rectangle";
import HelpText from "./HelpText";
import FrameContainer from "./FrameContainer";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <main className="self-stretch overflow-y-auto flex flex-col items-center justify-start max-w-full">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full shrink-0 text-left text-53xl text-white font-gothic-a1">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/unsplashx9nfed3fpse@2x.png"
        />
        <FrameComponent2 />
        <Rectangle1 />
      </section>
      <Rectangle />
      <HelpText />
      <FrameContainer />
      <FrameComponent1 />
    </main>
  );
};

export default FrameComponent;
