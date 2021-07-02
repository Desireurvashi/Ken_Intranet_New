import * as React from 'react';
import styles from './Homepagewit.module.scss';
import { SPComponentLoader } from "@microsoft/sp-loader";
import { IHomepagewitProps } from './IHomepagewitProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Swiper } from 'swiper';
import SwiperCore, {
  Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);
export default class Homepagewit extends React.Component<IHomepagewitProps, {}> {

  public render(): React.ReactElement<IHomepagewitProps> {

    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css");
    require("./assets/css/animate.min.css");
    require("./assets/css/responsive.css");
    require("./assets/css/select2.min.css");
    require("./assets/css/style.css");
    //require("./assets/css/swiper-bundle.min.css");
    SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js').then(() => {
      SPComponentLoader.loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js").then(() => {

        SPComponentLoader.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js")

        require("./assets/js/main.js");
        require("./assets/js/popper.min.js");
        require("./assets/js/select2.min.js");
        require("./assets/js/TweenMax.min.js");
      });
    });

    return (
      <div className={styles.homepagewit}>
        <div className="header-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-8 col-md-5">
                <div className="header-area__left">
                  <div className="header-logo">
                    <a href="home.html">
                      <img className="light" src={require("./assets/img/logo.jpg")} alt="Wit" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-4 col-md-7 text-right d-xs-none">
                <div className="header-area__right">
                  <div className="header-menu-right">
                    <ul>

                      <li className='about-wit'>
                        <a href="welcome-message.html">About WIT</a>
                        <ul>

                          <li>
                            <a href="welcome-message.html">Welcome Message</a>
                          </li>

                          <li>
                            <a href="get-to-know-wit.html">Get to know WIT</a>
                          </li>

                          <li>
                            <a href="wit-committee.html">WIT Committee</a>
                          </li>

                        </ul>
                      </li>

                      <li className='startup-wit'>
                        <a href="how-could-wit-benefit-you.html">Startup WIT</a>
                        <ul>

                          <li>
                            <a href="how-could-wit-benefit-you.html">How WIT benefits you?</a>
                          </li>

                          <li>
                            <a href="form-your-wit.html">Form your WIT</a>
                          </li>

                          <li>
                            <a href="apply-now.html">Register Now</a>
                          </li>

                        </ul>
                      </li>

                      <li className='meet-our-teams'>
                        <a href="meet-wit-members.html">Meet Our Teams</a>
                        <ul>

                          <li>
                            <a href="meet-wit-members.html">Meet WIT Members</a>
                          </li>

                          <li>
                            <a href="winning-projects.html">Winning Projects</a>
                          </li>

                          <li>
                            <a href="show-time.html">Show Time!</a>
                          </li>

                        </ul>
                      </li>

                      <li className='events-news'>
                        <a href="joyful-moments.html">Events &amp; News</a>
                        <ul>

                          <li>
                            <a href="joyful-moments.html">Joyful Moments</a>
                          </li>

                          <li>
                            <a href="wit-news.html">WIT News</a>
                          </li>

                          <li>
                            <a href="knowledge-corner.html">Knowledge Corner</a>
                          </li>

                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-4 text-right d-pc-none d-xs-block">
                <button type="button" className="header-menu-button">
                  <span className="header-menu-bar-icon">
                    <img src={require("./assets/img/icon/icon-bars.png")} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fullwidth-menu-area">
          <button type="button" className="header-menu-close-button">
            <span className="header-menu-close-icon">
              <img src={require("./assets/img/icon/icon-close.png")} alt="" />
            </span>
          </button>
          <div className="fullwidth-menu-list-area">

            <div className="fullwidth-menu-list-group">
              <h3>
                <a href="welcome-message.html">About WIT</a>
              </h3>
              <div className="fullwidth-menu-list">
                <ul>

                  <li>
                    <a href="welcome-message.html">Welcome Message</a>
                  </li>

                  <li>
                    <a href="get-to-know-wit.html">Get to know WIT</a>
                  </li>

                  <li>
                    <a href="wit-committee.html">WIT Committee</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className="fullwidth-menu-list-group">
              <h3>
                <a href="how-could-wit-benefit-you.html">Startup WIT</a>
              </h3>
              <div className="fullwidth-menu-list">
                <ul>

                  <li>
                    <a href="how-could-wit-benefit-you.html">How WIT benefits you?</a>
                  </li>

                  <li>
                    <a href="form-your-wit.html">Form your WIT</a>
                  </li>

                  <li>
                    <a href="apply-now.html">Register Now</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className="fullwidth-menu-list-group">
              <h3>
                <a href="meet-wit-members.html">Meet Our Teams</a>
              </h3>
              <div className="fullwidth-menu-list">
                <ul>

                  <li>
                    <a href="meet-wit-members.html">Meet WIT Members</a>
                  </li>

                  <li>
                    <a href="winning-projects.html">Winning Projects</a>
                  </li>

                  <li>
                    <a href="show-time.html">Show Time!</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className="fullwidth-menu-list-group">
              <h3>
                <a href="joyful-moments.html">Events &amp; News</a>
              </h3>
              <div className="fullwidth-menu-list">
                <ul>

                  <li>
                    <a href="joyful-moments.html">Joyful Moments</a>
                  </li>

                  <li>
                    <a href="wit-news.html">WIT News</a>
                  </li>

                  <li>
                    <a href="knowledge-corner.html">Knowledge Corner</a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>



        <main className="main">
          <div className="main-content">


            <div className="hero-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero__slider-wrapper">
                      <div className="hero__slider swiper-container d-xs-none">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-1.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-2.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-3.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide d-xs-none">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-4.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide d-xs-none">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-5.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide d-xs-none">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/banner-6.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-buttons">
                          <div className="swiper-button-prev">
                            <img src={require("./assets/img/icon/icon-arrow-left.png")} alt="" />
                          </div>
                          <div className="swiper-button-next">
                            <img src={require("./assets/img/icon/icon-arrow-right.png")} alt="" />
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                      <div className="hero__slider d-pc-none d-xs-block swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/hero-image-1.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/hero-image-2.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="hero__single">
                              <div className="hero__image">
                                <img src={require("./assets/img/index/hero-image-3.jpg")} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="homepage-menu-box-area">
              <div className="container">
                <div className="row mp-0_5">



                  <div className="col-6 col-lg-3 about-wit">

                    <div className="homepage-menu-box__single">
                      <div className="homepage-menu-box__content">
                        <h1>About WIT</h1>
                        <h4>Introduction of WIT</h4>
                      </div>
                      <div className="homepage-menu-box__image">
                        <img src={require("./assets/img/index/feature-box_1.jpg")} alt="" />
                      </div>
                      <div className="homepage-menu-box__menus">
                        <ul>

                          <li>
                            <a href="welcome-message.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Welcome Message</span>
                            </a>
                          </li>

                          <li>
                            <a href="get-to-know-wit.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Get to know WIT</span>
                            </a>
                          </li>

                          <li>
                            <a href="wit-committee.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">WIT Committee</span>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-6 col-lg-3 startup-wit">

                    <div className="homepage-menu-box__single">
                      <div className="homepage-menu-box__content">
                        <h1>Startup WIT</h1>
                        <h4>Formation of a team</h4>
                      </div>
                      <div className="homepage-menu-box__image">
                        <img src={require("./assets/img/index/feature-box_2.jpg")} alt="" />
                      </div>
                      <div className="homepage-menu-box__menus">
                        <ul>

                          <li>
                            <a href="how-could-wit-benefit-you.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">How WIT benefits you?</span>
                            </a>
                          </li>

                          <li>
                            <a href="form-your-wit.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Form your WIT</span>
                            </a>
                          </li>

                          <li>
                            <a href="apply-now.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Register Now</span>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-6 col-lg-3 meet-our-teams">

                    <div className="homepage-menu-box__single">
                      <div className="homepage-menu-box__content">
                        <h1>Meet Our Teams</h1>
                        <h4>Introduction to WIT teams and awards</h4>
                      </div>
                      <div className="homepage-menu-box__image">
                        <img src={require("./assets/img/index/feature-box_3.jpg")} alt="" />
                      </div>
                      <div className="homepage-menu-box__menus">
                        <ul>

                          <li>
                            <a href="meet-wit-members.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Meet WIT Members</span>
                            </a>
                          </li>

                          <li>
                            <a href="winning-projects.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Winning Projects</span>
                            </a>
                          </li>

                          <li>
                            <a href="show-time.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Show Time!</span>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-6 col-lg-3 events-news">

                    <div className="homepage-menu-box__single">
                      <div className="homepage-menu-box__content">
                        <h1>Events &amp; News</h1>
                        <h4>WIT events and news</h4>
                      </div>
                      <div className="homepage-menu-box__image">
                        <img src={require("./assets/img/index/feature-box_4.jpg")} alt="" />
                      </div>
                      <div className="homepage-menu-box__menus">
                        <ul>

                          <li>
                            <a href="joyful-moments.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Joyful Moments</span>
                            </a>
                          </li>

                          <li>
                            <a href="wit-news.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">WIT News</span>
                            </a>
                          </li>

                          <li>
                            <a href="knowledge-corner.html">
                              <span className="icon">
                                <img src={require("./assets/img/icon/icon-flights.png")} alt="" />
                              </span>
                              <span className="text">Knowledge Corner</span>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>



          </div>

          <div className="footer-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-image-area">
                    <img src={require("./assets/img/footer.jpg")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright-text-area">
                    <div className="copyright-text">
                      Copyright 2019. Hong Kong International Airport. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>


        <button type="button" className="scroll-to-top">
          <img src={require("./assets/img/inner/back-to-top.png")} alt="" />

        </button>
      </div>


    );
  }
  componentDidMount() {

    new Swiper('.hero__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: '.hero__slider .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero__slider .swiper-button-next',
        prevEl: '.hero__slider .swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
     
    });

  }
}
