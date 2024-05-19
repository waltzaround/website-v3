import "../menu.css";


function Header() {
  return (
    <header className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-img" src="/images/walt.png" alt="aaa" />
        <p>
          The portfolio of <strong>Walter Lim</strong>
        </p>
      </a>
      <div className="nav-links">
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/media">Media</a>
        <a href="/contact">Contact</a>
      </div>
      <div id="menuToggle">
 
    <input type="checkbox" id="navtoggle"/>

    <span></span>
    <span></span>
    <span></span>
    
  
    <ul id="menu">
      
    <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-img" src="/images/walt.png" alt="aaa" />
        <p>
          The portfolio of <strong>Walter Lim</strong>
        </p>
      </a>
    <a href="/about"><li>About</li></a>
        <a href="/work"><li>Work</li></a>
        <a href="/media"><li>Media</li></a>
        <a href="/contact"><li>Contact</li></a>
    </ul>
  </div>
    </header>
  );
}

export default Header;
