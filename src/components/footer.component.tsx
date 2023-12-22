const FooterComponent: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <hr />
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="title">Credits</p>
            <p className="heading">[course URL]</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">Author</p>
            <p className="heading">[linkedin URL]</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FooterComponent;
