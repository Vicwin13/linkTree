import Submit from "./Submit";

const Log = () => {
  return (
    <form action="">
      <div className="names">
        <label htmlFor="First name">
          First name <br />
          <input type="text" placeholder="Enter your first name" />
        </label>
        <label htmlFor="First name">
          Last name <br />
          <input type="text" placeholder="Enter your last name" />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="email" className="email">
          Email <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="yourname@email.com"
          />
        </label>
      </div>
      <div className="message-container">
        <label htmlFor="message" className="message">
          Message <br />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </label>
      </div>
      <div className="terms">
        <input type="checkbox" name="" id="" />
        <label htmlFor="Terms">
          You agree to provide data to (name) who may contact you.
        </label>
      </div>
      <Submit />
    </form>
  );
};

export default Log;
