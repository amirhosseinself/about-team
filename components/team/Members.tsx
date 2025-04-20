import { MembersData } from "@/data/data";
import MemberCard from "./MemberCard";

const Members = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
      {MembersData.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default Members;
