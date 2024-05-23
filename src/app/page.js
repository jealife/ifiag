import { FlipWordsDemo } from "@/components/FlipWordsDemo/FlipWordsDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex py-24 min-h-[70dvh] flex-col items-center justify-center">
      {/* <h1 className=" text-5xl font-bold uppercase" >Home</h1> */}
      <div className="z-0">
        <FlipWordsDemo />
      </div>
      <div class="visme_d" data-title="Contact Me Portfolio" data-url="w467p4oz-contact-me-portfolio" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="69710"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
    </main>
  );
}
