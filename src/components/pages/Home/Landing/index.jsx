const Landing = () => {
  return (
    <div className="home">
      <div className="content">
        <h5>Welcome To Home Of Gaiming</h5>
        <h1>
          HOME OF GAMING <span className="changecontent"></span>
        </h1>
      </div>
      <div className="video-container">
        <video src="./vid.mp4" loop autoplay muted></video>
      </div>
    </div>
  );
};

export default Landing;
