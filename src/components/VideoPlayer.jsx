'use client';

import { useState, useRef } from 'react';
import { useT } from "@/i18n/client";
import { Play, Pause } from 'lucide-react';

export default function VideoPlayer() {
    const t = useT();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // Start as true since autoplay

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            {/* Video Player Container with Blurry Border */}
            <div
                className="relative w-full max-w-[1440px] h-[400px] md:h-[600px] lg:h-[500px] xl:h-[700px] rounded-[40px] p-[15px]"
                style={{
                    backdropFilter: 'blur(100px)',
                    boxShadow: `
            0px 8px 6px 0px rgba(0, 0, 0, 0.05),
            inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25),
            inset 0px -1px 1px 0px rgba(255, 255, 255, 0.1)
          `,
                    background: 'rgba(255, 255, 255, 0.1)',
                }}
            >
                {/* Video Element */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-[32px]"
                    src="/assets/SampleVideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onLoadedData={() => {
                        if (videoRef.current) {
                            videoRef.current.play().catch(console.error);
                            setIsPlaying(true);
                        }
                    }}
                // poster="/assets/video-poster.jpg" // Optional: add a poster image
                >
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play/Pause Button */}
                <button
                    onClick={togglePlayPause}
                    className="absolute bottom-6 right-6 md:bottom-6 md:right-6 w-[110px] h-[44px] px-4 py-2.5 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105"
                    style={{
                        backdropFilter: 'blur(100px)',
                        boxShadow: `
              0px 8px 6px 0px rgba(0, 0, 0, 0.05),
              inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25),
              inset 0px -1px 1px 0px rgba(255, 255, 255, 0.1)
            `,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                >
                    {/* Play/Pause Icons from lucide-react */}
                    <div className="flex items-center justify-center">
                        {isPlaying ? (
                            <Pause size={16} className="text-gray-700" />
                        ) : (
                            <Play size={16} className="text-gray-700" />
                        )}
                    </div>

                    {/* Button Text */}
                    <span className="text-md font-medium text-gray-700">
                        {isPlaying ? t('Pause') : t('Play')}
                    </span>
                </button>


            </div>
        </div>
    );
}