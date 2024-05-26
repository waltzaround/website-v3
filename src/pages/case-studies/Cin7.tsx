import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Cin7() {
  return (
    <>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Cin7.com</strong>
          <br />
          Helping 8,000+ businesses transact billions of dollars
          by helping them track and sell (legal) guns,
          (legal) drugs, alcohol, peanut butter, and sex toys across the world, among other products.
        </h1>
        <img src="/images/projects/cin7.webp" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Cin7 is an inventory management system that helps people that
                sell physical products track stock, sales, and customers across
                every imaginable online and offline retail channel.
              </p><br/>
            </div>
            <div>
              <h2>Role</h2>
              <p>Senior Product Designer (Nov 2020 - Sep 2022) </p>{" "}
            </div>
          </div>
          <div className="card">
            <h2>Challenge</h2>
            <ul>
              <li>
                As a single designer, I was faced with a ridiculously large
                backlog of technical debt, and lots of usability issues.{" "}
              </li>
              <li>
                Asked to deliver value as a single designer when paired with 50
                engineers, and 8 product managers.
              </li>
              <li>
                Massive design fragmentation. 8 different fonts in production,
                50 different primary buttons and multiple implementations of
                each
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>Led the design of new features and products.</li>
              <li>Coded new features and improvements on the platform.</li>

              <li>
                Introduced new ways of working and systems that helped us track
                impact
              </li>

              <li>
                Successfully condensed 10 different fragmented design systems into a single unified
                system
              </li>
              <li>
                Reduced churn by millions of dollars by implementing usability
                improvements for users.
              </li>
              <li>
                Massively reduced friction throughout the platform. This
                included internal development and support experience, on top of
                the UX.
              </li>
            </ul>
          </div>
        </div>
        <section className="">
          <h2 className="main-heading">How I got involved</h2>
          <p className="main-text">
            I joined Cin7 as a Senior Product Designer in 2019 after being
            shoulder tapped by an ex-colleague who was running the company at
            the time.
          </p>
          <p className="main-text">
            I was the first designer to be hired in a long time, and the company
            was in a state of turbulent flux. The company was growing rapidly,
            and the product was growing erratically with it. I had a joined a
            company with significant technical debt, and a product that was
            starting to show immense levels of system fragmentation.     </p>
          <p className="main-text">Think about
            it this way - product design at the time was owned by an dev
            team of 50 people. Zero designers were involved in the product or engineering process. 
          </p>
      
         
       
          <p className="main-text">
            It resulted in a product platform that felt like it was held
            together by duct tape across the product platform. 
          </p>
          <img src="/images/cin7/sitemap-2020.png" className="story-hero" />

        

        <section className="">
        <h2 className="main-heading">First impressions</h2>

        <p className="main-text">
       Day one was a little wierd. I was assigned an absurdly overpowered developer laptop, and just told to go fix things. Instead, I decided to try and do some design discovery: </p>
        <p className="main-text">
            I spent a lot of time just listening to staff and customers when I started.   </p>
            <p className="main-text">
           Watching how the team worked. Observing what internal and external processes looked like.   </p>
          

        <p className="main-text">
      How they triaged critical bugs and angry customers when the system shat itself.</p>
      <p className="main-text">
      How they prioritised new initiatives against existing fires.</p>
      <p className="main-text">
      
    Seemed like almost all the engineering capacity was devoted to bugs and maintaining existing integrations with zero time for polish. To be fair, I think it was the right call - certain bugs meant that customers lost money, and in some cases, massive amounts.</p>

    <p className="main-text">
    But at the same time, I rapidly discovered that I was in a low design maturity organisation. For those that don't understand the concept of design maturity - it means that design as a discipline isnt really leveraged in the product development process to get better results.</p>
          </section>
          <img src="/images/cin7/pos.png" className="story-hero" />

        <h2 className="main-heading">Initial Discovery</h2>
        <p className="main-text">
       I jumped into the work headfirst, and supported my team on every feature and bugfix I could get my hands on. and rapidly discovered a rats nest of problems.</p>
       <p className="main-text"> The code was 20+ years old. I'm talking multiple different versions of react, angular, and ASP.Net codebases smoooshed into a single app. The top navigation component was a separate react app to the current page. Likewise with the sidebar navigation. All of this was wrapped in an ASP.Net application running on an ancient .NET Framework backend.</p>    <img src="/images/cin7/users.png" className="story-hero" />

       <p className="main-text">
       The application was difficult to design for; a quick look in both the codebase and  browser inspector told me that almost every component had 50 different visually-different implementations across the hundreds of pages on the platform. Thats before you get into the fact that every component and page was written as nested <code>{`<table>`}</code> elements 20 tables deep with hardcoded explicit dimensions. Even the buttons were <code>{`<table>`}</code> elements.
       </p>
       <img src="/images/cin7/CRM.png" className="story-hero" />
        

      <p className="main-text">
        
       
       
       This was exacerbated by the fact that we didnt have any designers before I joined; every product manager was responsible for design on each of the products/module they looked after - this resulted in immense design fragmentation both in user flows, component libraries and product norms. </p>
       <img src="/images/cin7/appstore.png" className="story-hero" />
       <h3>Initiative 1: Simplify the experience</h3>
       <p className="main-text">
        In response to this, the first thing I proposed was a consolidation;

        impossible to tackle piecemeal - four designers before me had tried to do it module by module and failed miserably. I proposed a complete overhaul of the design system, and a partial re-architecture of the front end to simplify the experience.
       </p>
       <p className="main-text">
        To get stakeholder buy in across product, management, and engineering 
        
       I put together a high level sitemap of the system with figma, and mapped out the current state of of the platform.
       </p>
       <p className="main-text">
        I then did some rapid prototyping in our dev environment by using CSS chrome extensions. 
       
        I would've used figma, but the fact that this product was so data entry heavy meant that I had to build a lot of the interactions in code to get a feel for how the system would work.
        

       </p>
       <img src="/images/cin7/css.png" className="story-hero" />
       
       <p className="main-text">
        compromising with engineering to get the design system into place without paying off the technical debt

       </p>
       
</section><section>
{/* 
          <section>  <p className="main-text">
           I can probably break down my impact at Cin7 into
            four areas:
          </p>
          <div>
            <p>Developer experience</p>
            <p>Design experience</p>
            <p>Support experience</p>

            <p>Product experience</p>
          </div>
        </section> */}
</section>
      </section>
      <Footer />
    </>
  );
}
export default Cin7;
