import TopNav from "../../components/topNav/topNav";
import "./home.css";

const Home = () => {
  return (
    <div id="Home">
      <TopNav />
      <div id="Home_body">
        <div id="Home_l">
          <div id="Home_ltop">
            <div id="Home_ltop_sect_header">
              <h1 id="Home_ltop_header">Frontend Developer and UX Designer.</h1>
            </div>
            <div id="Home_ltop_sect_photo">
              <img id="Home_ltop_photo" src="" alt="" />
            </div>
          </div>
          <div id="Home_lbot">
            <div id="Home_lbot_sect_art">
              <img id="Home_lbot_filler_art" src="" alt="" />
              <h1 id="Home_lbot_header_art">Art Work</h1>
              <img id="Home_lbot_artwork_art" src="" alt="" />
            </div>
            <div id="Home_lbot_sect_desc">
              <h2 id="Home_lbot_header_desc">
                I am a software engineer with an entrepreneurial drive and a
                passion for art. I am incredibly passionate about UX/UI, Web
                Applications and Frontend Development. This passion is
                demonstrated through my education, personal projects and work
                experience.
              </h2>
            </div>
            <div id="Home_lbot_sect_cont">
              <h1 id="Home_lbot_header_cont"></h1>
            </div>
          </div>
        </div>
        <div id="Home_body_r"></div>
      </div>
    </div>
  );
};

export default Home;
