import { Button } from "@/components/button";
import FrontPage from "@/components/layouts/FrontPage";
import Navbar from "@/components/navbar";
import { RoomCard } from "@/components/roomcard";
import { BodyWrapper, ContentWrapper } from "@/components/Wrappers";

export default function Home() {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <Navbar />
        <FrontPage />
      </ContentWrapper>
    </BodyWrapper>
  );
}
