import { SectionWrapper } from "./SectionWrapper";
import { education } from "@/app/data/education";
import Image from "next/image";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl w-full">
        {/* Section heading */}
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-zinc-100 mb-2 text-center">
          Education
        </h2>
        <p className="text-sm text-gray-400 dark:text-zinc-400 text-center mb-14 tracking-wide">
          Computer science and mathematics foundation
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-zinc-800 md:left-[240px] md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {education.map((entry, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[220px_1fr] md:gap-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 z-10 md:left-[240px] md:-translate-x-1/2" />

                {/* Left column (dates — visible on desktop) */}
                <div className="hidden md:flex md:justify-end md:items-start md:pt-0.5">
                  <span className="text-sm text-gray-400 dark:text-zinc-500 font-mono tracking-wide">
                    {entry.dateRange}
                  </span>
                </div>

                {/* Right column (content) */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                  <div className="flex-1 w-full">
                    {/* Mobile date */}
                    <span className="text-xs text-gray-400 dark:text-zinc-500 font-mono tracking-wide md:hidden">
                      {entry.dateRange}
                    </span>

                    <h3 className="text-xl font-medium text-gray-900 dark:text-zinc-100 mt-1 md:mt-0 leading-tight">
                      {entry.institution}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                      {entry.degree}
                      {entry.gpa && (
                        <span className="text-gray-400 dark:text-zinc-500"> · {entry.gpa}</span>
                      )}
                    </p>

                    {entry.coursework && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded-full border border-transparent dark:border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}

                    {entry.notes && (
                      <p className="text-xs text-gray-400 dark:text-zinc-600 mt-3 italic">
                        {entry.notes}
                      </p>
                    )}
                  </div>

                  {/* In-line Image Area */}
                  {(entry.darkimage || entry.lightImage) && (
                    <div className="hidden lg:block shrink-0 relative w-[220px] xl:w-[260px] aspect-square rounded-[1.5rem] overflow-hidden">
                      {entry.darkimage && (
                        <Image src={entry.darkimage} alt="Scarlet Knight Helmet Dark" fill className={entry.lightImage ? "hidden dark:block object-cover" : "object-cover"} unoptimized />
                      )}
                      {entry.lightImage && (
                        <Image src={entry.lightImage} alt="Scarlet Knight Helmet Light" fill className={entry.darkimage ? "block dark:hidden object-cover" : "object-cover"} unoptimized />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
