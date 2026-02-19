"use client";

import { useEffect, useState } from "react";
import SingleCreativeMind from "./SingleCreativeMind";

function CreativeMind() {
  const [creativeMindList, setCreativeMindList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setCreativeMindList(data?.creativeMindList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="team">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            {/* Heading */}
            <div className="max-w-32 text-center">
              <h2>
                Led by passion, meet the mind behind{" "}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  our mission
                </span>
              </h2>
            </div>

            {/* Creative Minds */}
            <div className="flex items-center justify-center">
              {creativeMindList?.map((item: any, index: any) => (
                <SingleCreativeMind key={index} creativemind={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeMind;