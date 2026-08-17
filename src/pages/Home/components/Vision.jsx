export default function VisionSection() {
  return (
    <div className="md:p-20 p-10 w-full flex flex-col items-center gap-5 bg-primary/8">
      <h4 className="text-center font-semibold text-primary">OUR VISION</h4>
      <div className="flex items-center justify-center w-full">
        <div className="border-b-primary w-28 border" />
        <div className="w-16" />
        <div className="border-b-primary w-28 border" />
      </div>
      <p className="md:w-[38%] text-sm md:text-base lg:text-black lg:text-lg lg:w-[42%] text-black/70 text-center leading-7 lg:leading-10 mx-auto">
        To see thriving rural communities where churches are empowered, leaders
        are equipped, and families live with dignity, purpose, and faith.
      </p>
    </div>
  );
}
