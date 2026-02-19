"use client";

import { useEffect, useState } from "react";
import SingleAchievement from "./SingleAchievement";

function Achievements() {
  const [achievementsList, setAchievementsList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAchievementsList(data?.achievementsList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="awards">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            {/* Heading */}
            <div className="max-w-3xl text-center mx-auto">
              <h2>
                Accolades and achievements celebration our{" "}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  design excellence
                </span>
              </h2>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {achievementsList?.map((item: any, index: any) => (
                <SingleAchievement key={index} achievements={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;