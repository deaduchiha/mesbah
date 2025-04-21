"use client";

import { useState, useRef, useEffect } from "react";
import { Music } from "lucide-react";

export default function FlowerBox() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // Play the song when opening
      audioRef.current?.play();
    } else {
      // Pause the song when closing
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/music.ogg");
    audioRef.current.loop = true;

    // Cleanup
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div
        className={`relative cursor-pointer transition-all duration-700 ${
          isOpen ? "h-[500px] w-[500px]" : "h-64 w-64"
        }`}
        onClick={handleClick}
      >
        {/* Box */}
        <div
          className={`absolute inset-0 rounded-lg shadow-lg transition-all duration-700 ${
            isOpen
              ? "bg-gradient-to-br from-pink-100 to-purple-50 scale-100 rotate-0 opacity-20"
              : "bg-gradient-to-br from-pink-200 to-purple-100 scale-100 rotate-0 opacity-100"
          }`}
        >
          {!isOpen && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-pink-700">
              <Music className="h-12 w-12 mb-4" />
              <p className="text-center font-medium">
                Click to open the flower box
              </p>
            </div>
          )}
        </div>

        {/* Main Flower Group */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          {/* Rose */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`transition-all duration-1500 delay-300 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="relative h-40 w-40">
                {/* Rose petals - inner layer */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`rose-inner-${i}`}
                    className="absolute top-1/2 left-1/2 h-16 w-10"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${
                        i * 30
                      }deg) translateY(-10px)`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-b from-red-400 to-red-600 transition-all duration-1500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: `${300 + i * 50}ms`,
                      }}
                    ></div>
                  </div>
                ))}

                {/* Rose petals - outer layer */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`rose-outer-${i}`}
                    className="absolute top-1/2 left-1/2 h-24 w-14"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${
                        i * 30
                      }deg) translateY(-20px)`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-b from-red-300 to-red-500 transition-all duration-1500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: `${600 + i * 50}ms`,
                      }}
                    ></div>
                  </div>
                ))}

                {/* Rose center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  ></div>
                </div>

                {/* Stem and leaves */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 h-40 w-4"
                  style={{ transform: "translateY(20px)" }}
                >
                  <div
                    className={`h-full w-2 mx-auto bg-green-600 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ transformOrigin: "top", transitionDelay: "200ms" }}
                  ></div>

                  {/* Leaves */}
                  <div
                    className="absolute top-1/3 left-0 h-4 w-16"
                    style={{ transform: "rotate(-30deg) translateX(-12px)" }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "right",
                        transitionDelay: "400ms",
                      }}
                    ></div>
                  </div>
                  <div
                    className="absolute top-2/3 right-0 h-4 w-16"
                    style={{ transform: "rotate(30deg) translateX(12px)" }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-l from-green-600 to-green-400 transition-all duration-1000 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "left",
                        transitionDelay: "500ms",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunflower */}
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2">
            <div
              className={`transition-all duration-1500 delay-500 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="relative h-40 w-40">
                {/* Sunflower petals */}
                {[...Array(18)].map((_, i) => (
                  <div
                    key={`sunflower-${i}`}
                    className="absolute top-1/2 left-1/2 h-24 w-8"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${
                        i * 20
                      }deg) translateY(-30px)`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-t from-yellow-500 to-yellow-300 transition-all duration-1500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: `${500 + i * 40}ms`,
                      }}
                    ></div>
                  </div>
                ))}

                {/* Sunflower center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`h-20 w-20 rounded-full bg-gradient-to-br from-yellow-800 to-yellow-900 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  >
                    {/* Seed pattern */}
                    <div className="absolute inset-2 rounded-full overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`seed-row-${i}`}
                          className="flex justify-center gap-1 absolute w-full"
                          style={{ top: `${20 + i * 12}%`, left: "0" }}
                        >
                          {[...Array(5)].map((_, j) => (
                            <div
                              key={`seed-${i}-${j}`}
                              className={`h-1.5 w-1.5 rounded-full bg-yellow-950 opacity-${
                                [70, 60, 80, 65, 75][(i + j) % 5]
                              }`}
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stem and leaves */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 h-40 w-4"
                  style={{ transform: "translateY(20px)" }}
                >
                  <div
                    className={`h-full w-2 mx-auto bg-green-600 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ transformOrigin: "top", transitionDelay: "300ms" }}
                  ></div>

                  {/* Leaves */}
                  <div
                    className="absolute top-1/4 left-0 h-5 w-14"
                    style={{ transform: "rotate(-40deg) translateX(-10px)" }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "right",
                        transitionDelay: "450ms",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tulip */}
          <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 translate-y-1/2">
            <div
              className={`transition-all duration-1500 delay-700 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="relative h-40 w-40">
                {/* Tulip petals */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`tulip-${i}`}
                    className="absolute top-1/2 left-1/2 h-28 w-12"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${
                        i * 60
                      }deg) translateY(-20px)`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-t-full bg-gradient-to-b from-purple-300 to-purple-500 transition-all duration-1500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: `${700 + i * 60}ms`,
                      }}
                    ></div>
                  </div>
                ))}

                {/* Tulip center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  ></div>
                </div>

                {/* Stem and leaves */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 h-40 w-4"
                  style={{ transform: "translateY(20px)" }}
                >
                  <div
                    className={`h-full w-2 mx-auto bg-green-600 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ transformOrigin: "top", transitionDelay: "400ms" }}
                  ></div>

                  {/* Leaves */}
                  <div
                    className="absolute top-1/2 right-0 h-4 w-16"
                    style={{ transform: "rotate(30deg) translateX(12px)" }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-l from-green-600 to-green-400 transition-all duration-1000 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "left",
                        transitionDelay: "550ms",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daisy */}
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2">
            <div
              className={`transition-all duration-1500 delay-600 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="relative h-36 w-36">
                {/* Daisy petals */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`daisy-${i}`}
                    className="absolute top-1/2 left-1/2 h-20 w-7"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${
                        i * 30
                      }deg) translateY(-20px)`,
                    }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-white transition-all duration-1500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: `${600 + i * 50}ms`,
                      }}
                    ></div>
                  </div>
                ))}

                {/* Daisy center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  ></div>
                </div>

                {/* Stem and leaves */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 h-36 w-4"
                  style={{ transform: "translateY(20px)" }}
                >
                  <div
                    className={`h-full w-2 mx-auto bg-green-600 transition-all duration-1000 ${
                      isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ transformOrigin: "top", transitionDelay: "350ms" }}
                  ></div>

                  {/* Leaves */}
                  <div
                    className="absolute top-1/3 left-0 h-4 w-14"
                    style={{ transform: "rotate(-35deg) translateX(-10px)" }}
                  >
                    <div
                      className={`h-full w-full rounded-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "right",
                        transitionDelay: "500ms",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small decorative flowers */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`small-flower-${i}`}
              className="absolute"
              style={{
                top: `${15 + ((i * 11) % 70)}%`,
                left: `${15 + ((i * 13) % 70)}%`,
                transform: `rotate(${(i * 45) % 360}deg)`,
              }}
            >
              <div
                className={`transition-all duration-1000 ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: `${1000 + i * 100}ms` }}
              >
                <div className="relative h-10 w-10">
                  <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400"></div>
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={`small-petal-${i}-${j}`}
                      className="absolute top-1/2 left-1/2 h-5 w-2.5"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${
                          j * 72
                        }deg) translateY(-3px)`,
                      }}
                    >
                      <div
                        className="h-full w-full rounded-full"
                        style={{
                          background: [
                            "bg-pink-300",
                            "bg-purple-300",
                            "bg-blue-300",
                            "bg-teal-300",
                          ][i % 4],
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Floating pollen particles */}
          {isOpen &&
            [...Array(15)].map((_, i) => (
              <div
                key={`pollen-${i}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200 opacity-70 animate-float"
                style={{
                  top: `${(i * 7) % 100}%`,
                  left: `${(i * 13 + 5) % 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + (i % 4)}s`,
                }}
              ></div>
            ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        {isOpen ? "Click again to close the flower box" : ""}
      </p>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(2px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
