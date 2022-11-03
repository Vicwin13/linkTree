import { Link, Routes } from "react-router-dom";

function Buttons() {
  return (
    <main>
      {" "}
      <a
        id="twitter"
        href="https://twitter.com/VictorWinner13"
        target="_blank"
        rel="noreferrer">
        Twitter Link
      </a>
      <a id="btn__zuri" href="https://training.zuri.team">
        Zuri Team
      </a>
      <a
        id="books"
        href="https://books.zuri.team"
        title="Basic Coding 1.0; Where I find books on the fundamentals of coding">
        Zuri Books
      </a>
      <a
        id="book__python"
        href="https://books.zuri.team/pyton-for-beginners?ref_id=VicWin13">
        Python Books
      </a>
      <a
        id="pitch"
        href="https://background.zuri.team"
        title="Having trouble hiring? We've got you covered">
        Background Check for Coders
      </a>
      <a id="book__design" href="https://books.zuri.team/design-rules">
        Design Books
      </a>
      <Link to="/contact">Contact Me</Link>
    </main>
  );
}

export default Buttons;
