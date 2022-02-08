import timeline from "../constants/timeline.json";
import { SectionTitle } from "./common";

const Timeline = () => {
  return (
    <div className="bg-pink-100 dark:bg-pink-900 rounded-lg py-10 my-10">
      <SectionTitle title="Timeline" />
      <div className="mx-auto md:max-w-4xl relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-100  h-full border"
          style={{ left: "50%" }}
        ></div>
        {timeline.years.map((item, idx) => (
          <TimelineItem
            key={`${idx} timeline-item`}
            right={idx % 2 === 0}
            year={item.year}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ right, year, info }) => (
  <div
    className={`hover:scale-110 mb-8 flex items-center w-full justify-between ${
      right ? "right-timeline" : "left-timeline flex-row-reverse"
    }`}
  >
    <div className="order-1 w-5/12"></div>
    <div
      className={`z-20 flex items-center order-1 shadow-xl w-8 h-8 md:w-16 md:h-16 rounded-full ${
        right ? "bg-red-200 dark:bg-red-600" : "bg-green-200 dark:bg-green-600"
      }`}
    >
      <h1 className="mx-auto text-xs font-semibold md:text-lg text-gray-600 dark:text-gray-200">
        {year}
      </h1>
    </div>
    <div
      className={`order-1 rounded-lg shadow-xl w-5/12 px-1 md:px-6 py-4 ${
        right ? "bg-red-200 dark:bg-red-600" : "bg-green-200 dark:bg-green-600"
      }`}
    >
      {info.map((item, idx) => (
        <div className={`${idx == info.length - 1 ? "mb-1" : "mb-4"}`} key={idx}>
          <h3 className="mb-1 text-gray-600 dark:text-gray-200 text-sm font-semibold md:text-xl">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-200 text-opacity-100">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
