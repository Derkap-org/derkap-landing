import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Lines from "@/components/Lines";
import Onboarding from "@/components/Onboarding";

export default function Home() {

  const timelineAnimation = () => {
    gsap.timeline().fromTo(
      ".hero-img",
      {
        y: 100,
      },
      {
        y: 0,
        duration: .8,
        ease: "power2.out",
      }
    )
  }

  useGSAP(() => {
    timelineAnimation()
  })

  return (
    <>
      <div className="min-h-screen w-screen">
        <div id="hero" className="h-screen py-32 flex flex-col items-center justify-start gap-8 px-2 md:px-4">
          <h1 className="hero-title w-full text-5xl text-center text-pretty">Tape toi des barres en <span className="text-purple">défiant</span> tes potes</h1>
          <div className="overflow-hidden">
            <Image src="/images/img-hero.webp" alt="Trois téléphones montrant l'application Derkap" width={4188} height={3112} className="hero-img h-full w-auto max-w-[1000px] object-contain" />
          </div>
        </div>
        <Lines textOne="Relève les Défis" textTwo="DERKAP" black />
        <Onboarding />
        <Lines textOne="Relève les Défis" textTwo="DERKAP" purple />
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-pretty w-3/4 text-2xl leading-10">Montre à tes amis que tu es toujours prêt pour un <span className="text-purple">défi</span>, peu importe où ils se trouvent. Avec <span className="text-purple">Derkap</span>, c&apos;est <span className="text-purple">fun</span>, <span className="text-purple">facile</span> et <span className="text-purple">intéractif</span>. Lance des défis chaque jour, partage des moments <span className="text-purple">inoubliables</span> et prouve que tu es le meilleur du groupe. Ne laisse plus la distance vous séparer, amusez-vous à <span className="text-purple">chaque instant</span> !</p>
        </div>
      </div>
    </>
  );
}
