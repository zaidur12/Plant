import TextFrame from "../components/TextFrame";
import FrameComponent from "../components/FrameComponent";

const MacBookAir = () => {
  return (
    <div className="w-full relative rounded-[15px] bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <TextFrame />
      <FrameComponent />
    </div>
  );
};

export default MacBookAir;
