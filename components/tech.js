import { SectionTitle } from "./common";
import icons from "../constants/icons.json";

const tech = [
  {
    name: "Backend",
    icons: [
      icons.expressjs,
      icons.graphql,
      icons.django,
      icons.flask,
      icons.fastapi,
      icons.laravel,
    ],
  },
  {
    name: "Frontend",
    icons: [
      icons.react,
      icons.vue,
      icons.svelte,
      //  icons.angular
    ],
  },
  {
    name: "Android",
    icons: [icons.kotlin, icons.reactNative, icons.flutter],
  },
  {
    name: "Database",
    icons: [
      icons.mongodb,
      icons.postgres,
      icons.mysql,
      icons.sqlite,
      icons.firebase,
    ],
  },
  {
    name: "Languages",
    icons: [
      icons.javaScript,
      icons.typeScript,
      icons.java,
      icons.kotlin,
      icons.cpp,
      icons.lua,
      icons.python,
      icons.php,
    ],
  },
];
const Tech = () => {
  return (
    <div
      id="tech"
      className="bg-blue-100 dark:bg-blue-900 rounded-lg py-10 my-10"
    >
      <SectionTitle title="Tech Stack" />
      <div className="px-5 md:px-0 md:max-w-4xl mx-auto">
        {tech.map((item) => (
          <div className="mb-10">
            <h4 className="font-bold text-xl mb-3">{item.name}</h4>
            <div className="flex flex-row flex-wrap">
              {item.icons.map((icon) => (
                <a href={icon.url} target="_blank">
                  <img
                    src={icon.image}
                    className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 dark:bg-white m-3 rounded-lg p-2 hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
