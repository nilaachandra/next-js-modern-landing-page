import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import JumpingText from "@/components/animata/jumping-text";
import WaveReveal from "@/components/animata/wave-text";
import { TextEffect } from "@/components/animata/TextEffect";
import { AvatarList } from "@/components/animata/AvatarList";
import { Ticker } from "@/components/animata/Ticker";
import SpecialButton from "@/components/animata/special-button";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <div className="text-center text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[64px] lg:leading-[72px]">
          <WaveReveal
            mode="word"
            text="Start monitoring your website like a pro"
          />
        </div>
        <TextEffect
          per="word"
          as="h3"
          preset="blur"
          className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7"
        >
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </TextEffect>
        <div className="flex flex-col justify-center items-center w-full mt-6">
          <AvatarList />
          <div className="font-bold text-2xl flex items-center">
            <Ticker />+ Happy Users
          </div>
        </div>
        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <SpecialButton text="Try Free"/>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Cluth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
