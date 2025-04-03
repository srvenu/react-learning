import profile from "./assets/profile.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profile} alt="Hii its an image"></img>
      <h2
        className="card-title
      "
      >
        Code Alchemist
      </h2>
      <p
        className="card-text
      "
      >
        I make Coding Youtube Video and Play Video Games
      </p>
    </div>
  );
}

export default Card;
