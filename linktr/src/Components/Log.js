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
      <label htmlFor="email" className="email">
        Email <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="yourname@email.com"
        />
      </label>
      <div>
        <label htmlFor="message" className="message">
          Message <br />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </label>
      </div>
    </form>
  );
};

export default Log;
