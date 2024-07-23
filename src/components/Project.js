const Project = ({
  title,
  pageLink,
  videoLink,
  infoTitle,
  infoText,
  infoSecondTitle,
  infoSecondText,
}) => {
  return (
    <>
      <div className="row justify-content-center align-items-center bd-highlight pl-5 pr-5">
        <a href={pageLink} target="_blank" rel="noopener noreferrer">
          <h1 className="text-center">{title}</h1>
        </a>
      </div>
      <div className="row justify-content-around bd-highlight pl-5 pr-5">
        <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
          <iframe
            width="100%"
            className="videoPlayer"
            frameborder="0"
            scrolling="no"
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-xl bd-highlight d-flex flex-column justify-content-center align-items-center">
          <div className="w-75 text-center">
            <h2>{infoTitle}</h2>
            <p className="">{infoText}</p>
            <h2>{infoSecondTitle}</h2>
            <p className="">{infoSecondText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
