import MemberCard from "./MemberCard";

const fakeMembers = [
  {
    id: "Amirhossein-Aghamohammadi",
    name: "امیرحسین آقامحمدی",
    role: "توسعه‌دهنده فرانت‌اند",
    image: "/images/members/Amirhossein-Aghamohammadi.png",
    linkedin: "https://linkedin.com/in/Amirhossein-Aghamohammadi",
    twitter: "https://twitter.com/Amirhossein-Aghamohammadi",
    x: "https://x.com/Amirhossein-Aghamohammadi",
  },
  {
    id: "Amirhossein-Salamati",
    name: "امیرحسین سلاماتی",
    role: "طراح UI/UX",
    image: "/images/members/Amirhossein-Salamati.png",
    linkedin: "https://linkedin.com/in/Amirhossein-salamati",
    twitter: "https://twitter.com/Amirhossein-salamati",
    x: "https://x.com/Amirhossein-salamati",
  },
  {
    id: "Sina-NejadHosseini",
    name: "سینا نژاد حسینی",
    role: "برنامه نویس اندروید",
    image: "/images/members/Sina-NejadHosseini.png",
    linkedin: "https://linkedin.com/in/Sina-NejadHosseini",
    twitter: "https://twitter.com/Sina-NejadHosseini",
    x: "https://x.com/Sina-NejadHosseini",
  },
  {
    id: "Mohammad-KordNejad",
    name: "محمد کرد نژاد",
    role: "توسعه‌دهنده بک‌اند",
    image: "/images/members/Mohammad-KordNejad.png",
    linkedin: "https://linkedin.com/in/Mohammad-KordNejad",
    twitter: "https://twitter.com/Mohammad-KordNejad",
    x: "https://x.com/Mohammad-KordNejad",
  },
];

const Members = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
      {fakeMembers.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default Members;
