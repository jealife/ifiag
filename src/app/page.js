import { FlipWordsDemo } from "@/components/FlipWordsDemo/FlipWordsDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      {/* <h1 className=" text-5xl font-bold uppercase" >Home</h1> */}
      <FlipWordsDemo/>
    </main>
  );
}
