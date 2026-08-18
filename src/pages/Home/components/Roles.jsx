export default function Roles() {
  const roles = [
    { name: "CHURCHES", text: "Rural church empowerment" },
    { name: "LEADERS", text: "Skills and empowerment" },
    { name: "CHILDREN", text: "Education, mentorship, and support" },
    {
      name: "COMMUNITIES",
      text: "Sustainable development and faith-based outreach",
    },
  ];
  return (
    <div className=" flex flex-col md:px-1 px-4 w-fit mx-auto my-10">
      {roles?.map((item) => (
        <div className="flex items-center md:gap-20 border-b md:py-5 py-8 border-gray-300">
          <h4 className="text-xs md:text-sm font-bold md:w-32 w-32 text-primary">
            {item?.name}
          </h4>
          <p className="md:text-lg text-xs">{item?.text}</p>
        </div>
      ))}
    </div>
  );
}
