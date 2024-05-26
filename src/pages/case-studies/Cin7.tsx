import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Cin7() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Cin7 Case Study</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Cin7.com</strong>
          <br />
          Helping 8,000+ businesses transact billions of dollars a month by
          helping them track and sell product inventory across multiple channels
          across the world.
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
              </p>
              <br />
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
              <li>
                Led the design of new features and products. Coded and PRed some
                of them. Resulted in a 50% velocity increase on anything
                involving frontend feature development.
              </li>
              <li>
                Projects resulted in XX% NPS gains, and a XX% YoY reduction in
                churn
              </li>

              <li>
                Successfully condensed 10+ different fragmented design systems
                into a single unified system on a 20+ year old codebase.
              </li>

              <li>
                Massively reduced friction throughout the platform. This
                included internal development and support experience, on top of
                the customer-facing UX. Led to a XX% YoY reduction in support
                ticket volumes
              </li>
            </ul>
          </div>
        </div>
        <section className="">
          <h2 className="main-heading">How I got involved</h2>
          <p className="main-text">
            I joined Cin7 as a Senior Product Designer in late 2020 after being
            shoulder tapped by an ex-colleague who was running the company at
            the time.
          </p>
          <p className="main-text">
            I did my homework before I joined, and I learned that the company
            was effectively a mini-ERP, that helped small businesses sell stuff
            everywhere simultaneously from retail outlets, to shopify stores and
            big box retailers like walmart. The company was an order of
            magnitude cheaper than traditional ERPs, and was one of the easiest
            ways that customers could set up EDI connections to big retailers
            that required it as part of the sales process.
          </p>
          <p className="main-text">
            I was the first designer to be hired in a long time, and the company
            was in a state of turbulent flux. The company was growing rapidly,
            and the product was growing erratically with it. I had a joined a
            company with significant technical debt, and a product that was
            starting to show immense levels of system fragmentation.{" "}
          </p>
          <p className="main-text">
            Think about it this way - product design at the time was owned by an
            dev team of 50 people. Zero designers were involved in the product
            or engineering process.
          </p>
          <p className="main-text">
            It resulted in a product platform that felt like it was held
            together by duct tape across the product platform.
          </p>
          <div className="main-image-container">
            <img
              src="/images/cin7/sitemap-2020.png"
              className="main-image-context"
            />
            <p className="main-image-context-text">
              A sitemap I put together when I first started that gives you a
              rough feel for the size of the system - this doesn't include the
              hundreds of integrations and other system configuration pages like
              Amazon Marketplace, or any of our internal tooling.
            </p>
          </div>
          <section className="">
            <h2 className="main-heading">Initial discovery</h2>

            <p className="main-text">
              Day one was a little wierd. Given that the company didn't know
              what to do with a designer, I was assigned an absurdly overpowered
              developer laptop with an hour of battery life, and just told to go
              fix things. Instead, I decided to try and do some design
              discovery:{" "}
            </p>
            <p className="main-text">
              - I spent a lot of time just listening to staff and customers.{" "}
            </p>
            <p className="main-text">
              - Observing how the team worked. Learning about what internal and
              external processes looked like.{" "}
            </p>

            <p className="main-text">
              - How they triaged critical bugs and angry customers when the
              system shat itself.
            </p>
            <p className="main-text">
              - How they prioritised new initiatives against existing fires.
            </p>
            <p className="main-text">
              Seemed like almost all the engineering capacity was devoted to
              bugs and maintaining existing integrations with zero time for
              polish. To be fair, I think it was the right call - certain bugs
              meant that customers lost money, and in some cases, massive
              amounts.
            </p>

            <p className="main-text">
              But at the same time, I rapidly discovered that I was in a low
              design maturity organisation. For those that don't understand the
              concept of design maturity - it means that design as a discipline
              isnt really leveraged in the product development process to get
              better results.
            </p>
          </section>
          <div className="main-image-container">
            <img src="/images/cin7/pos.png" className="main-image-context" />
            <p className="main-image-context-text">
              A screenshot of our point of sale webapp in 2020 - product design
              was kind of an afterthought at the time and it showed. We would
              even advertise upsells to customers that were already on the
              highest tier of our product. This advertising was one of the first
              things I got rid of upon getting access to the codebase.
            </p>
          </div>
          <h2 className="main-heading">Getting crushed by tech debt</h2>
          <p className="main-text">
            I jumped into the work headfirst, and supported my team on every
            feature and bugfix I could get my hands on. and rapidly discovered a
            rats nest of problems.
          </p>
          <p className="main-text">
            {" "}
            The code was 20+ years old. I'm talking multiple different versions
            of react, angular, and ASP.Net codebases smoooshed into a single
            app. The top navigation component was a separate react app to the
            current page. Likewise with the sidebar navigation. All of this was
            wrapped in an ASP.Net application running on an ancient .NET
            Framework backend.
          </p>{" "}
          <div className="main-image-container">
            <img src="/images/cin7/users.png" className="main-image-context" />
            <p className="main-image-context-text">
              Notice the fragmentation yet? Depending on the developer and
              product manager working on it, navigation and primary buttons
              within the app could be any of 50 different implementations.
            </p>
          </div>
          <p className="main-text">
            The application was difficult to design for; a quick look in both
            the codebase and browser inspector told me that almost every
            component had 50 different visually-different implementations across
            the hundreds of pages on the platform. Thats before you get into the
            fact that every component and page was written as nested{" "}
            <code>{`<table>`}</code> elements 20 tables deep with hardcoded
            explicit dimensions. Even the buttons you see below were nested{" "}
            <code>{`<table>`}</code> elements.
          </p>
          <p className="main-text">
            This was exacerbated by the fact that we didnt have any designers
            before I joined; every product manager was responsible for design on
            each of the products/module they looked after - this resulted in
            immense experience fragmentation both in user flows, component
            libraries and product norms. This meant that every feature
            effectively felt like a different product you had to relearn how to
            use every time you changed page.
          </p>
          <p className="main-text">
            It was horrific for usability and onboarding and the numbers showed
            it.
          </p>
          <img src="/images/cin7/CRM.png" className="main-image" />
          <img src="/images/cin7/appstore.png" className="main-image" />
          <h2 className="main-heading">
            Responding with a technical frontline approach
          </h2>
          <p className="main-text">
            In response to this, the first thing I proposed was a consolidation;
            impossible to tackle piecemeal - four designers before me had tried
            to do it module by module and failed miserably resulting in ven more
            experience fragmentation. I proposed a complete overhaul of the
            design system, and a partial re-architecture of the front end to
            simplify the experience.
          </p>
          <p className="main-text">
            To get stakeholder buy in across product, management, and
            engineering I put together a high level sitemap of the system with
            figma which you can see above, and then mapped out the current state
            of the platform.
          </p>
          <p className="main-text">
            I then did some rapid prototyping in our dev environment over a day
            and a half by using CSS editor chrome extensions. I would've used
            Figma, but the fact that this product was so data entry heavy meant
            that I had to build a lot of the interactions in code to get a feel
            for how the system would work. It also meant that I could do rapid
            usability testing without spending too much time building out the
            interactions in figma.
          </p>
          <div className="main-image-container">
            <img
              src="/images/cin7/css-editor.png"
              className="main-image-context"
            />
            <p className="main-image-context-text">
              An example of how I rapidly prototyped using CSS editor extensions
              - a lot of this hinged on knowledge of CSS specificity and how the
              box model behaved in the DOM.
            </p>
          </div>
          <p className="main-text">
            {" "}
            This approach quickly and cheaply proved my hypothesis that we could
            make easy wins with css, at the cost of minimal additional tech
            debt. It also meant that we could cycle through iterations in
            minutes, instead of spending weeks building out text input
            prototypes in figma that were incapable of emulating large amounts
            of data entry.
          </p>
          <p className="main-text">
            The prototype was a hit with management, and I was given the go
            ahead to start working on the design system rebuild on the codebase
            as a product designer, which was hosted on Azure DevOps at the time.
          </p>
          <p className="main-text">
            A lot of the work after this included negotiating with engineering
            teams to get the design system into place without paying off the
            technical debt ie: cutting our losses on difficult edge cases that
            would've taken months to rebuild.{" "}
          </p>
          <p className="main-text">
            One particularly egregious example included templated pages that
            were built in a way that made them impossible to redesign without a
            complete rebuild. I'm talking about webpages consisting of custom
            custoemr-defined HTML/CSS/JS and SQL queries mashed together that
            were stored as string literals in the database. Many ungodly
            technical sins were committed. Some by me, some by my team to get us
            to production.
          </p>
          <p className="main-text">
            I then set about building out a really basic Figma design system in
            tandem, which included a component library, and a set of design
            guidelines that would help us standardise the experience across the
            platform so that the rest of my team could fast follow.
          </p>
          <div className="main-image-container">
            <img
              src="/images/cin7/ds-modal.png"
              className="main-image-context"
            />
            <p className="main-image-context-text">
              A snippet from the 🍩 Donut design system showing how to use
              components to build functionality
            </p>
          </div>
          <p className="main-text">
            It took about two weeks to get 80% of the design system into place
            in a development environment. Maybe about a month after that to get
            the polish and a lot of responsive behaviors working across pages.{" "}
            <code>overflow-x: scroll</code>&nbsp;was my best friend when it came
            to many of the complex table components.{" "}
          </p>
          <p className="main-text">
            <code>position: sticky</code> solved a lot of existing problems for
            support staff who had to constantly tell users to click the save
            button. and reduced a lot of friction on the platform when I made
            save buttons persistent on the page for users and staff.
          </p>
          <div className="main-image-container">
            <img
              src="/images/cin7/save-bar.png"
              className="main-image-context"
            />
            <p className="main-image-context-text">
              One of the biggest impact wins on support ticket volumes was a
              single sticky save bar. It that ensured users saved their config
              changes. Turns out when you put a save button at the bottom of a
              gigantic form, users tend not to click it and blame the system for
              not saving their work.
            </p>
          </div>
          <p className="main-text">
            To get it to production, we undertook a big bang approach to
            releasing the update. That meant every module on the platform got
            updated at once. It was a risky move, but it paid off. I had a lot
            of support from the engineering team, and we were able to get the
            update out in a week.
          </p>
        </section>

        <section>
          <h2 className="main-heading">Impact</h2>
          <p className="main-text">It worked.</p>
          <p className="main-text">
            I can't publicly provide specifics, but loosely..
          </p>
          <p className="main-text">
            - Customer NPS spiked upwards XX% after the rebuild.
          </p>

          <p className="main-text">
            - Support ticket volumes were down XX% YoY.
          </p>
          <p className="main-text">- Churn was down XX% YoY.</p>
          <p className="main-text">
            {" "}
            We made more money and most customers were happier.
          </p>
          <img src="/images/cin7/css.png" className="main-image" />
        </section>
        <section>
          <h2 className="main-heading">Solidifying the system</h2>
          <p className="main-text">
            {" "}
            So after celebrating the successful launch of the system redesign, I
            got to work documenting all the new system norms.
          </p>
          <p className="main-text">
            On the problem validation side of the spectrum - introducing design
            thinking and concepts like rapid prototyping as a norm instead of an
            erratic design theatre. Product was mostly involved on the problem
            validation side - We would collaborate on user needs and functional
            requirements at this step before deciding on bets.
          </p>
          <p className="main-text">
            {" "}
            On the solution validation side of the work: I as few primary
            actions on a page as possible, consistent spacing between
            components, and consistent components like buttons, cards, and
            inputs across the platform. It was an end to the experience
            fragmentation that had plagued the platform for years. I did most of
            this in figma, and then propagated it to storybook - you can see me
            give a talk about it{" "}
            <a href="https://youtu.be/6R1INqvrJaM?t=2669" target="_blank">
              here at a meetup in 2021.
            </a>
          </p>

          <div className="main-image-container">
            <img src="/images/cin7/ds3.png" className="main-image-context" />
            <p className="main-image-context-text">
              High level design principles were taken from JJGs Elements of UX
              Design Model - I've found it to work absurdly well.
            </p>
          </div>
          <div className="main-image-container">
            <img src="/images/cin7/ds1.png" className="main-image-context" />
            <p className="main-image-context-text">
              An example of design system guidance - spacing and padding on
              modals
            </p>
          </div>
          <div className="main-image-container">
            <img src="/images/cin7/ds2.png" className="main-image-context" />
            <p className="main-image-context-text">
              A snippet of the figma component library
            </p>
          </div>
        </section>
        <section>
          <h2 className="main-heading">Methodologies </h2>
          <p className="main-text">I was a big fan of</p>
        </section>

        <section>
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
