import userImg from "./EmmaWatson.webp";
import styles from "./UserCard.module.css";

function UserCard({
  user: { firstName, lastName, hashtag, tweets, following, followers },
}) {
  return (
    <>
      <article>
        <img src={userImg} alt="" />
        <div>
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{hashtag}</p>
        </div>
        <button>+</button>
        <div>
          <div>
            <p>Tweets</p>
            <p>{tweets}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default UserCard;
