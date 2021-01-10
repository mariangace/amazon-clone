import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD5401._CB407881564_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="984830"
            title="Apple iPad, 10.2 pulgadas, Wi-Fi, último modelo, renovado, Wi-Fi, Dorado, 32 GB SSD"
            price={34.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61-kzqdinNL._AC_SY450_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="839493"
            title="Samsung LC24F390FHLXZX - Monitor Curvo, Negro (Black High Glossy), 23.5"
            price={199.9}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/911TGUbnayL._AC_SX425_.jpg"
            }
          />
          <Product
            id="34349"
            title="Echo Dot (3ra generación) - Bocina inteligente con Alexa, negro"
            price={29.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UL320_.jpg"
            }
          />
          <Product
            id="34349"
            title="Echo Dot (3ra generación) - Bocina inteligente con Alexa, negro"
            price={29.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UL320_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="9239483"
            title="SAMSUNG LS34J550WQLXZX Monitor, 34-Inch Screen, LED-Lit, 3440 x 1440, 21: 9, 0 USB, Hertz Hertz"
            price={40.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41zteqc96gL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
