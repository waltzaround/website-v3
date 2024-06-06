import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../components/case.css";
import { useEffect } from "react";
function Maths() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Quick Maths</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Quick Maths</strong>
          <br />
          Multiplayer educational math game built in 48 hours
        </h1>
        <video
          src="/images/crap/quickmafs.png"
          className="story-hero"
          autoPlay
          muted
          playsInline
        />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Multiplayer math game built in 48 hours for the 2020 Kiwijam
                Game Jam.
              </p>
              <br />
            </div>

            <br />
            <div>
              <h3>Categories</h3>{" "}
              <div className="category-container">
                <div className="category-tag">Web </div>

                <div className="category-tag">Product Design</div>
                <div className="category-tag">Web Development</div>
                <div className="category-tag">Hackathon</div>
                <div className="category-tag">Canvas</div>

                <div className="category-tag">Multiplayer UX</div>
              </div>
            </div>
          </div>
        </div>
        <section className="">aaaa</section>
        <section className="">
          <h2 className="main-heading">Impact</h2>
          <p className="main-text">AAAAAAAA</p>

          <p className="main-text">-AAAA</p>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Maths;
