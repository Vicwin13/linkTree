import "../App.css";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Logos from "./Logos";
import Profile from "./Profile";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Buttons />
      <Logos />
      <Footer />
    </div>
  );
};

export default Home;
