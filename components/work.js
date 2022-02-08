import resume from "../constants/resume.json";
import { SectionTitle } from "./common";
import { formatDate } from "../utils";

const Work = () => {
  return (
    <div
      id="work"
      className="bg-blue-100 dark:bg-blue-900 rounded-lg py-10 my-10"
    >
      <SectionTitle title="Work" />
      <div className="px-5 md:px-0 md:max-w-4xl mx-auto">
        {resume.work.map((work, idx) => (
          <div className="mb-10" key={idx}>
            <div
              className={`flex justify-between ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <img
                className="w-12 h-12 md:w-32 md:h-32 m-1 md:m-3 rounded-lg hover:scale-110"
                src={work.imageUrl}
              />
              <div className="md:hover:scale-110 p-3">
                <h3 className="font-semibold text-2xl">{work.name}</h3>
                <h3 className="font-semibold text-lg">{work.position}</h3>
                <span className="text-sm">
                  {formatDate(work.startDate)} - {formatDate(work.endDate)}
                </span>
                <span className="text-xs hidden md:block text-gray-500 dark:text-gray-300">
                  {work.duration}
                </span>
                <div className="text-xs  md:hidden text-gray-500 dark:text-gray-300">
                  {work.duration}
                </div>
                <div className="md:w-full text-left">
                  {work.highlights.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
