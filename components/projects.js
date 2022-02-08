import { SectionTitle } from "./common";
import resume from "../constants/resume.json";
import { formatDate } from "../utils";
import Image from "next/image";

const platforms = {
  web: "https://www.svgrepo.com/show/331980/web.svg",
  android: "https://www.svgrepo.com/show/184140/android.svg",
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-pink-100 dark:bg-pink-900 rounded-lg py-10 my-10"
    >
      <SectionTitle title="Projects" />
      <div className="px-5 md:px-0 md:max-w-4xl mx-auto">
        {resume.projects.map((item) => (
          <div className="mb-10">
            <h4 className="font-bold text-xl mb-3">
              <Image
                src={item.iconUrl}
                width={40}
                height={40}
                className="rounded bg-gray-600 dark:bg-gray-200"
                alt={`${item.name} icon`}
              />
              <span className="ml-4">{item.name}</span>
            </h4>
            <div className="flex flex-row flex-wrap justify-center m-6">
              {item.photoUrls.map((img, idx) => (
                <img
                  src={img}
                  id={idx}
                  className="md:w-48 md:hover:scale-125 hover:scale-110 m-6"
                />
              ))}
            </div>
            <div className="text-center mb-3">
              <p className="font-medium mb-3">{item.description}</p>
              <div className="mb-4">
                {item.keywords.map((keyword, idx) => (
                  <span className="text-xs p-1 rounded-md bg-green-200 dark:bg-green-600 m-2 hover:opacity-70">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-sm">
              <p>
                <span className="font-semibold">url : </span>
                {item.url ? (
                  <a
                    href={item.url}
                    className="text-blue-600 dark:text-blue-300"
                  >
                    {item.url}
                  </a>
                ) : (
                  <span>TBA</span>
                )}
              </p>
              <p>
                <span className="font-semibold">
                  platform :{" "}
                  <img
                    className="w-7 h-7 rounded m-3 inline bg-gray-200 dark:bg-white p-1"
                    src={platforms[item.platform]}
                  />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
