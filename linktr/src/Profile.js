const Profile = () => {
  const fullName = "Victor Nwimo";
  const slack = "VicWin13";

  return (
    <header>
      <div id="profile_img" className="images"></div>
      <p id="" className="name">
        {fullName}
      </p>
      <p id="slack" className="slack">
        {" "}
        {slack}
      </p>
    </header>
  );
};

export default Profile;
