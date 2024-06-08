import "../components/media.css";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Media() {
  useEffect(() => {
    // inspired by the stripe landing page

    window.scrollTo(0, 0);

    let c = document.getElementById("canv");
    let da = (c as HTMLCanvasElement)?.getContext("2d");

    let col = function (x: number, y: number, r: number, g: number, b: number) {
      if (da) {
        da.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        da.fillRect(x, y, 1, 1);
      }
    };
    let R = function (x: number, y: number, t: number) {
      return Math.floor(192 + 200 * Math.cos((x * x - y * y) / 300 + t));
    };

    let G = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          200 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    let B = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          200 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    let x, y;
    const run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.02; // adjust this to change seizure level
      window.requestAnimationFrame(run);
    };

    run();

    console.log("background running");
  }, []);

  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Media</title>
        <link rel="canonical" href="https://walt.online/media" />
        <meta
          name="description"
          content="This page showcases media appearances, talks, and other related content featuring Walter Lim or his work."
        />
        <meta
          name="keywords"
          content="media, talks, appearances, Walter Lim, work"
        />
        <meta name="author" content="Walter Lim" />
        <meta property="og:image" content="/images/walt.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.online" />
        <meta property="og:title" content="Walter Lim" />

        <meta
          property="og:image"
          content="https://walt.online/images/walt.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Walter Lim" />
        <meta
          property="twitter:description"
          content="Walter Lim is a cross-functional designer with 7+ years of experience based in Auckland, New Zealand. He's worked across a wide range of B2C, B2B, and B2B2C products across many different industries. He's been featured in both local and international media for his design work."
        />
        <meta property="twitter:image" content="/images/walt.png" />
      </Helmet>
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="safariHack">
        <Header />
        <section className="about">
          <h1>Media, Talks, and other stuff</h1>

          <div className="about-group">
            <h2 className="about-title">2023</h2>
            <div className="about-media-item">
              <a
                href="https://www.meetup.com/juniordev-auckland/events/297431487/"
                target="_blank"
                title="UX Auckland Playoffs"
              >
                <p>"How to better collaborate with designers" by Walter Lim</p>
              </a>
              <aside>December 2023 · Talk for Junior Dev Auckland Meetup</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.youtube.com/watch?v=SJ_NcIOBWEI"
                target="_blank"
                title="UX Auckland Playoffs"
              >
                <p>UX Auckland - UX eSports Battle</p>
              </a>
              <aside>June 2023 · YouTube Livestream</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2022</h2>
            <div className="about-media-item">
              <a
                href="https://tedxauckland.com/events/dec-2022-down-to-earth/"
                target="_blank"
                title="TEDxAuckland - How to Become a Civic Hacker (Recording Coming Soon)"
              >
                <p>
                  TEDxAuckland - How to Become a Civic Hacker (Recording Coming
                  Soon)
                </p>
              </a>
              <aside>December 2022 · TED Talk</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.theverge.com/2022/11/10/23451316/this-chrome-extension-tells-you-who-paid-for-twitters-blue-checkmark"
                title="The Verge - This Chrome extension tells you who paid for Twitter’s blue checkmark."
                target="_blank"
              >
                <p>
                  The Verge - This Chrome extension tells you who paid for
                  Twitter’s blue checkmark.
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.engadget.com/browser-extension-tells-you-who-paid-for-twitter-verification-012103388.html?src=rss"
                target="_blank"
                title="Engadget - This browser extension tells you who paid for Twitter verification"
              >
                <p>
                  Engadget - This browser extension tells you who paid for
                  Twitter verification
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>

            <div className="about-media-item">
              <a
                href="https://gizmodo.com/twitter-elon-musk-verified-impersonators-checkmark-1849768462"
                target="_blank"
                title="Gizmodo - Verified Impersonators Have Made a Mess Out of Twitter's $8 Blue Checkmarks"
              >
                <p>
                  Gizmodo - Verified Impersonators Have Made a Mess Out of
                  Twitter's $8 Blue Checkmarks
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.yahoo.com/lifestyle/browser-extension-tells-you-who-paid-for-twitter-verification-012103388.html"
                target="_blank"
                title="  Yahoo - This browser extension tells you who paid for Twitter verification"
              >
                <p>
                  Yahoo - This browser extension tells you who paid for Twitter
                  verification
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.pcgamer.com/after-three-days-of-april-fools-you-cant-pay-dollar8-to-impersonate-nintendo-on-twitter-anymore-at-least-for-now/"
                title="PC Gamer - After two days of April Fools', you can't pay $8 to impersonate Nintendo on
                            Twitter anymore (at least for now)"
                target="_blank"
              >
                <p>
                  PC Gamer - After two days of April Fools', you can't pay $8 to
                  impersonate Nintendo on Twitter anymore (at least for now)
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://gizmodo.com/twitter-elon-musk-verified-impersonators-checkmark-1849768462"
                target="_blank"
                title=" BGR - Use this Chrome extension to see who paid $8 for a blue checkmark on Twitter"
              >
                <p>
                  BGR - Use this Chrome extension to see who paid $8 for a blue
                  checkmark on Twitter
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.neowin.net/news/this-browser-extension-lets-you-see-who-paid-for-a-checkmark-on-twitter-and-who-is-legit/"
                target="_blank"
                title=" Neowin - This browser extension lets you see who paid for a checkmark on Twitter and who is
                            legit"
              >
                <p>
                  Neowin - This browser extension lets you see who paid for a
                  checkmark on Twitter and who is legit
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.xda-developers.com/eight-dollars-extension-twitter-verified/"
                target="_blank"
                title="   XDA Developers - Use this Chrome extension to see who paid $8 for a blue checkmark on
                            Twitter"
              >
                <p>
                  XDA Developers - Use this Chrome extension to see who paid $8
                  for a blue checkmark on Twitter
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.androidheadlines.com/2022/11/chrome-extension-who-paid-for-twitter-verification.html"
                target="_blank"
                title=" Android Headlines - Use this Chrome extension to see who paid $8 for a blue checkmark on
                            Twitter"
              >
                <p>
                  Android Headlines - Use this Chrome extension to see who paid
                  $8 for a blue checkmark on Twitter
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://thebit.nz/news/this-new-zealanders-chrome-plug-in-will-tell-you-which-twitter-users-have-more-money-than-sense/"
                target="_blank"
                title=" The Bit - This New Zealander’s Chrome plug-in will tell you which Twitter users have more money than sense"
              >
                <p>
                  The Bit - This New Zealander’s Chrome plug-in will tell you
                  which Twitter users have more money than sense
                </p>
              </a>
              <aside>November 2022 · Media</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2021</h2>
            <div className="about-media-item">
              <a
                href="https://www.parliament.nz/en/pb/order-paper-questions/written-questions/document/WQ_40023_2021/40023-2021-chris-bishop-to-the-minister-for-covid-19"
                target="_blank"
                title="New Zealand Parliament - Ministry of Health Collaboration "
              >
                <p>New Zealand Parliament - Ministry of Health Collaboration</p>
              </a>
              <aside>September 2021 · Government Record</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.youtube.com/watch?v=erZ6kTJTpmI"
                target="_blank"
                title="  The Project - Get Vaccinated"
              >
                <p>The Project - Get Vaccinated</p>
              </a>
              <aside>September 2021 · TV Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.stuff.co.nz/national/health/coronavirus/126293947/covid19-hackathon-creates-faster-way-to-find-a-covid19-vaccine-near-you"
                target="_blank"
                title="  Stuff - Covid-19: 'Hackathon' creates faster way to find a Covid-19 vaccine near you"
              >
                <p>
                  Stuff - Covid-19: 'Hackathon' creates faster way to find a
                  Covid-19 vaccine near you
                </p>
              </a>
              <aside>September 2021 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://news.aut.ac.nz/news/users-at-the-centre-of-new-vaxx.nz-site"
                target="_blank"
                title="  AUT - Users at the centre of new vaxx.nz site"
              >
                <p>AUT - Users at the centre of new vaxx.nz site</p>
              </a>
              <aside>September 2021 · Media</aside>
            </div>

            <div className="about-media-item">
              <a
                href="https://www.zmonline.com/the-latest/this-website-will-show-you-every-available-vaccination-slot-in-your-area-so-we-can-all-get-vaxxd/"
                target="_blank"
                title="  ZM Radio - This website will show you every available vaccination slot
                            in your area so we can all get vaxx'd"
              >
                <p>
                  ZM Radio - This website will show you every available
                  vaccination slot in your area so we can all get vaxx'd
                </p>
              </a>
              <aside>September 2021 · Radio Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://businessdesk.co.nz/article/news-in-brief/developers-build-better-vaccine-booking-website"
                target="_blank"
                title="      BusinessDesk - Developers build better vaccine booking website"
              >
                <p>
                  BusinessDesk - Developers build better vaccine booking website
                </p>
              </a>
              <aside>September 2021 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.1news.co.nz/2021/09/06/kiwi-friends-build-website-to-help-speed-up-vaccinations/"
                target="_blank"
                title="TVNZ / 1 News - Kiwi friends build website to help speed up vaccinations"
              >
                <p>
                  TVNZ / 1 News - Kiwi friends build website to help speed up
                  vaccinations
                </p>
              </a>
              <aside>September 2021 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.chineseherald.co.nz/news/new-zealand/vaxx-nz/"
                target="_blank"
                title="Chinese Herald - 按日期查询疫苗预订的网站上线！由Kiwi开发人员自行建立"
              >
                <p>
                  Chinese Herald -
                  按日期查询疫苗预订的网站上线！由Kiwi开发人员自行建立
                </p>
              </a>
              <aside>September 2021 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://youtu.be/6R1INqvrJaM?t=2669"
                target="_blank"
                title="Fintech Developers NZ Meetup - Keeping Design and Engineering aligned with Figma and Storybook"
              >
                <p>
                  Fintech Dev NZ Meetup - Keeping Design and Engineering aligned
                  with Figma and Storybook
                </p>
              </a>
              <aside>September 2021 · Meetup Talk</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2020</h2>
            <div className="about-media-item">
              <a
                href="https://www.summeroftech.co.nz/blog/student-resources/bootcamphighlights/bootcamp-highlights-web-101-by-walt-lim-and-william-seagar"
                target="_blank"
                title="Summer of Tech - Web 101 Workshop by Walter Lim and Will Seagar"
              >
                <p>
                  Bootcamp Highlights: Web 101 by Walter Lim and William Seagar
                </p>
              </a>
              <aside>September 2020 · Blog</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.youtube.com/watch?v=1MVBdPVubac"
                target="_blank"
                title="Summer of Tech - Web 101 Workshop by Walter Lim and Will Seagar"
              >
                <p>
                  Summer of Tech - Web 101 Workshop by Walter Lim and Will
                  Seagar
                </p>
              </a>
              <aside>August 2020 · Bootcamp Talk for Students</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://issuu.com/hurstcreative/docs/fyi_june_july_2020_issuu/s/10638500"
                target="_blank"
                title="            Business North Harbour - Start selling online... Swiftly!"
              >
                <p>Business North Harbour - Start selling online... Swiftly!</p>
              </a>
              <aside>June 2020 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://metronews.co.nz/article/free-online-storefront-could-save-small-businesses"
                target="_blank"
                title=" MetroNews - Small businesses able to sell online for free"
              >
                <p>MetroNews - Small businesses able to sell online for free</p>
              </a>
              <aside>April 2020 · Media</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2019</h2>
            <div className="about-media-item">
              <a
                href="https://www.spreaker.com/user/accessgrantednz/walt-andrew-voluntarily-industry-in-the-"
                target="_blank"
                title="  Access Granted Podcast - Walt & Andrew (Voluntarily) - Industry in the classNameroom"
              >
                <p>
                  Access Granted Podcast - Walt & Andrew (Voluntarily) -
                  Industry in the classNameroom
                </p>
              </a>
              <aside>June 2019 · Podcast</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.xero.com/blog/2019/10/bankengine-sandbox-shifting-the-dial-in-open-banking/"
                target="_blank"
                title="  BankEngine’s Sandbox: Shifting the dial in Open Banking"
              >
                <p>BankEngine’s Sandbox: Shifting the dial in Open Banking</p>
              </a>
              <aside>June 2019 · Xero Blog Post</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2016</h2>
            <div className="about-media-item">
              <a
                href="https://thebigidea.nz/events/207142-week-of-play-wonder-open-evening-the-idea-collective"
                target="_blank"
                title="    Digital Art Live - Emerging Pixels #6 - Matter VR Digital Art Installation"
              >
                <p>Week of Play & Wonder Open Evening @ The Idea Collective</p>
              </a>
              <aside>May 2016 · Media</aside>
            </div>
            <div className="about-media-item">
              <a
                href="https://www.youtube.com/watch?v=nsW664YYghU"
                target="_blank"
                title="    Digital Art Live - Emerging Pixels #6 - Matter VR Digital Art Installation"
              >
                <p>
                  Digital Art Live - Emerging Pixels #6 - Matter VR Digital Art
                  Installation
                </p>
              </a>
              <aside>April 2016 · Interview</aside>
            </div>
          </div>
          <div className="about-group">
            <h2 className="about-title">2015</h2>

            <div className="about-media-item">
              <a
                href="https://www.youtube.com/watch?v=e_trsJPnYIc"
                target="_blank"
                title="    Digital Art Live - Emerging Pixels #5 - Bender Digital Art Installation"
              >
                <p>
                  Digital Art Live - Emerging Pixels #5 - Bender Digital Art
                  Installation
                </p>
              </a>
              <aside>April 2015 · Interview</aside>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default Media;
