const Logos = () => {
  const logo1 = require("../images/slack-new-logo-icon-11609376883z32jbkf8kg.png");
  let logo2 = require("../images/iconmonstr-github-1-240.png");

  return (
    <section>
      <div className="logo">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" srcset="" />
      </div>
    </section>
  );
};

export default Logos;
