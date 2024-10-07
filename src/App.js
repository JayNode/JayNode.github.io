import "./App.css";
import me from "./assets/me.jpeg";
import $ from "jquery";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import Art from "./components/Art";
import resume from "./assets/Jared-Immerman-Resume.pdf";
import ladyLight from "./assets/lady-light.jpg";
import tyler from "./assets/tyler-the-creator.jpg";
import model from "./assets/model.jpg";
import sketch from "./assets/lady-bnw.jpg";
import recobotImg from "./assets/recoBot.png";
import redditSum from "./assets/redditSum.png";
import csGroup from "./assets/CS-Group.png";
import ffgDisp from "./assets/FFG-display.png";
function App() {
  //Dynamic Fixed Navigation Bar
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    });
  });

  $(document).ready(function () {
    //dynamic active navitem
    $(".nav-item").on("click", function (e) {
      // Remove class active form all li.nav-item
      $("li.nav-item").removeClass("active");
      // Add Class to current Element.
      $(this).addClass("active");
    });

    // cancel auto caroussel
    // $(".carousel").carousel({
    //   interval: false,
    // });
  });

  return (
    <div>
      {/* <!-- Home --> */}
      <div id="home" className="gradient">
        <div className="container d-flex flex-column justify-content-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="row mt-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="d-sm-flex col">
                <h1 className="fw-bold text-black m-0 pr-3 text-center">
                  Hello, I'm
                </h1>
                <h1 className=" fw-bold m-0 text-color text-center">
                  Jared Immerman.
                </h1>
              </div>
            </div>
            <div className="row">
              <h1
                className="fw-bold text-black m-0 text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                I'm a Software Engineer and Artist.
              </h1>
            </div>
            <div className="row">
              <a href="#projects">
                <div
                  class="button mt-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="2000"
                >
                  View my work <i class="ml-2 fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav
          id="navbar_top"
          className="gradientColor navbar navbar-expand-sm navbar-dark"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="navbarNav">
            <ul className="navbar-nav nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  HOME{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#art">
                  ART
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#links">
                  LINKS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!-- Projects --> */}
      <div
        id="projects"
        className="container-fluid contentSpacing projectContainer"
      >
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1
            className="font-weight-bold"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            PROJECTS
          </h1>
          <div
            className="header-bar waypoint animated slide-in-left"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="500"
          ></div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-interval="false"
          data-aos="zoom-in-up"
          data-aos-duration="1700"
          data-aos-delay="1000"
        >
          <ol className="carousel-indicators mt-5">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Project
                title="Computer Starter"
                pageLink="https://github.com/jjb4547/ComputerStarter"
                imgLink={csGroup}
                infoTitle="Want to learn about PCs?"
                infoText="Computer Starter is an android application geared towards
                computer enthusiasts, old and new to join a community, learn
                about computers and build one on their own."
                infoSecondTitle="Technology"
                infoSecondText="Computer Starter is an Android based application written in Java that 
                truly utilizes its declarative concept allowing its UI to shine. It utilizes 
                Firebase for Authentication and storage. Finally, Computer Starter uses web scraping 
                tools to extract the best products and prices for the pc build section."
              />
            </div>
            <div className="carousel-item">
              <Project2
                title="Fabled Fieldguide"
                pageLink="https://github.com/JayNode/FFG"
                imgLink={ffgDisp}
                infoTitle="About"
                infoText="Fabled Fieldguide is an environmental conservation focused website using 
                mythical creatures as figure heads for thier respected environments. It makes learning 
                about and helping the enviroment fun and fulfilling."
                infoSecondTitle="Technology"
                infoSecondText="Fable Fieldguide is a React web application written in JavaScript 
                using MongDB for authentication and storage. "
              />
            </div>
            <div className="carousel-item">
              <Project2
                title="Reco Bot"
                pageLink="https://github.com/JayNode/VGRB"
                imgLink={recobotImg}
                infoTitle="What is Reco Bot?"
                infoText="Reco Bot is a video game recommendation bot through Discord. It will look at your 
                current played games in your Steam library and recommend a game it believes you would enjoy."
                infoSecondTitle="Technology"
                infoSecondText="Reco Bot is a python based Discord bot which utilizes Discord API, Steam API and OpenAI API."
              />
            </div>
            <div className="carousel-item">
              <Project2
                title="Reddit Summarizer"
                pageLink=""
                imgLink={redditSum}
                infoTitle="About"
                infoText="Reddit Summarizer is a reddit bot that will search for articles in a given subreddit 
                and comment a summary to help save a user time"
                infoSecondTitle="Technology"
                infoSecondText="Reddit Bot - Summarizer is a python script that scans for articles 
                in a selected subreddit. Using the article, we web scrape the article information putting it into chatGPT 3.5
                to extract a summarized version. Then we use reddit's API (PRAW) to comment the summary to the original post."
              />
            </div>

            {/* <div className="carousel-item">
              <Project
                title="Mark Automation Script"
                pageLink="https://github.com/JayNode/Mark-Automation-Script"
                videoLink="https://youtube.com/embed/dedLbTl9RD0"
                infoTitle="About"
                infoText="Mark Automation Script is an automation script that takes data from a Baselight machine 
                and moves it to the correct file location."
                infoSecondTitle="Technology"
                infoSecondText="Mark Automation Script is a python script which parses through the Baselight machine, 
                stores the data in MongoDB and redistributes the data to the correct file location."
              />
            </div> */}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* <!-- Art --> */}
      <div id="art" className="container pt-5">
        <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
          <h1
            className="font-weight-bold"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            ART
          </h1>
          <div
            className="header-bar waypoint animated slide-in-left"
            // data-aos="fade-left"
            // data-aos-duration="3000"
            // data-aos-delay="500"
          ></div>
        </div>
        <div className="row justify-content-md-center pt-5 pb-0">
          <div
            className="col"
            // data-aos="flip-left"
            // data-aos-duration="1000"
            // data-aos-delay="500"
          >
            <div className="">
              <Art artImg={ladyLight} />
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center pt-4 pb-5">
          <div
            className="col"
            // data-aos="flip-left"
            // data-aos-duration="1000"
            // data-aos-delay="500"
          >
            <div className="">
              <Art artImg={tyler} />
            </div>
          </div>
          <div
            className="col"
            // data-aos="flip-left"
            // data-aos-duration="1000"
            // data-aos-delay="500"
          >
            <div className="">
              <Art artImg={model} />
            </div>
          </div>
          <div
            className="col"
            // data-aos="flip-left"
            // data-aos-duration="1000"
            // data-aos-delay="500"
          >
            <div className="">
              <Art artImg={sketch} />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About --> */}
      <div id="about" className="container contentSpacing">
        <div className="row flex-column justify-content-center align-items-center ">
          <h1
            className="font-weight-bold"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            ABOUT
          </h1>
          <div
            className="header-bar"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          ></div>
        </div>
        <div>
          <div
            className="row"
            data-aos="zoom-out"
            data-aos-duration="900"
            data-aos-delay="700"
          >
            <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
              <img src={me} width="300px" className="rounded" alt="" />
              <h2 className="font-weight-bold text-center pt-3">
                Who's Jared?
              </h2>
              <p className="text-center description">
                Utilizing my degree in computer science and my passion for art
                fuels my innovative approach to problem-solving and design. Over
                the years, I have honed my skills through various projects,
                ranging from web developement to data analysis. These
                experiences have equipped me with a robust foundation in
                software engineering, enabling me to build efficient,
                user-friendly solutions.
              </p>
            </div>
            <div className="col-xl d-flex flex-column bd-highlight justify-content-center w-100 deviceAdjustment">
              <div className="progress progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Python
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  90%
                </div>
              </div>
              <div className="progress mt-4 progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Javascript
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-aos-delay="600"
                >
                  90%
                </div>
              </div>
              <div className="progress mt-4 progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  HTML
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  80%
                </div>
              </div>
              <div className="progress mt-4 progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  CSS
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  data-aos-delay="800"
                >
                  80%
                </div>
              </div>
              <div className="progress mt-4 progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  React
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-60 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                  data-aos-delay="800"
                >
                  75%
                </div>
              </div>
              <div className="progress mt-4 progressHeight">
                <div
                  className="progress-bar bg-info font-weight-bold w-15"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Java
                </div>
                <div
                  className="progress-bar font-weight-bold text-right pr-5 w-55 progressFont"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                  data-aos-delay="800"
                >
                  70%
                </div>
              </div>
            </div>
          </div>

          {/** <!-- Interests --> */}
          <div id="projects" className="container ">
            <div className="row personalInterests">
              <div
                className="text-light col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle2"
                data-aos="flip-left"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <h1 className="font-weight-bold text-center pt-4">
                  Personal Interests
                </h1>
                <p className="text-center contactTitle">
                  When I am not coding my next project, I enjoy spending my time
                  doing any of the following:
                </p>
                <ul>
                  <li>Drawing</li>
                  <li>Video Games</li>
                  <li>Running</li>
                  <li>Tennis</li>
                  <li>Reading</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-around bd-highlight pt-5 pb-5">
            <div
              className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <i className="fas fa-code fa-6x text-primary"></i>
              <h1 className="pt-2 aboutColor">Concise</h1>
              <p className="text-center aboutColor">
                Clear Well Documented Code in Appliance to Coding Standards
              </p>
            </div>
            <div
              className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <i className="fas fa-cubes fa-6x text-success"></i>
              <h1 className="pt-2 aboutColor text-center">Problem Solving</h1>
              <p className="text-center aboutColor">
                {" "}
                Create Efficient Algorithms. Divide and Conquer using
                Abstraction
              </p>
            </div>
            <div
              className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <i className="fas fa-shield-alt fa-6x text-warning"></i>
              <h1 className="pt-2 aboutColor">Security</h1>
              <p className="text-center aboutColor">
                Best Practices and Secure Software Development from Inception
              </p>
            </div>
            <div
              className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <i className="fab fa-medapps fa-6x text-info"></i>
              <h1 className="pt-2 aboutColor">Algorithms</h1>
              <p className="text-center aboutColor">
                Efficient Algorithms using Best Performing Data Structures
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer
        id="links"
        className="container-fluid d-flex flex-column justify-content-center align-items-center footerContainer"
      >
        <a href="#home">
          <div
            class="icon d-flex flex-column justify-content-center align-items-center upArrowIcon"
            id="icon-1"
          >
            <i class="fas fa-arrow-up text-light"></i>
          </div>
        </a>

        <div class="row">
          <a
            href="https://www.linkedin.com/in/jared-immerman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="icon d-flex flex-column justify-content-center align-items-center"
              id="icon-2"
            >
              <i class="fab fa-linkedin-in text-light"></i>
            </div>
          </a>
          <a
            href={resume}
            download="JaredImmermanResume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="icon d-flex flex-column justify-content-center align-items-center"
              id="icon-3"
            >
              <i class="fal fa-file-user text-light"></i>
            </div>
          </a>
          <a
            href="https://instagram.com/jaredimmerman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="icon d-flex flex-column justify-content-center align-items-center"
              id="icon-4"
            >
              <i class="fab fa-instagram text-light"></i>
            </div>
          </a>
          <a
            href="http://github.com/JayNode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="icon d-flex flex-column justify-content-center align-items-center"
              id="icon-5"
            >
              <i class="fab fa-github text-light"></i>
            </div>
          </a>
          <form action="mailto:jimmerman819@gmail.com" method="post">
            <button class="icon d-flex flex-column justify-content-center align-items-center emailBttn">
              <div id="icon-5">
                <i class="fa fa-envelope text-light"></i>
              </div>
            </button>
          </form>
        </div>
        <div class="info-box">
          <div class="footnote">
            Jared Immerman <span class="highlight">©2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
