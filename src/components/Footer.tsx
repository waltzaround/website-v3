function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h3 className="footer-heading">Walt.online</h3>
      <div className="footer-cols">
        <div className="footer-cols-items">
          <h4>Social:</h4>
          <a>Discord</a>
          <a>LinkedIn</a>
          <a>Twitter</a>
          <a>Instagram</a>
        </div>
        <div className="footer-cols-items">
          <h4>Find more work on</h4>
          <a>Github</a>
          <a>YouTube</a>
          <a>itch.io</a>
          <a>Behance</a>
          <a>Dribbble</a>
        </div>
      </div>

      <p className="footer-end">© {currentYear} - All rights reserved</p>
    </footer>
  );
}

export default Footer;
