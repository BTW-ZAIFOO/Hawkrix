"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaRobot,
  FaCogs,
} from "react-icons/fa";

function Innovation() {
  const [innovationList, setInnovationList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setInnovationList(data?.innovationList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    FaMobileAlt,
    FaLaptopCode,
    FaPaintBrush,
    FaRobot,
    FaCogs,
  };

  return (
    <section id="services">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <div className="max-w-(--breakpoint-Xsm) text-center">
                <h2>
                  What We Give To You{" "}
                  <span className="instrument-font italic font-normal dark:text-white/70">
                    Amazingly
                  </span>
                </h2>
              </div>

              {/* Innovation Cards */}
              <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full">
                {innovationList?.map((items: any, index: any) => {
                  const IconComponent = iconMap[items.icon];
                  return (
                    <div
                      key={index}
                      className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9`}
                    >
                      <div>
                        {IconComponent ? (
                          <IconComponent
                            size={40}
                            className={items.txt_color}
                            aria-label={items.title}
                          />
                        ) : null}
                      </div>
                      <div>
                        <h5 className={`${items.txt_color}`}>
                          {items.title
                            .split("\n")
                            ?.map((line: any, i: number) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full">
              <h4 className="text-white text-center xl:text-left">
                Want to Work with us
                <br /> Stay In Touch.
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="mailto:careers.Hawkrix@gmail.com"
                  className="group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-3 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                >
                  <span>For Collaboration</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#1B1D1E" />
                    <path
                      d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                      stroke="white"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://Hawkrix.vercel.app/"
                  className="group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                >
                  <span>View Portfolio</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;