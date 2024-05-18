import { useEffect } from "react";



function App() {

  useEffect(() => { 
         // inspired by the stripe landing page
         
     
          var c = document.getElementById('canv');
          var da = (c as HTMLCanvasElement)?.getContext('2d');
     


        var col = function (x: number, y: number, r: number, g: number, b: number) {
          if (da) {
            da.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            da.fillRect(x, y, 1, 1);
          }
        }
         var R = function (x:number, y:number, t:number) {
            return (Math.floor(192 + 200 * Math.cos((x * x - y * y) / 300 + t)));
         }

         var G = function (x:number, y:number, t:number) {
            return (Math.floor(192 + 200 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
         }

         var B = function (x:number, y:number, t:number) {
            return (Math.floor(192 + 200 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
         }

         var t = 0;

        let x, y;
        var run = function () {
          for (x = 0; x <= 35; x++) {
            for (y = 0; y <= 35; y++) {
              col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
            }
          }
          t = t + 0.02; // adjust this to change seizure level
          window.requestAnimationFrame(run);
        }
     
     
     
        run();
   
        console.log('background running');
      }, []);
  return (
    <>
        <canvas id="canv" width="32" height="32"></canvas>
        <div className='safariHack'>
        <header className='main-nav'>
            <div className="main-nav-logo">
              <img className="main-nav-logo-img" src="https://placehold.co/64x64" alt="aaa"/><p><strong>Walter Lim's</strong> stuff lives here</p>
            </div>
            <div className="nav-links"><p>About</p><p>Work</p><p>Media</p><p>Contact</p></div>
          </header>

          <section className="hero-grid-2">
            <div className="hero-grid-2-text">
              <h1><strong>Walter Lim</strong> is a<br/>
Designer + UX Engineer</h1>
              
            </div>
            <div className="hero-grid-2-text">
              <p>Walter Lim is a cross-functional designer with 7+ years of experience based in Auckland, New Zealand. </p><p>

He's worked across a wide range of B2C, B2B, and B2B2C products across many different industries. He&apos;s been featured in both local and international media for his design work.
</p><p>
He currently leads product design at Infinity Studio, and occasionally volunteers his spare time designing and building silly things at haxx.nz

</p>
<h2 className="tag-heading">Current availability:</h2>
<div className="tag"><div className="tag-dot" />Oversubscribed &amp; Unavailable</div>

            </div>

          </section>
          <section className="testimonials">
            <p>My work has been featured in...</p>
          <div className="slide-track">
		<div className="slide">
			<img src="/media/01.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/02.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/03.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/04.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/05.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/06.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/07.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/08.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/09.png" height="100" width="250" alt="" />
		</div>
    <div className="slide">
			<img src="/media/01.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/02.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/03.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/04.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/05.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/06.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/07.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/08.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="/media/09.png" height="100" width="250" alt="" />
		</div>
	</div>
          </section>
          <section className="project-parent">
         <h2>aaaaaa</h2>
         </section>
        </div>
    </>
  );
}

export default App;
