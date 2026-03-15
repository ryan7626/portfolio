import { SectionWrapper } from "./SectionWrapper";
import { education } from "@/app/data/education";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-2xl w-full">
        {/* Section heading */}
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2 text-center">
          Education
        </h2>
        <p className="text-sm text-gray-400 text-center mb-14 tracking-wide">
          Academic background
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {education.map((entry, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Left column (dates — visible on desktop) */}
                <div className="hidden md:flex md:justify-end md:items-start md:pt-0.5">
                  <span className="text-sm text-gray-400 font-mono tracking-wide">
                    {entry.dateRange}
                  </span>
                </div>

                {/* Right column (content) */}
                <div>
                  {/* Mobile date */}
                  <span className="text-xs text-gray-400 font-mono tracking-wide md:hidden">
                    {entry.dateRange}
                  </span>

                  <h3 className="text-lg font-medium text-gray-900 mt-1 md:mt-0 leading-tight">
                    {entry.institution}
                  </h3>

                  <p className="text-sm text-gray-500 mt-0.5">
                    {entry.degree}
                    {entry.gpa && (
                      <span className="text-gray-400"> · {entry.gpa}</span>
                    )}
                  </p>

                  {entry.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {entry.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {entry.notes && (
                    <p className="text-xs text-gray-400 mt-3 italic">
                      {entry.notes}
                    </p>
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
