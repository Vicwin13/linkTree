// import "./contact.css";

import Submit from "./Submit";

const Log = () => {
  let name = "";
  return (
    <form action="">
      <div className="contain">
        <div>
          <label htmlFor="first name">First name</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div>
          <label htmlFor="last name">Last name</label>
          <input type="text" placeholder="Enter your last name" />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="" placeholder="youremail@email.com" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
      </div>
      <div className="term">
        <input type="checkbox" name="" id="" />
        <label htmlFor="terms">
          You agree to providing your data to {name} who may contact you.
        </label>
      </div>
      <Submit />
    </form>
  );
};

export default Log;
