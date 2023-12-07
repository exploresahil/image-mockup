"use client";

import Image from "next/image";

import base from "@/public/shirt/shirt_base.png";

import p1 from "@/public/shirt/p1.jpg";
import p2 from "@/public/shirt/p2.jpg";
import p3 from "@/public/shirt/p3.jpg";
import p4 from "@/public/shirt/p4.jpg";

import t1 from "@/public/shirt/t-1-full.png";
import t2 from "@/public/shirt/t-2-full.png";
import t3 from "@/public/shirt/t-3-full.png";
import t4 from "@/public/shirt/t-4-full.png";

import lable from "@/public/shirt/lable.png";
import buttons from "@/public/shirt/buttons.png";

import { useState } from "react";

export default function Home() {
  const [canvasImage, setCanvasImage] = useState(p1);

  const onButtonClick = (pattern: any) => {
    setCanvasImage(pattern);
  };

  return (
    <section id="mockupMain">
      <div className="images-container">
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="left-s"
          style={{ zIndex: 0 }}
        />
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="right-s"
          style={{ zIndex: 0 }}
        />
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="lable-bg"
          style={{ zIndex: 0 }}
        />
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="coller-bg"
          style={{ zIndex: 0 }}
        />
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="coller"
          style={{ zIndex: 0 }}
        />
        <Image
          src={base}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 1 }}
        />
        <Image
          src={canvasImage}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          className="pattern-image"
          style={{ zIndex: 2 }}
        />
        <Image
          src={t1}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 3, mixBlendMode: "lighten" }}
        />
        <Image
          src={t2}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 4, mixBlendMode: "color-burn" }}
        />
        <Image
          src={t3}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 5, mixBlendMode: "color-burn" }}
        />
        <Image
          src={t4}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 5, mixBlendMode: "overlay" }}
        />
        <Image
          src={lable}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 6 }}
        />
        <Image
          src={buttons}
          alt="base"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          style={{ zIndex: 7 }}
        />
      </div>
      <div className="buttons-container">
        <button onClick={() => onButtonClick(p1)}>
          <Image
            src={p1}
            alt="base"
            fill
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          />
        </button>
        <button onClick={() => onButtonClick(p2)}>
          <Image
            src={p2}
            alt="base"
            fill
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          />
        </button>
        <button onClick={() => onButtonClick(p3)}>
          <Image
            src={p3}
            alt="base"
            fill
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          />
        </button>
        <button onClick={() => onButtonClick(p4)}>
          <Image
            src={p4}
            alt="base"
            fill
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
          />
        </button>
      </div>
    </section>
  );
}
