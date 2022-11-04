const Profile = () => {
  const fullName = "Victor Nwimo";
  const slack = "VicWin13";
  const share1 = require("../images/Icon.png");
  const share2 = require("../images/Icon1.png");
  const photo = require("../images/Icon (2).png");

  return (
    <header>
      <div className="images">
        <div className="cover">
          <img
            id="profile__img"
            className="photo"
            src={photo}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <p id="" className="name">
        {fullName}
      </p>
      <p id="slack" className="slack">
        Slack Name
        {slack}
      </p>

      <div className="share">
        <img src={share1} alt="share button" />
        <img src={share2} alt="" />
      </div>
    </header>
  );
};

export default Profile;
