import "./style.css";

const SocialMedia = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          className="fs-4 nav-link text-muted px-2"
          href="https://www.facebook.com/StarWars"
          target="_blank"
          title="facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="fs-4 nav-link text-muted px-2"
          href="https://www.instagram.com/starwars/"
          target="_blank"
          title="instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="fs-4 nav-link text-muted px-2"
          href="https://twitter.com/starwars"
          target="_blank"
          title="twitter"
        >
          <i className="bi bi-twitter"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="fs-4 nav-link text-muted px-2"
          href="https://www.youtube.com/user/starwars"
          target="_blank"
          title="youtube"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
