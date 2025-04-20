import { Button } from "@/components/ui/button";
import Header from "@/components/utils/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container pt-[70px]">
      <Header>خانه</Header>
      <div>
        <Link href={"/team"}>
          <Button variant={"link"}>معرفی اعضا</Button>
        </Link>
      </div>
    </div>
  );
}
