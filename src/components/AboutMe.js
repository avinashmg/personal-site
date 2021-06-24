const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="highlight-blue"
      style={{ background: "#000" }}
    >
      <div className="container">
        <div className="intro">
          <h2 className="text-center">About Me </h2>
          <p className="text-center">
            <img
              src="https://avatars.githubusercontent.com/u/27919534?v=4"
              className="aboutMeImg"
            />
          </p>
          <p className="text-center">
            My name is Avinash M G. This is a site build for demo{" "}
          </p>
        </div>
        <div className="buttons"></div>
      </div>
    </section>
  );
};

export default AboutMe;
