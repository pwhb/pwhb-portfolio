import resume from "../constants/resume.json";
import { SectionTitle } from "./common";
import { formatDate } from "../utils";

const Volunteer = () => {
  return (
    <div
      id="volunteer"
      className="bg-pink-100 dark:bg-pink-900 rounded-lg py-10 my-10"
    >
      <SectionTitle title="Volunteer" />
      <div className="px-5 md:px-0 md:max-w-4xl mx-auto">
        {resume.volunteer.map((volunteer, idx) => (
          <div className="mb-10 hover:scale-110 hover:ml-10">
            <h3 className="font-semibold text-2xl">{volunteer.organization}</h3>
            <h3 className="font-semibold text-lg">{volunteer.position}</h3>
            <p className="text-sm">
              {formatDate(volunteer.startDate)} -{" "}
              {formatDate(volunteer.endDate)}
            </p>
            <p>{volunteer.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
