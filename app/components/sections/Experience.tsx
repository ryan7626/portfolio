import { SectionWrapper } from "./SectionWrapper";
import { experience } from "@/app/data/experience";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-2xl w-full">
        {/* Section heading */}
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2 text-center">
          Experience
        </h2>
        <p className="text-sm text-gray-400 text-center mb-14 tracking-wide">
          Where I&rsquo;ve worked
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-14">
            {experience.map((entry, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Left column — dates & location (desktop) */}
                <div className="hidden md:flex md:flex-col md:items-end md:pt-0.5">
                  <span className="text-sm text-gray-400 font-mono tracking-wide">
                    {entry.dateRange}
                  </span>
                  {entry.location && (
                    <span className="text-xs text-gray-300 mt-0.5">
                      {entry.location}
                    </span>
                  )}
                </div>

                {/* Right column — content */}
                <div>
                  {/* Mobile date & location */}
                  <div className="md:hidden">
                    <span className="text-xs text-gray-400 font-mono tracking-wide">
                      {entry.dateRange}
                    </span>
                    {entry.location && (
                      <span className="text-xs text-gray-300 ml-2">
                        · {entry.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mt-1 md:mt-0 leading-tight">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {entry.company}
                  </p>

                  {entry.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-500 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-gray-300"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
