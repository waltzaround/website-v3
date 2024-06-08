import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../components/case.css";
import { useEffect } from "react";
function Cin7() {
  console.log("TLDR for the developers reading this");
  console.log(
    "I earned the respect of my team by YOLOing 100K+ LOCs to fix the platform UI by doing allnighters over a week and it worked. Made us a whole heap of money. I'm still not sure how I did it tbh. Just a stupid amount of hours and a lot of luck."
  );

  console.log(
    "I dont think anyone will believe bm if i put down a week in the case study, but its verifiable in git if you dig a bit deeper"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Cin7</title>
        <meta
          name="description"
          content=" Helping 8,000+ businesses transact over $2 billion US dollars a month,
          by making it easier to track inventory and sell products across
          multiple channels simultaneously across the world."
        />
        <meta
          name="keywords"
          content="Cin7, inventory management, stock tracking, sales tracking, retail channel, product design, senior product designer, UX research, design systems, Azure DevOps, React, Angular, jQuery, B2B, B2B2C, inventory management, warehouse management, eCommerce, EDI/3PL, Shopify, Amazon Marketplace, Xero, Quickbooks"
        />
        <meta property="og:title" content="Walter Lim - Cin7 " />
        <meta
          property="og:description"
          content="Helping 8,000+ businesses transact over $2 billion US dollars a month, by making it easier to track inventory and sell products across multiple channels simultaneously across the world."
        />
        <meta property="og:image" content="/images/projects/cin7.webp" />
        <meta name="twitter:title" content="Walter Lim - Cin7 " />
        <meta
          name="twitter:description"
          content="Helping 8,000+ businesses transact over $2 billion US dollars a month, by making it easier to track inventory and sell products across multiple channels simultaneously across the world."
        />
        <meta name="twitter:image" content="/images/projects/cin7.webp" />
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Cin7.com</strong>
          <br />
          Helping 8,000+ businesses transact over $2 billion US dollars a month,
          by making it easier to track inventory and sell products across
          multiple channels simultaneously across the world.
        </h1>
        <div className="main-image-container">
          <img src="/images/projects/cin7.webp" className="story-hero" />
          <p className="main-image-context-text">
            {" "}
            A prototype dashboard I designed that tested well, but was cut due
            to a lack of engineering capacity
          </p>
        </div>

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Cin7 is an inventory management system that helps people sell
                physical products track stock, sales, and customers across every
                imaginable online and offline retail channel.
                <br /> <br />I spent almost two years leading product design
                there, proving the value of design to the company by delivering
                win after win.
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>Senior Product Designer (Nov 2020 - Sep 2022) </p>{" "}
            </div>
            <br />
            <div>
              <h3>Categories</h3>{" "}
              <div className="category-container">
                <div className="category-tag">Web / Android</div>
                <div className="category-tag">UX Research </div>
                <div className="category-tag">Product Design</div>
                <div className="category-tag">DesignOps </div>
                <div className="category-tag">Design Systems </div>
                <div className="category-tag">Azure DevOps </div>
                <div className="category-tag">React </div>
                <div className="category-tag">Angular</div>
                <div className="category-tag">jQuery </div>
                <div className="category-tag">B2B </div>
                <div className="category-tag">B2B2C </div>
                <div className="category-tag">Inventory Management </div>
                <div className="category-tag">Warehouse Management </div>
                <div className="category-tag">eCommerce </div>
                <div className="category-tag">EDI/3PL </div>
                <div className="category-tag">Shopify </div>
                <div className="category-tag">Amazon Marketplace </div>
                <div className="category-tag">Xero </div>
                <div className="category-tag">Quickbooks </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Challenges</h2>
            <ul>
              <li>
                A ridiculously large backlog already promised to customers.
                Unholy amounts of technical debt. Poor system usability.{" "}
              </li>
              <li>
                Single designer (me) serving a product and engineering team of
                50
              </li>
              <li>
                Massive design fragmentation: 8 different fonts in production,
                50 different primary buttons and multiple implementations of
                each
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                Led the design of new features and products. Coded and PRed some
                of them.
              </li>
              <li>
                Increased developer velocity 3X on anything involving frontend
                work.
              </li>
              <li>
                Projects led to XX% NPS gains, and a XX% YoY reduction in churn.
              </li>
              <li>
                Successfully condensed 10+ different fragmented design systems
                into a single unified system on a 20+ year old codebase.
              </li>

              <li>
                Reduced friction throughout the platform. This included internal
                development and support experience, on top of the
                customer-facing UX. Led to a XX% YoY reduction in support ticket
                volumes
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
            I did my homework before joining, and learned that the platform was
            effectively a mini-ERP. An ERP is software that helps businesses
            manage their operations and sell stuff everywhere simultaneously;
            from retail outlets that needed a{" "}
            <a
              href="https://www.investopedia.com/terms/p/point-of-sale.asp"
              target="_blank"
            >
              POS
            </a>
            , to <a href="https://www.shopify.com/">Shopify</a> stores and big
            retailers like Walmart and Amazon.{" "}
          </p>
          <p className="main-text">
            The software Cin7 offered was an order of magnitude cheaper
            than&nbsp;
            <a href="https://www.netsuite.com/portal/nz/home.shtml">
              traditional ERPs
            </a>
            , and was one of the easiest ways that customers could go digital
            and set up EDI connections to big retailers that required it as part
            of the sales process.{" "}
          </p>
          <p className="main-text">
            For context: if you sell products to enterprise companies like
            Nordstrom or Walmart, most of the time you are contractually
            required by your terms of trade agreement to use a standard called
            EDI to make transactions happen as part of your sales process.
          </p>
          <p className="main-text">
            I was the first designer to be hired in a long time, and the company
            was in a{" "}
            <a href="https://www.nzherald.co.nz/business/refugee-made-good-danny-ing-sells-majority-stake-in-his-software-company-cin7-for-more-than-100m/A2LLWXKAKH4KEOQQ37HQSTJAPI/">
              state of exciting flux
            </a>
            . As the company rapidly expanded, it encountered new obstacles in
            product development. At the time, It presented challenges like
            significant technical debt, and a platform that demonstrated immense
            levels of system fragmentation. More on this later.{" "}
          </p>
          <p className="main-text">
            Think about it this way - product design at the time was owned by an
            dev team of 50 people. Zero designers were involved in the product
            or engineering process. Challenge accepted.
          </p>
          <p className="main-text">
            This process came with a price. It resulted in a product platform
            that was held together by duct tape and effectively became a
            different product every time you switched modules ie: going from
            viewing products to customers
          </p>
          <div className="main-image-container">
            <img src="/images/cin7/system.png" className="main-image-context" />
            <p className="main-image-context-text">
              A visualisation showing a high level of key concepts and jobs to
              be done within the Cin7 platform - you could condense it into four
              segments: getting products, selling products, reporting on
              products, and sending products to customers.
            </p>
          </div>
          <section className="">
            <h2 className="main-heading">Initial discovery</h2>

            <p className="main-text">
              Day one was a little weird. The company didn't know what to do
              with a designer, let alone how to fully leverage one. This became
              my personal mission.{" "}
            </p>

            <p className="main-text">
              To accomplish this, I decided to try and do some design discovery
              by:{" "}
            </p>
            <p className="main-text">- Listening to staff and customers. </p>
            <p className="main-text">
              - Observing internal and external processes.{" "}
            </p>

            <p className="main-text">
              - Watching how critical bugs were triaged.
            </p>
            <p className="main-text">
              - Learning how new initiatives were prioritised against existing
              fires.
            </p>

            <p className="main-text">
              It seemed like almost all the engineering capacity was devoted to
              bugs and maintaining existing integrations with zero time for
              polish. To be fair, I think it was the right call - certain bugs
              meant that customers lost money, and in severe cases, six figures
              a day.{" "}
            </p>

            <p className="main-text">
              Challengingly, it meant that if I wanted anything done, I'd have
              to get my own hands dirty in the codebase.
            </p>

            <p className="main-text">
              At the same time, it rapidly became apparent that Cin7 was a low
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
          <h2 className="main-heading">
            A teamfight against 20+ years of tech debt
          </h2>
          <p className="main-text">
            I jumped into the work headfirst, supported my team on every feature
            and bugfix I could get my hands on, and discovered a rats nest of
            problems.
          </p>
          <p className="main-text">
            {" "}
            The code was 20+ years old. I'm talking multiple different versions
            of React/CRA, AngularJS, and ASP.Net codebases smoooshed into a
            single app. The top navigation component was a separate react app to
            the current page. Likewise with the sidebar navigation. All of this
            was wrapped in an ASP.Net application running on an ancient .NET
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
            <code>{`<table onclick="doStuff()">`}</code> elements.
          </p>
          <p className="main-text">
            This was exacerbated by the fact that we didnt have any designers
            before I joined; every product manager was responsible for design on
            each of the products/module they looked after - this resulted in
            immense experience fragmentation both in user flows, component
            libraries and product heuristics. This meant that every module and
            feature effectively felt like a different product you had to relearn
            how to use every time you changed page.
          </p>
          <p className="main-text">
            I can't publicly provide specifics, but it was detrimental for
            usability, especially when it came to new user onboarding and the
            numbers showed it.
          </p>
          <div className="main-image-container">
            <img
              src="/images/cin7/settings-2.png"
              className="main-image-context"
            />
            <p className="main-image-context-text">
              There were hundreds of pages like this, mostly to enable
              configuration to suit different business needs. This was a for a
              sales dashboard.
            </p>
          </div>
          <img src="/images/cin7/appstore.png" className="main-image" />
          <h2 className="main-heading">
            Triaging with a technical frontline approach
          </h2>
          <p className="main-text">
            In response to everything discovered above, the first thing I
            proposed was a consolidation of components into a single unified
            library and a partial re-architecture of the front end to simplify
            the experience. Deliverables in Figma for designers, and Storybook
            for developers.{" "}
          </p>
          <p className="main-text">
            {" "}
            This was impossible to tackle piecemeal - four designers before me
            had tried to do it module by module as conventional wisdom
            recommended. Every successive attempt failed, resulting in even more
            experience fragmentation.
          </p>
          <p className="main-text">
            To get stakeholder buy in across product, management, and
            engineering I put together a high level sitemap of the system with
            figma which you can see below, and then mapped out the current state
            of the platform.
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
              the one used to connect your business to Amazon Marketplace, or
              any of our internal tooling.
            </p>
          </div>
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
            make easy wins with CSS and basic semantic markup changes, at the
            cost of minimal additional tech debt. It also meant that we could
            cycle through iterations in minutes, instead of spending weeks
            building out text input prototypes in Figma that were incapable of
            emulating large amounts of data entry.
          </p>
          <p className="main-text">
            The prototype was a hit with management, and I was given the go
            ahead to start working on the frontend rebuild on the codebase as a
            product designer, which was hosted on Azure DevOps at the time.
          </p>
          <p className="main-text">
            A lot of the work after this included negotiating with engineering
            teams and getting mentored on how to write <code>.aspx</code> and{" "}
            <code>.ascx</code> up to an acceptable standard to get the design
            system into place while touching as little technical debt as
            possible ie: cutting our losses on difficult edge cases that
            would've taken months to rebuild.{" "}
          </p>
          <p className="main-text">
            One particularly egregious example included templated pages that
            were built in a way that made them impossible to redesign without a
            complete rebuild. I'm talking about webpages consisting of custom
            customer-defined <code>HTML/CSS/JS</code>, <code>C#</code> and{" "}
            <code>SQL</code> mashed together that were stored as string literals
            in the database. Many ungodly technical sins were committed. Some by
            me, and some by my team to get us to production.
          </p>
          <p className="main-text">
            I then set about building out a really basic design system in
            tandem, which included a Figma component library, a React storybook
            component library, and a set of design guidelines that would help us
            standardise the experience across the platform so that the rest of
            my team could fast follow.
          </p>
          <p className="main-text">
            This way, design and dev could be kept tightly in sync.
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
            to many of the complex table components, especially for making dense
            components responsive.{" "}
          </p>
          <p className="main-text">
            <code>position: sticky</code> solved a lot of existing problems for
            support staff who had to constantly tell users to click the save
            button. and reduced a lot of friction on the platform when I made
            save buttons persistent on the page for users and staff.
          </p>
          <p className="main-text">
            Most of the work also involved improving the developer experience by
            stripping out outdated components styled with nested{" "}
            <code>{`<table>`}</code> elements, <code>float</code>{" "}
            properties,&nbsp;
            <code>position: absolute;</code> abuse, and redundant overuse of{" "}
            <code>!important</code>.{" "}
          </p>
          <p className="main-text">
            {" "}
            Turns out, moving to a more modern approach where components are
            constructed with&nbsp;
            <code>display: flex;</code> and <code>display: grid;</code>{" "}
            significantly improves the frontend experience for developers and
            helps the whole team ship faster.
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
            releasing the update. That meant every touchpoint and module on the
            platform was updated at once when we deployed the design system
            update in production.
          </p>{" "}
          <p className="main-text">
            {" "}
            It was a risky move, but it paid off. I had a lot of support from
            the engineering team, and we were able to get the update out in a
            week.
          </p>
        </section>

        <section>
          <h2 className="main-heading">Impact</h2>
          <p className="main-text">It worked.</p>
          <p className="main-text">
            I can't publicly provide specifics, but loosely after the rebuild..
          </p>
          <p className="main-text">- Customer NPS spiked upwards XX%</p>
          <p className="main-text">
            - Frontend development velocity increased 3X
          </p>
          <p className="main-text">
            - Support ticket volumes were down XX% YoY.
          </p>
          <p className="main-text">- Churn was down XX% YoY.</p>
          <p className="main-text">
            {" "}
            Most customers were happier and we made more money.
          </p>
          <img src="/images/cin7/css.png" className="main-image" />
        </section>
        <section>
          <h2 className="main-heading">Earning design a seat at the table</h2>
          <p className="main-text">
            {" "}
            So after celebrating the successful launch of the system redesign, I
            got to work documenting all the new system norms.
          </p>
          <p className="main-text">
            On the problem validation side of the spectrum - I tried to
            normalise some parts of design thinking that I found useful. Our
            product team was mostly involved on the problem validation side - We
            would collaborate on research, user needs, and functional
            requirements at this step before deciding on bets.
          </p>
          <p className="main-text">
            On the solution validation side of the work: I set up a few design
            guidelines in the design system: Like rapidly prototyping with as
            few primary actions on a page as possible, setting consistent
            spacing between components, and normalising the use of consistent
            components like buttons, cards, and inputs across the platform.
          </p>
          <p className="main-text">
            Overall, we collectively purged the majority of the experience
            fragmentation that had plagued the platform for years. Once we had
            some breathing room, I documented most of this in Figma, and then
            propagated it to storybook - you can{" "}
            <a href="https://youtu.be/6R1INqvrJaM?t=2669" target="_blank">
              see me give a talk about it here at a meetup in 2021.
            </a>
          </p>
          <p className="main-text">
            This work paved the way for further investment into design as a
            discipline at the company. Design was leveraged across more projects
            to get more wins, and I was able to scale the design team to 3
            people before moving onto the next challenge.
          </p>

          <p className="main-text">
            I might write about more projects later on, but the 🍩 Donut Design
            System was one the most impactful ones I was about to pull off at
            Cin7.
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
