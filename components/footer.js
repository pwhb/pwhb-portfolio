import { SmallSocialLinks } from "./contact";
import socialLinks from "../constants/social-links.json";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="flex flex-col md:flex-row md:justify-between my-20">
        <div className="p-3 rounded-lg hover:-rotate-6 text-center">
          <a href="#" className="font-semibold hover:font-bold hover:text-pink-400">
            Phone Waiyam Hein
          </a>
        </div>
        <div className="text-center">
          <small>&copy; Copyright {year}</small>
          <p>
            Powered by{" "}
            <a className="font-bold hover:underline" href="https://vercel.com/">
              Vercel
            </a>{" "}
          </p>
        </div>
        <div className="text-center mt-10 md:mt-0">
          <a href="/#contact" className="font-semibold hover:font-bold">
            <h4>Contact</h4>
          </a>
          <SmallSocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
