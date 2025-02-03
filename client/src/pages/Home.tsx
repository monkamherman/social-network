import { Button } from "@/components/ui/button";
import Slider from "@/components/Slider";

function Home() {
  return (
    <div className="text-2xl items-center justify-center flex flex-col w-full h-screen ">
      <h1 className="underline font-extrabold">
        Here's a TEMPLATE WITH THE FOLLOWING DEPENDENCIES:
      </h1>
      <ol>
        <li>SHADCN</li>
        <li>REACT-ICONS</li>
        <li>ZUSTAND</li>
        <li>TAILWINDCSS</li>
        <li>REACT JS WITH VITE</li>
      </ol>

      <Button>Here is a SHadCn button</Button>

      <Slider/>
    </div>
  );
}

export default Home;
