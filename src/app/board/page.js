import { internationalAdvisoryBoard } from "@/app/data";
import { nationalAdvisoryBoard } from "@/app/data";
import Title from "../components/Title";
import MainContainer from "../components/MainContainer";
import ProfileGrid from "../components/ProfileGrid";

export const metadata = {
  title: "Advisory Board",
  description:
    "Know the esteemed members of the National and International Advisory Board",
};

const page = () => {
  const iab = Array.from(internationalAdvisoryBoard).sort((a, b) => {
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });

  const nab = Array.from(nationalAdvisoryBoard).sort((a, b) => {
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });

  return (
    <MainContainer>
      <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
        <Title>International Advisory Board</Title>
        <ProfileGrid data={iab} hybrid />
        <div style={{ display: "none" }} id="nab"></div> {/* Anchor */}
        <Title>National Advisory Board</Title>
        <ProfileGrid data={nab} hybrid />
      </div>
    </MainContainer>
  );
};

export default page;

