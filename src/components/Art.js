const Art = ({ title, pageLink, artImg }) => {
  return (
    <>
      {/* <div className="justify-content-center align-items-center bd-highlight pl-5 pr-5">
        <a href={pageLink} target="_blank" rel="noopener noreferrer">
          <h1 className="text-center">{title}</h1>
        </a>
      </div> */}
      <div className="container">
        <div className="row">
          <img src={artImg} class="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Art;
