import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../components/case.css";
import { useEffect } from "react";
function Samsung() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Ubiquity</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Ubiquity Marketing Automation</strong>
          <br />
          Improving usability on a platform than handles billions of text
          messages, emails, and push notifications every year.
        </h1>
        <img src="/images/projects/ubiquity.png" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Ubiquity is a Marketing Automation Platform that helps business
                communicate with clients through bla bla bla bla <br />
                <br />I was a product designer in a design team of two while
                there.
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>
                Product Designer
                <br /> July 2017 → January 2019
              </p>{" "}
            </div>
            <br />
            <div>
              <h3>Categories</h3>{" "}
              <div className="category-container">
                <div className="category-tag">Web </div>
                <div className="category-tag">UX Research </div>
                <div className="category-tag">Product Design</div>
                <div className="category-tag">Web Development</div>
                <div className="category-tag">Marketing Automation</div>
                <div className="category-tag">TXTs</div>
                <div className="category-tag">Push Notifications</div>
                <div className="category-tag">Emails</div>
                <div className="category-tag">Design Systems </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Challenge</h2>
            <ul>
              <li>Legacy Systems built 20+ years ago</li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                Led the design of new features, and usability improvements.
              </li>
              <li>
                {" "}
                I implemented new processes, and worked on a new design system
                to improve a legacy platform in a product team of design, dev,
                test, and product humans.
              </li>
            </ul>
          </div>
        </div>
        <section className="">aaaa</section>
        <section className="">
          <h2 className="main-heading">Impact</h2>
          <p className="main-text">
            - Faster time to task completion rate for key jobs to be done on the
            platform
          </p>

          <p className="main-text">- Uptick in usability scoring</p>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Samsung;
