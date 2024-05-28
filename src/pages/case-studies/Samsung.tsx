import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Samsung() {
  console.log("TLDR for the developers reading this");
  console.log(
    "I earned the respect of my team by YOLOing 100K+ LOCs to fix the platform UI by doing allnighters over a week and it worked. Made us a whole heap of money. I'm still not sure how I did it tbh. Just a stupid amount of hours and a lot of luck."
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Samsung Electronics NZ</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Samsung Electronics NZ</strong>
          <br />
          Increasing NZ traffic 64%, by redesigning existing workflows and
          partnerships
        </h1>
        <img src="/images/projects/samsung.png" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Samsung Electronics NZ is the New Zealand outpost of the Korean
                electronics giant. They sell a wide range of consumer
                electronics, including smartphones, tablets, wearables, TVs, and
                home appliances. They also have a B2B division that sells
                commercial displays, digital signage, and other business
                solutions.
                <br /> <br />I overhauled design at the NZ branch by making
                design processes more efficient and impactful.{" "}
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>UX Consultant (Nov 2020 - Sep 2022) </p>{" "}
            </div>
            <br />
            <div>
              <h3>Categories</h3>{" "}
              <div className="category-container">
                <div className="category-tag">Web </div>
                <div className="category-tag">UX Research </div>
                <div className="category-tag">Product Design</div>
                <div className="category-tag">Web Development</div>
                <div className="category-tag">HTML</div>
                <div className="category-tag">CSS</div>

                <div className="category-tag">Design Systems </div>

                <div className="category-tag">B2B2C </div>
                <div className="category-tag">eCommerce </div>
                <div className="category-tag">Web Accessibility </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Challenge</h2>
            <ul>
              <li>
                Multiple product launches a month. Every retailer want
                deliverables in different formats. This takes up execution time
              </li>
              <li>Zero semantic markup on web presence - all just images</li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                Designed then developed a new marketing design system / template
                library that was easy to use and maintain for the team
              </li>
              <li>
                New system resulted in a 64% increase in traffic to redesigned
                properties and a subsequent increase in sales.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Samsung;
