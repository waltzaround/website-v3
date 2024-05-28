function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h3 className="footer-heading">Walter Lim is a design meme</h3>
      <div className="footer-cols">
        <div className="footer-cols-items">
          <h4>Social:</h4>
          <a href="http://discordapp.com/users/waltzaround" title="discord">
            Discord
          </a>
          <a href="https://www.linkedin.com/in/waltzaround/" title="linkedin">
            Linkedin
          </a>
          <a href="https://twitter.com/iwaltzaround" title="twitter">
            Twitter
          </a>
        </div>
        <div className="footer-cols-items">
          <h4>Find more work on</h4>
          <a href="https://github.com/waltzaround" title="github">
            Github
          </a>
          <a
            href="https://www.youtube.com/channel/UCbSAF9R8VhlT29nh3-6mqmA"
            title="youtube"
          >
            YouTube
          </a>
          <a href="https://waltzaround.itch.io/" title="itch.io">
            itch.io
          </a>
          <a href="https://behance.net/waltzaround" title="behance">
            Behance
          </a>
          <a href="https://dribbble.com/waltzaround" title="dribbble">
            Dribbble
          </a>
        </div>
      </div>

      <p className="footer-end">
        © {currentYear} Walter Lim - All rights reserved{" "}
      </p>
    </footer>
  );
}

export default Footer;
