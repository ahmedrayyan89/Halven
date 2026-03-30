"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src: string;
  fallbackSrc: string;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export default function VideoBackground({
  src,
  fallbackSrc,
  overlayClassName = "video-overlay",
  className,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      console.log("Autoplay blocked — fallback image showing.");
    });
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Layer 1: Fallback image — always present */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fallbackSrc})` }}
      />

      {/* Layer 2: Video — hidden on mobile via CSS, no JavaScript needed */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Layer 3: Gradient overlay */}
      <div className={cn("absolute inset-0", overlayClassName)} />

      {/* Layer 4: Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
