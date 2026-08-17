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
    <div className=" flex flex-col w-fit mx-auto my-10">
      {roles?.map((item) => (
        <div className="flex items-center md:gap-20 border-b md:py-5 py-8 border-gray-300">
          <strong className="text-sm w-32 text-primary">{item?.name}</strong>
          <p className="md:text-lg text-sm">{item?.text}</p>
        </div>
      ))}
    </div>
  );
}
