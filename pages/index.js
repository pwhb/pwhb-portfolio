import Layout from "../components/layout";
import About from "../components/about";
import Slogan from "../components/slogan";
import Tech from "../components/tech";
import Work from "../components/work";
import Projects from "../components/projects";
import Volunteer from "../components/volunteer";

const App = () => {
  return (
    <Layout>
      <Slogan />
      <About />
      {/* <Timeline /> */}
      <Work />
      <Volunteer />
      <Tech />
      <Projects />
    </Layout>
  );
};

export default App;
