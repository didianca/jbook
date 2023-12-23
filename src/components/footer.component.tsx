const FooterComponent: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <hr />
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="title">Credits</p>
            <p className="heading">
              <a href="https://www.udemy.com/user/sgslo/">Stephen Grinder's</a>
            </p>
            <p className="heading">
              <a href="https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/">
                Udemy Course
              </a>
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">Author</p>
            <p className="heading">
              <a href="https://www.linkedin.com/in/anca-diana/">Diana Neels</a>
              <br />
              Software Engineer |&nbsp;
              <a href="https://www.credly.com/badges/5877441e-60d1-48d1-a52b-5eb33aae9454">
                AWS Certified
              </a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FooterComponent;
