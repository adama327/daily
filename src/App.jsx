import HomePage from "./pages/HomePage";
import './App.css'
import { SocialIcon } from 'react-social-icons';

function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1512fb21e1msh1752a8c542cf9d4p19cb7cjsn473274d93d8a',
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
    }
  };
  
  fetch('https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-markets?cur2=12&pair_ID=1057391&time_utc_offset=28800&lang_ID=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (

    <div>
      <header>
        <div>
        <iframe src="https://bit2me.com/widget/crypto-carousel/v1" title="ff" style={{display:"block",width:"100%",height:"40px"} }frameborder="0"></iframe>
        <iframe title="fhf" style={{width:"100%", border:"0", overflow:"hidden", backgroundColor:"transparent", height:"112.516px"}} scrolling="no" src="https://fortrader.org/en/informers/getInformer?st=31&cat=14&title=American%20Stock%20Market&texts=%7B%22toolTitle%22%3A%22Symbol%22%2C%22bid%22%3A%22Bid%22%7D&mult=0.91&showGetBtn=0&w=0&hideDiff=1&colors=titleTextColor%3Dfff%2CtitleBackgroundColor%3D167ac6%2CsymbolTextColor%3D167ac6%2CtableTextColor%3D454545%2CprofitTextColor%3D89bb50%2CprofitBackgroundColor%3Deaf7e1%2ClossTextColor%3Dff1616%2ClossBackgroundColor%3Df6e1e1%2CborderTdColor%3D167ac6%2CtableBorderColor%3D167ac6%2CtrBackgroundColor%3Df6f6f6%2CinformerLinkTextColor%3D5e5e5e%2CinformerLinkBackgroundColor%3Df6f6f6&items=126%2C25463%2C134%2C25462%2C25464%2C40%2C201%2C32%2C27%2C25524&columns="></iframe>
        </div>
        <div>
          <h2 id="title-head">Daily Currencies</h2>
        </div>
      </header>


      <main>
        <div>
        <div id="mySidenav" class="sidenav">
            <a href="#" id="blog"><i class="fa fa-envelope"></i> <h6 className="rsc">curency@gmail.com</h6></a>
            <a href="#" id="projects"><i class="fa fa-facebook-f"></i><h5 className="rsc">Daily currencies</h5></a>
            <a href="#" id="contact"><i class="fa fa-twitter"></i><h5 className="rsc">Daily-Currencies</h5></a>
          </div>
        </div>
         <HomePage/>
      </main>

<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://twitter.com/jaketrent" /></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://facebook.com/jaketrent" /></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://instagram.com/jaketrent" /></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://linkedin.com/jaketrent" /></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://pinterest.com/jaketrent" /></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><SocialIcon url="https://email.com/jaketrent" /></a>
    </section>

    <section className="">
      <form action="">

        <div className="row d-flex justify-content-center">

          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">

            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>



          <div className="col-auto">

            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>

        </div>

      </form>
    </section>

    <section className="mb-4">
      <p>
        Daily Currencies, get all informations that you need to start tranding or to exchange currencies in real-time
      </p>
    </section>

    <section className="">

      <div className="row">

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Crypto Currencies</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Bitcoin</a>
            </li>
            <li>
              <a href="#!" className="text-white">Etherium</a>
            </li>
            <li>
              <a href="#!" className="text-white">Ada</a>
            </li>
            <li>
              <a href="#!" className="text-white">Solana</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Stock Market</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Apple</a>
            </li>
            <li>
              <a href="#!" className="text-white">Netflix</a>
            </li>
            <li>
              <a href="#!" className="text-white">Amazon</a>
            </li>
            <li>
              <a href="#!" className="text-white">Tesla</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Exchange Currencies</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">MAD</a>
            </li>
            <li>
              <a href="#!" className="text-white">XOF</a>
            </li>
            <li>
              <a href="#!" className="text-white">MRU</a>
            </li>
            <li>
              <a href="#!" className="text-white">USD</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} >
    © 2022 Copyright:
    <a className="text-white" href="#">Daily Currencies</a>
  </div>
</footer>
    </div>

  );
}

export default App;
