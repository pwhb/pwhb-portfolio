import Contact from "./contact";
import resume from '../constants/resume.json'

const imageUrl =
  "https://github.com/pwhb/public/blob/main/images/square.jpg?raw=true";

const About = () => {
  return (
    <div
      id="about"
      className="bg-pink-100 dark:bg-pink-900 rounded-lg py-10 px-5 my-10"
    >
      {/* Small */}
      <div className="md:hidden">
        <img
          className="h-48 w-48 object-cover mx-auto rounded-full hover:scale-75"
          src={imageUrl}
        />
        <div className="mx-auto max-w-md">
          <p className="text-4xl md:text-6xl mb-10 font-semibold">About</p>
          <p className="hover:scale-110 px-3">{resume.basics.summary}</p>
        </div>
      </div>
      {/* Wide */}
      <div className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row justify-between">
            <div className="max-w-md">
              <p className="text-6xl mb-10 font-semibold">About</p>
              <p className="hover:scale-110">{resume.basics.summary}</p>
            </div>
            <img className="h-64 rounded-lg hover:scale-75" src={imageUrl} />
          </div>
        </div>
      </div>
      <div id="contact" className="px-5 md:px-0 md:max-w-4xl mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default About;
