import React, { useState, useRef } from "react";
import "./Home.css";
import ReactStars from "react-rating-stars-component";
import FAQ from "../../Components/Faq";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../../Redux/Actions/DoctorActions";
import { Link } from "react-router-dom";
const Home = () => {
  const specialtiesData = [
    {
      id: 1,
      name: "Back Massage",
      number: "55",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/3.png",
    },
    {
      id: 1,
      name: "Face Massage",
      number: "25",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/1.png",
    },
    {
      id: 1,
      name: "Skin Theraphy",
      number: "35",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/2.png",
    },
    {
      id: 2,
      name: "Hot stone",
      number: "55",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/4.png",
    },
    {
      id: 3,
      name: "Hair Treatment",
      number: "15",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/5.png",
    },
    {
      id: 4,
      name: "Facials",
      number: "55",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/6.png",
    },
    {
      id: 5,
      name: "Specialty 5",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png",
    },
    {
      id: 6,
      name: "Skin care",
      number: "25",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png",
    },
    {
      id: 7,
      name: "Back Massage",
      number: "55",
      image:
        "https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/4.png",
    },
  ];

  const allDoctors = useSelector((state) => state.allDoctors);
  const { error, loading, doctors } = allDoctors;

  console.log(doctors);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const containerRef = useRef(null);
  const containerRef1 = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 265;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 265;
  };

  const container2Ref = useRef(null);

  const scrollLeft1 = () => {
    containerRef1.current.scrollLeft -= 265;
  };

  const scrollRight1 = () => {
    containerRef1.current.scrollLeft += 265;
  };

  return (
    <>
      <section class="section home-banner row-middle">
        <div class="inner-bg"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-7">
              <div class="banner-content">
                <img
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/logospa.png"
                  class="img-fluid"
                  alt="Dream spa"
                />
                <h1>
                  SPA &amp; BEAUTY <span class="text-white">TREATMENTS</span>
                </h1>
                <p>Treat Yourself for Rejuvenating Your Body &amp; Soul</p>
                <a className="book-btn">Boook Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="section services">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-7 mx-auto">
              <div class="section-header text-center">
                <img
                  // width="59"
                  // height="44"
                  alt="Logo"
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/icon.png"
                />
                <h2 class="header-title">OUR BEST SERVICES</h2>
                <p class="header-subtitle">
                  Being the pampering connoisseurs that we are, we have
                  discovered some wonderful spa services
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-end">
              <div class="owl-nav mynav">
                <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-caret-left"></i>
                </button>
                <button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-caret-right"></i>
                </button>
              </div>
            </div>
            <div class="col-md-12">
              <div class="owl-carousel services-list owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    // style="transform: translate3d(-1361px, 0px, 0px); transition: all 0s ease 0s; width: 3540px;"
                  >
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/3.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Back massage</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/4.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hot Stone Theraphy</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/5.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hair Treatment</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/6.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Facials</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>SKIN CARE</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Couple Treatments</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>SKIN CARE</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Couple Treatments</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/1.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Face massage</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/2.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Cryo SKin Theraphy</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/3.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Back massage</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/4.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hot Stone Theraphy</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/5.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hair Treatment</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/6.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Facials</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>SKIN CARE</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Couple Treatments</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>SKIN CARE</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Couple Treatments</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/1.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Face massage</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/2.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Cryo SKin Theraphy</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/3.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Back massage</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/4.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hot Stone Theraphy</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/5.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Hair Treatment</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/6.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Facials</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 257.25px; margin-right: 15px;"
                    >
                      <div class="item">
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/7.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>SKIN CARE</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                        <div class="services-item">
                          <div class="img-part">
                            <img
                              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/8.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <div class="content-part">
                            <div class="content-text">
                              <h3>Couple Treatments</h3>
                              <h4 class="title">49 Theraphists</h4>
                            </div>
                          </div>
                          <div class="hover">
                            <div class="text booking-btn">
                              <a href="booking.html">Book now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <button role="button" class="owl-dot active">
                    <span></span>
                  </button>
                  <button role="button" class="owl-dot">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="see-all  text-center">
                <a href="search.html" class="btn btn-primary book-btn">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-5 specialites-wrapper">
        <div className="container">
          <div class="row">
            <div class="col-12 col-md-7 mx-auto">
              <div class="section-header text-center">
                <img
                  // width="59"
                  // height="44"
                  alt="Logo"
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/icon.png"
                />
                <h2 class="header-title">OUR BEST SERVICES</h2>
                <p class="header-subtitle">
                  Being the pampering connoisseurs that we are, we have
                  discovered some wonderful spa services
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-beetwen specialities-main">
            <div className="d-flex gap-1">
              <h2 className="mt-3">Services</h2>
              <svg
                width="66"
                height="34"
                viewBox="0 0 66 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_131_119702)">
                  <path
                    opacity="0.32"
                    d="M49.9999 32.8291V24.7091H41.8799V16.9091H49.9999V8.78906H57.7999V16.9091H65.9199V24.7091H57.7999V32.8291H49.9999Z"
                    fill="red"
                  />
                  <path
                    opacity="0.87"
                    d="M23.3303 33.44V22.15H12.0303V11.29H23.3303V0H34.1803V11.29H45.4703V22.15H34.1803V33.44H23.3303Z"
                    fill="red"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_131_119702">
                    <rect width="65.92" height="33.44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="d-flex gap-3 align-items-center speciality-arrow d-sm-flex d-none">
              <span className="material-symbols-outlined" onClick={scrollLeft}>
                chevron_left
              </span>
              <span className="material-symbols-outlined" onClick={scrollRight}>
                chevron_right
              </span>
            </div>
          </div>
          <div className="scrollable-container mt-5" ref={containerRef}>
            {/* 7 Divs */}
            {specialtiesData.map((specialty) => (
              <div key={specialty.id} className="speciality-item">
                {/* <img className="img-fluid" src={specialty.image} /> */}
                <div class="services-item">
                  <div class="img-part">
                    <img src={specialty.image} class="img-fluid" alt="" />
                  </div>
                  <div class="content-part">
                    <div class="content-text">
                      <h3>{specialty.name}</h3>
                      <h4 class="title">{specialty.number} Theraphists</h4>
                    </div>
                  </div>
                </div>
                <Link to={"/search"}>
                  <button className="home-book">Book now</button>
                </Link>
              </div>
            ))}
          </div>
          <div className="view-all">
            <button>View all</button>
          </div>
        </div>
      </div>
      <div className="py-5 doctors-wrapper">
        <div className="container">
          <div className="d-flex justify-content-beetwen specialities-main">
            <div className="d-flex gap-1">
              <h2 className="mt-3">Best Therapsits</h2>
              <svg
                width="66"
                height="34"
                viewBox="0 0 66 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_131_119702)">
                  <path
                    opacity="0.32"
                    d="M49.9999 32.8291V24.7091H41.8799V16.9091H49.9999V8.78906H57.7999V16.9091H65.9199V24.7091H57.7999V32.8291H49.9999Z"
                    fill="red"
                  />
                  <path
                    opacity="0.87"
                    d="M23.3303 33.44V22.15H12.0303V11.29H23.3303V0H34.1803V11.29H45.4703V22.15H34.1803V33.44H23.3303Z"
                    fill="red"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_131_119702">
                    <rect width="65.92" height="33.44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="d-flex gap-3 align-items-center speciality-arrow d-sm-flex d-none">
              <span className="material-symbols-outlined" onClick={scrollLeft1}>
                chevron_left
              </span>
              <span
                className="material-symbols-outlined"
                onClick={scrollRight1}
              >
                chevron_right
              </span>
            </div>
          </div>
          <div className="scrollable-container  mt-5" ref={containerRef1}>
            {/* 7 Divs */}
            {doctors?.map((doc) => (
              <div key={doc.id} className="doctor-item">
                <Link to={`/doc/${doc?._id}`}>
                  <img src={doc?.profileImage} className="img-fluid img-doc" />
                </Link>

                <div className="doctor-item-details">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="mb-0">
                      Dr. {doc.firstName} {doc.lastName}
                    </h3>
                    <ReactStars
                      count={5}
                      size={16}
                      value={4.5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p>{doc.field}</p>
                  <div className="d-flex align-items-center doc-location ">
                    <span class="material-symbols-outlined">location_on</span>
                    <h4 className="mb-0">{doc.location}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section class="section experience">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
              <div class="img-part">
                <img
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/towel-set-bathing-therapy.png"
                  alt="towel set"
                />
              </div>
              <div class="count-list">
                <h2 class="count1">5000 +</h2>
              </div>
              <h4>THERAPHIES DONE</h4>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
              <div class="img-part">
                <img
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/beauty-care-therapy.png"
                  alt="beauty care therapy"
                />
              </div>
              <div class="count-list">
                <h2 class="count2">10000 +</h2>
              </div>
              <h4>CUSTOMERS</h4>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
              <div class="img-part">
                <img
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/sss1.png"
                  alt="treatment"
                />
              </div>
              <div class="count-list">
                <h2 class="count3">2500 +</h2>
              </div>
              <h4>TREATMENTS</h4>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 text-center">
              <div class="img-part">
                <img
                  src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/tri-color-leaves.png"
                  alt="THERAPHISTS"
                />
              </div>
              <div class="count-list">
                <h2 class="count4">1500 +</h2>
              </div>
              <h4>THERAPHISTS</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 work-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 mt-5">
              <img src="/images/work-img.png" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-12">
              <h4 className="how-it-works mt-lg-0 mt-4">How it Works</h4>
              <div className="d-flex gap-1 ">
                <h2 className="mt-3 easy-steps">
                  4 easy steps to get your solution
                </h2>
                <svg
                  width="66"
                  height="34"
                  viewBox="0 0 66 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_131_119702)">
                    <path
                      opacity="0.32"
                      d="M49.9999 32.8291V24.7091H41.8799V16.9091H49.9999V8.78906H57.7999V16.9091H65.9199V24.7091H57.7999V32.8291H49.9999Z"
                      fill="#FF508B"
                    />
                    <path
                      opacity="0.87"
                      d="M23.3303 33.44V22.15H12.0303V11.29H23.3303V0H34.1803V11.29H45.4703V22.15H34.1803V33.44H23.3303Z"
                      fill="#FF508B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_131_119702">
                      <rect width="65.92" height="33.44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 col-12">
                  <div className="d-flex p-3 gap-3">
                    <div className="work-svg">
                      <svg
                        width="35"
                        height="39"
                        viewBox="0 0 35 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4198 4.73938C16.1455 4.42216 15.9185 4.143 15.6726 3.8797C15.0073 3.1818 14.2632 2.64251 13.2291 2.73768C13.0809 2.75037 12.917 2.75037 12.7877 2.81698C12.1855 3.12152 11.6621 2.90264 11.1482 2.60127C10.4672 2.20156 10.2591 2.27135 9.89968 2.99463C9.47089 3.85115 8.8277 4.51733 8.00165 5.07882C7.7305 4.43802 7.7305 3.80356 7.85347 3.17228C8.16245 1.60517 9.40783 0.387018 10.9748 0.0761347C11.0599 0.0602733 11.1388 0.0253782 11.2207 0H12.2801C13.4214 0.295022 14.5375 0.710591 15.7419 0.685212C16.1676 0.675695 16.218 0.780381 16.0194 1.16105C15.8018 1.57662 15.7483 1.9573 15.9973 2.40776C16.3788 3.10566 16.5207 3.87335 16.4198 4.73938Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.3749 17.4168C23.7286 23.3933 18.9425 27.8631 13.2705 28.3262C6.85444 28.8465 1.62698 24.5005 0.337459 18.9236C-1.1034 12.7123 2.26701 7.21472 6.94272 4.9973C7.01839 5.41287 7.15711 5.78403 7.1445 6.15201C7.09406 7.60491 7.4188 8.92141 8.47817 10.0666C8.22278 10.13 8.02731 10.1871 7.82868 10.2252C5.14874 10.7677 3.62905 12.8233 3.39889 14.8567C3.2917 15.8084 3.33584 16.7823 3.35475 17.7435C3.36421 18.2352 3.80877 18.6603 4.30377 18.746C4.47402 18.7745 4.65374 18.7777 4.8303 18.7777H19.6236C20.6924 18.7777 21.1464 18.3367 21.1243 17.2518C21.1054 16.3287 21.1495 15.3833 20.973 14.4888C20.5852 12.541 19.3902 11.215 17.549 10.5044C17.0603 10.3172 16.5432 10.2094 16.0198 10.0603C16.0577 10.0063 16.1081 9.92068 16.168 9.84772C16.8995 8.96582 17.2494 7.94752 17.2715 6.80233C17.2873 6.19959 17.3251 5.59686 17.3566 4.96875C20.9761 6.44703 25.0623 11.0817 24.3749 17.4168Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M34.6944 34.7019C33.367 36.0438 32.0397 37.3793 30.7092 38.7117C30.3182 39.1019 29.9966 39.0987 29.5994 38.699C26.8059 35.8915 24.0156 33.084 21.2253 30.2766C20.806 29.8515 20.8123 29.5311 21.238 29.106C21.3357 29.0108 21.4618 28.9442 21.6478 28.811C20.9731 28.1511 20.3961 27.5865 19.7939 26.9996C21.0582 26.0638 22.1807 25.0169 23.0509 23.6973C23.6373 24.3 24.2143 24.89 24.807 25.4959C24.9804 25.331 25.0876 25.2263 25.1917 25.1248C25.6047 24.7219 25.92 24.7219 26.3298 25.1343C28.2815 27.098 30.2362 29.0616 32.1879 31.0284C33.0171 31.8627 33.8463 32.6938 34.6755 33.5313C35.1011 33.9628 35.1106 34.28 34.6944 34.7019Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M20.1307 17.4501C20.137 17.6721 20.0298 17.7768 19.806 17.7641C19.7209 17.7578 19.6294 17.7641 19.5411 17.7641H4.93705C4.32855 17.7641 4.31909 17.7641 4.3317 17.1328C4.34746 16.3493 4.28756 15.5467 4.42629 14.7822C4.74157 13.0691 5.79463 11.9462 7.43097 11.3751C7.5224 11.3434 7.62329 11.3403 7.77148 11.3149C7.77148 12.0191 7.77779 12.7012 7.76202 13.3832C7.76202 13.4593 7.64852 13.5672 7.56339 13.6053C7.09046 13.8083 6.87291 14.1731 6.86661 14.6775C6.86661 15.0455 6.85399 15.4166 6.87606 15.7814C6.88237 15.8956 6.98011 16.0923 7.05263 16.1018C7.26702 16.1241 7.48772 16.0733 7.70842 16.0511C7.6832 15.9464 7.68951 15.8068 7.62329 15.7466C7.55078 15.6831 7.41521 15.6958 7.28279 15.6736C7.28279 15.3088 7.27333 14.9567 7.28594 14.6014C7.29855 14.2112 7.58546 13.9447 7.97011 13.9384C8.35476 13.932 8.6732 14.1794 8.70158 14.5601C8.7268 14.9249 8.70788 15.2929 8.70788 15.5404C8.49033 15.7212 8.3453 15.8417 8.20342 15.9591C8.39259 16.0162 8.58177 16.0955 8.77725 16.1241C9.01056 16.1621 9.12091 16.0384 9.11145 15.791C9.10199 15.4991 9.09253 15.2073 9.1146 14.9154C9.16505 14.2207 8.91282 13.729 8.21603 13.5323V11.2038C8.38629 11.1943 8.54393 11.1848 8.60384 11.1816C8.84661 11.5687 9.03263 11.9144 9.26279 12.2285C9.63167 12.7265 10.0226 13.2119 10.4136 13.6909C10.7636 14.1192 11.1072 14.1382 11.5013 13.7448C11.6905 13.5609 11.8387 13.3324 12.0909 13.0184C12.3684 13.3578 12.5418 13.6148 12.7593 13.8241C13.0683 14.1223 13.4088 14.097 13.68 13.767C14.2128 13.1199 14.7362 12.4728 15.2438 11.8066C15.3636 11.648 15.3951 11.4227 15.4802 11.1943H16.1739V11.9906C16.1739 12.7265 16.1676 13.4657 16.177 14.2017C16.1802 14.4015 16.1266 14.5094 15.9343 14.6045C15.4235 14.8615 15.1933 15.3913 15.3289 15.9083C15.4645 16.4286 15.9469 16.7807 16.486 16.7585C16.9999 16.7363 17.4256 16.3588 17.5359 15.8259C17.6463 15.3119 17.3625 14.8076 16.8517 14.5569C16.7477 14.5062 16.6027 14.3888 16.5995 14.3C16.5837 13.3007 16.5901 12.3015 16.5901 11.2958C18.2831 11.5401 19.8659 13.177 20.0614 14.9408C20.1496 15.7688 20.1118 16.6126 20.1307 17.4501Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M16.3126 6.2716C16.2716 5.92265 16.3221 5.52612 16.1676 5.23744C15.7892 4.51416 15.2469 3.90825 14.5344 3.48C13.9669 3.13739 13.3584 2.98195 12.7372 3.27697C12.3526 3.45779 12.0058 3.42924 11.6495 3.28331C11.3594 3.16277 11.0757 3.02319 10.8014 2.86775C10.5964 2.75037 10.4577 2.75672 10.3505 2.99146C9.91227 3.94632 9.24386 4.70767 8.39574 5.31674C8.30431 5.38019 8.19711 5.51025 8.20026 5.60542C8.22233 6.32553 8.16243 7.07419 8.33268 7.7594C8.94434 10.2052 11.8954 11.3948 14.1907 10.1513C15.7167 9.32651 16.363 7.99415 16.3126 6.2716ZM9.91542 6.24305C9.84291 6.29698 9.69788 6.24939 9.58437 6.24939C9.6159 6.13837 9.61275 5.97023 9.68526 5.92899C9.95956 5.76404 10.2559 5.64032 10.5807 5.4817C10.8991 5.64032 11.1955 5.76721 11.4666 5.93534C11.536 5.97658 11.5297 6.14154 11.5581 6.25257C11.4477 6.25574 11.2995 6.3065 11.2333 6.25257C10.7888 5.90679 10.3631 5.91313 9.91542 6.24305ZM13.4529 8.29869C13.0651 8.46365 12.6647 8.59688 12.2359 8.7555C11.804 8.60005 11.391 8.46365 10.9906 8.29869C10.9212 8.27014 10.9023 8.12104 10.8581 8.02904C10.9685 8.00366 11.1104 7.91801 11.1829 7.95925C11.886 8.34627 12.5733 8.34627 13.2701 7.95608C13.3363 7.91801 13.4624 7.99415 13.5601 8.01953C13.5255 8.1147 13.516 8.27331 13.4529 8.29869ZM14.5375 6.25257C14.1024 5.91631 13.6768 5.90679 13.2259 6.22719C13.1471 6.28429 12.9926 6.23671 12.876 6.23988C12.917 6.1225 12.9264 5.9512 13.0084 5.90044C13.2701 5.745 13.557 5.63397 13.8849 5.4817C14.2002 5.64349 14.5028 5.7799 14.7803 5.9512C14.8402 5.98927 14.8181 6.16374 14.8339 6.27477C14.733 6.26843 14.6037 6.30332 14.5375 6.25257Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M14.6449 11.9023C14.2508 12.394 13.8567 12.8857 13.472 13.387C13.2954 13.6185 13.1441 13.6661 12.936 13.4218C12.7059 13.1585 12.4536 12.9111 12.1982 12.6415C12.9108 12.0578 13.7999 11.7469 14.3958 10.9887C14.4021 10.9855 14.4116 10.9855 14.421 10.9887C15.1273 11.2932 15.1273 11.2932 14.6449 11.9023Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M13.9331 10.7119C13.8637 10.8451 13.8259 11.0228 13.7156 11.1084C13.2458 11.47 12.7665 11.8222 12.2684 12.1426C12.158 12.2155 11.9184 12.2155 11.8049 12.1426C11.3099 11.819 10.8307 11.4669 10.3641 11.1021C10.2537 11.0196 10.2159 10.8419 10.1875 10.6611C11.436 11.1941 12.6436 11.1909 13.8511 10.623C13.8795 10.6516 13.9079 10.6833 13.9331 10.7119Z"
                          fill="#0E82FD"
                        />
                        <path
                          d="M11.915 12.7746C11.6533 13.0283 11.4042 13.2599 11.1646 13.501C11.0258 13.6406 10.906 13.6279 10.7862 13.4788C10.2786 12.8507 9.77101 12.2194 9.2697 11.5881C9.11206 11.3883 9.1625 11.236 9.39582 11.1472C9.49986 11.1091 9.61336 11.0837 9.64174 11.0742C10.4173 11.6547 11.1488 12.2004 11.915 12.7746Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M17.1388 15.6735C17.1104 16.0669 16.7636 16.3524 16.3538 16.3175C15.966 16.2858 15.6727 15.9495 15.7011 15.572C15.7295 15.1723 16.0668 14.8805 16.4736 14.9058C16.874 14.9312 17.164 15.2675 17.1388 15.6735Z"
                          fill="#FF508B"
                        />
                      </svg>
                    </div>
                    <div className="work-search">
                      <h3>Search Doctor</h3>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex p-3 gap-3">
                    <div className="work-svg">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2188 0H0V4.76438H13.2188V0Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M35.9996 12.9381V14.6256C35.8571 15.3231 35.7596 16.0319 35.5655 16.7144C34.4808 20.5375 31.0046 23.4681 27.0596 23.9153C21.4786 24.5481 16.5802 20.8488 15.7167 15.2763C15.2696 12.3888 16.0346 9.77781 17.8214 7.46687C17.8571 7.42094 17.8964 7.37687 17.9386 7.33562C17.9527 7.32156 17.9789 7.32063 18.0221 7.30469C18.1317 8.12406 18.2396 8.89187 17.8092 9.70094C15.0033 14.9828 18.2939 21.6269 24.1917 22.6497C29.2692 23.53 33.9671 20.1456 34.7105 15.0456C34.9908 13.1228 34.6439 11.2938 33.7383 9.57344C33.4655 9.055 33.4636 9.05969 33.8639 8.63125C33.9989 8.48687 34.1199 8.32844 34.2689 8.15031C34.3449 8.26094 34.4189 8.3575 34.4817 8.46156C35.2871 9.77969 35.7821 11.2037 35.9396 12.7431C35.9461 12.8097 35.9789 12.8734 35.9996 12.9381Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M26.3934 33.473C26.4 34.3149 26.3775 35.1577 26.3672 35.9996H25.1719C25.1794 35.8599 25.1944 35.7202 25.1944 35.5805C25.1953 33.0727 25.1953 30.5649 25.1953 28.0571V27.623H26.4825C26.3194 28.2793 26.4131 28.8699 26.8547 29.3865C26.2603 30.1862 26.2416 30.9859 26.8594 31.8099C26.4206 32.2787 26.3897 32.8655 26.3934 33.473Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M1.21875 13.2344V23.9706H11.9869V13.2344H1.21875ZM5.46938 21.8331C4.71938 21.0841 3.98344 20.3509 3.22969 19.5981C3.495 19.3469 3.765 19.0909 4.05938 18.8116C4.46344 19.2419 4.88438 19.6909 5.33063 20.1663C6.63094 18.6813 7.87594 17.26 9.14906 15.8059C9.44625 16.0656 9.73219 16.3159 10.0509 16.5944C8.50875 18.3578 6.98063 20.1044 5.46938 21.8331Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M10.7799 26.4238V33.577H1.19768C1.19768 31.2623 1.19674 28.9785 1.19768 26.6948C1.19768 26.6132 1.20518 26.5316 1.21081 26.4238H10.7799Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M30.0059 8.05219C30.005 7.38281 29.8184 7.19531 29.1491 7.19437C27.38 7.19344 25.61 7.18312 23.8409 7.2C23.1753 7.20656 22.5528 7.13719 22.0653 6.60938C21.7447 6.95531 21.6022 7.34719 21.6003 7.7775C21.5919 9.40594 21.575 11.0344 21.605 12.6628C21.6312 14.1422 22.6784 15.3563 24.14 15.5372C25.0175 15.6459 25.9166 15.5991 26.8053 15.6009C28.7253 15.6047 30.0003 14.3306 30.005 12.4106C30.0097 10.9575 30.0069 9.50531 30.0059 8.05219ZM22.8003 8.99531C22.8022 8.66906 23.0806 8.40094 23.4106 8.4075C23.735 8.41313 23.9825 8.65969 23.9891 8.98406C23.9956 9.32531 23.7425 9.58781 23.405 9.59062C23.074 9.59344 22.7984 9.32156 22.8003 8.99531ZM25.94 13.7869C24.545 13.8431 23.3825 12.765 23.4266 11.4113H28.1609C28.2931 12.5681 27.1925 13.7372 25.94 13.7869ZM28.2059 9.59062C27.8844 9.59437 27.6256 9.34969 27.6106 9.03C27.5956 8.69062 27.8431 8.41875 28.1778 8.40656C28.5106 8.39531 28.7881 8.655 28.7956 8.985C28.804 9.315 28.5387 9.58781 28.2059 9.59062Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M32.8938 7.88178C32.4213 7.46459 31.8681 7.21897 31.2241 7.18897C31.1538 7.18616 31.0572 7.10553 31.0234 7.03616C30.7881 6.55803 30.4075 6.25147 29.8872 6.06678C30.1141 5.30741 29.9978 4.62584 29.41 4.07272C28.9675 3.65553 28.3253 3.50459 27.6231 3.63959V4.79553C27.8144 4.79553 27.9972 4.78522 28.1791 4.79741C28.5616 4.82366 28.8119 5.08616 28.795 5.42741C28.7781 5.75459 28.5306 5.98803 28.1566 5.98991C26.5863 5.99553 25.0169 5.99553 23.4475 5.98991C23.0584 5.98803 22.7988 5.73678 22.7988 5.39834C22.7997 5.06272 23.0603 4.81709 23.4475 4.79553C23.6097 4.78709 23.7738 4.79459 23.965 4.79459V3.64053C22.7941 3.38928 21.8275 4.03147 21.6044 5.19491C21.58 5.31866 21.5088 5.45647 21.4169 5.54272C20.9959 5.93553 20.7053 6.40241 20.5197 6.94709C20.4831 7.05491 20.3397 7.16272 20.2234 7.20022C19.9263 7.29678 19.6159 7.35397 19.2119 7.45053C19.2119 6.99678 19.1772 6.53647 19.2184 6.08366C19.4734 3.26553 21.7319 1.20584 24.5631 1.19834C26.7541 1.19272 28.9441 1.19647 31.135 1.19741C31.7359 1.19741 32.1447 1.43272 32.32 1.89491C32.5159 2.40959 32.3481 2.83428 31.9591 3.18866C31.795 3.33866 31.6225 3.47928 31.4181 3.65553C31.9216 4.00053 32.3509 4.26584 32.7484 4.57147C33.8181 5.39553 33.8913 6.96678 32.8938 7.88178Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M27.5915 25.784C27.6009 26.1628 27.3337 26.3934 26.8593 26.3962C26.0756 26.4018 25.2909 26.4037 24.5062 26.3934C24.3028 26.3906 24.1847 26.4515 24.1031 26.6428C23.9897 26.9118 23.8425 27.1659 23.714 27.4284C23.3306 28.214 22.7156 28.6771 21.8409 28.7831C21.7725 28.7915 21.704 28.8084 21.6056 28.8271V29.9784C22.5084 30.0103 23.2584 29.6615 23.9718 29.0906V33.5709C23.8997 33.5812 23.8228 33.6037 23.7459 33.6018C22.799 33.585 21.8428 33.6356 20.9081 33.5156C20.3793 33.4481 19.8806 33.1115 19.3837 32.864C19.2853 32.8143 19.2065 32.6221 19.2056 32.4946C19.1943 30.434 19.1943 28.3734 19.2065 26.3128C19.2075 26.1768 19.2984 25.9996 19.4062 25.9134C20.0222 25.4203 20.7431 25.2018 21.5259 25.1981C23.3053 25.1906 25.0856 25.1934 26.865 25.1971C27.3197 25.1981 27.5822 25.4212 27.5915 25.784Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M13.1791 8.41602H0.0166016V9.5682H13.1791V8.41602Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M13.1873 10.834H0.00976562V11.9815H13.1873V10.834Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M13.175 6.01758H4.8125V7.1707H13.175V6.01758Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M17.9792 26.4258H16.8242V33.5902H17.9792V26.4258Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M13.1873 26.4238H12.0342V33.592H13.1873V26.4238Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M15.5857 26.4219H14.4326V33.5938H15.5857V26.4219Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M30.9026 19.6714C29.9379 20.5133 28.8382 21.0936 27.4873 21.4048C28.5486 20.1308 29.2395 18.7695 29.6201 17.1992C30.2764 17.8742 30.7076 18.598 30.9486 19.4323C30.9692 19.5036 30.9523 19.6283 30.9026 19.6714Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.115 21.4052C22.7707 21.0893 21.685 20.5249 20.7325 19.7027C20.6753 19.6521 20.6163 19.5377 20.6341 19.4759C20.8853 18.6246 21.3063 17.8718 21.9803 17.209C22.361 18.7709 23.05 20.1302 24.115 21.4052Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M3.57633 6.01562H0.0175781V7.16969H3.57633V6.01562Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M29.4611 33.5897C29.0186 33.6169 28.5714 33.6179 28.1289 33.5879C27.7932 33.5654 27.5879 33.2775 27.6123 32.9513C27.6348 32.6419 27.8579 32.4272 28.1926 32.4094C28.4026 32.3991 28.6136 32.4075 28.8236 32.4075C29.0223 32.4085 29.222 32.3991 29.4198 32.4104C29.7423 32.43 29.9757 32.6597 29.9973 32.9625C30.0189 33.2719 29.792 33.57 29.4611 33.5897Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M29.9944 30.5718C29.9963 30.8718 29.8575 31.1343 29.5538 31.1605C29.0569 31.2046 28.5506 31.2093 28.0547 31.1624C27.7388 31.1333 27.5944 30.8671 27.6141 30.5446C27.6338 30.2483 27.8503 30.0364 28.1653 30.0149C28.3753 30.0008 28.5863 30.0121 28.7972 30.0121C28.7972 30.013 28.7972 30.013 28.7972 30.0139C29.0185 30.0139 29.2425 29.9999 29.4628 30.0177C29.7628 30.0421 29.9935 30.2811 29.9944 30.5718Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M29.5158 28.7707C29.0405 28.8045 28.5586 28.8054 28.0833 28.7707C27.7777 28.7482 27.5986 28.4745 27.6099 28.1735C27.6221 27.8763 27.8255 27.6579 28.1358 27.6138C28.1696 27.6082 28.2052 27.6045 28.2399 27.6045C28.4274 27.6035 28.6139 27.6035 28.8014 27.6035V27.6138C29.0227 27.6138 29.2468 27.597 29.4671 27.6176C29.7718 27.6466 29.9846 27.8848 29.9977 28.1745C30.0118 28.4604 29.8167 28.7491 29.5158 28.7707Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M20.3779 8.42188V10.775C19.6982 10.745 19.2126 10.2641 19.1995 9.62281C19.1864 8.96844 19.6692 8.46312 20.3779 8.42188Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M32.4032 9.62039C32.3892 10.2673 31.8848 10.7651 31.2061 10.766C31.2061 10.0901 31.2061 9.41414 31.207 8.7382C31.207 8.63602 31.2173 8.53289 31.2229 8.43164C31.9054 8.44195 32.4173 8.96695 32.4032 9.62039Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M26.3405 20.8629C26.2008 21.0626 26.034 21.2435 25.869 21.4423C25.1068 20.7841 25.1068 20.7841 25.3768 19.9713C25.4433 19.7716 25.4977 19.5673 25.583 19.376C25.6168 19.301 25.718 19.2129 25.7912 19.211C25.8652 19.2082 25.9843 19.2888 26.0115 19.361C26.1596 19.7538 26.2965 20.1523 26.4127 20.5554C26.439 20.6444 26.3977 20.7813 26.3405 20.8629Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M29.8953 26.0951C29.6394 26.5658 29.1612 26.352 28.7656 26.397V25.1989C29.1359 25.2317 29.5859 25.0489 29.8625 25.4557C29.9684 25.6114 29.9844 25.9311 29.8953 26.0951Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.3084 16.8176C23.9971 17.1176 23.7037 17.3998 23.37 17.7213C23.2687 17.3341 23.1693 16.9535 23.0615 16.541C23.505 16.6395 23.8959 16.7257 24.3084 16.8176Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M28.527 16.5449C28.4313 16.9415 28.3413 17.3165 28.2532 17.6793C27.9532 17.3709 27.6682 17.0784 27.3926 16.7952C27.7066 16.7259 28.0891 16.6415 28.527 16.5449Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M26.3594 17.6443C26.2197 17.7605 26.0922 17.9349 25.9262 17.9884C25.6159 18.0887 25.3891 17.9368 25.2812 17.5702C25.4387 17.439 25.6253 17.2852 25.8484 17.0996C25.9844 17.244 26.1419 17.4127 26.3594 17.6443Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M27.7042 18.9454C27.5973 19.1329 27.5007 19.3035 27.346 19.5763C27.2795 19.1573 26.9729 18.8891 27.2017 18.4551C27.3967 18.6454 27.5457 18.7907 27.7042 18.9454Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.2189 19.5189C24.1008 19.3098 24.0052 19.1402 23.8955 18.9442C24.0596 18.8083 24.2199 18.677 24.383 18.543C24.5621 18.6995 24.5414 18.8814 24.2189 19.5189Z"
                          fill="#FF508B"
                        />
                      </svg>
                    </div>
                    <div className="work-search">
                      <h3>Check Doctor Profile</h3>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex p-3 gap-3">
                    <div className="work-svg">
                      <svg
                        width="35"
                        height="36"
                        viewBox="0 0 35 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.9284 8.98823V8.57812H0.0078125V29.9595C0.0078125 31.6048 1.00112 32.5768 2.68508 32.5768C7.08799 32.5778 11.4899 32.5768 15.8928 32.5768H16.3413C15.3302 30.3116 15.3203 28.0938 16.4336 25.9204C17.542 23.7567 19.3461 22.4026 21.6393 21.8126C21.5639 21.5167 21.4498 21.2555 21.4409 20.9915C21.4151 20.2302 21.427 19.469 21.4329 18.7069C21.4369 18.262 21.6363 18.0666 22.0918 18.0637C23.0464 18.0588 24.002 18.0598 24.9566 18.0637C25.432 18.0656 25.6284 18.2571 25.6324 18.7272C25.6394 19.4526 25.6255 20.178 25.6384 20.9034C25.6443 21.2362 25.6136 21.5428 25.2662 21.772C27.7321 22.3891 29.56 23.7355 30.6823 25.9127C31.8046 28.0909 31.7877 30.3193 30.7944 32.5768C31.3263 32.5768 31.7977 32.5556 32.267 32.5807C33.8002 32.6629 34.9513 31.4935 34.9443 29.9847C34.9096 22.9859 34.9284 15.987 34.9284 8.98823ZM3.2388 21.1462C3.2259 20.3125 3.2249 19.4787 3.23979 18.6459C3.24773 18.2349 3.44619 18.0666 3.87983 18.0646C4.85826 18.0588 5.83767 18.0588 6.8161 18.0646C7.25867 18.0666 7.44721 18.2513 7.45019 18.6856C7.45713 19.4942 7.45614 20.3038 7.45118 21.1133C7.44721 21.5621 7.23089 21.7643 6.75755 21.7701C6.28719 21.7749 5.81584 21.771 5.34449 21.771C4.86123 21.771 4.37798 21.7768 3.89472 21.7691C3.471 21.7614 3.24574 21.5592 3.2388 21.1462ZM7.74292 28.2611C7.73895 28.6789 7.50477 28.9004 7.06815 28.9091C6.58588 28.9178 6.10262 28.9111 5.61936 28.9111C5.1371 28.9111 4.65384 28.9188 4.17058 28.9082C3.74289 28.8995 3.53054 28.6983 3.52458 28.2804C3.51466 27.4593 3.51367 26.6391 3.52558 25.8179C3.53153 25.4262 3.74984 25.2056 4.15173 25.1998C5.13015 25.1863 6.10858 25.1863 7.08601 25.1989C7.50973 25.2037 7.73994 25.4503 7.74391 25.8721C7.74987 26.6681 7.75086 27.4651 7.74292 28.2611ZM9.3078 21.1036C9.30284 20.3067 9.30284 19.5106 9.3078 18.7146C9.31078 18.2561 9.51321 18.0675 9.99449 18.0637C10.4777 18.0598 10.96 18.0627 11.4433 18.0627C11.9136 18.0627 12.384 18.0588 12.8543 18.0637C13.3128 18.0685 13.5023 18.2291 13.5083 18.6614C13.5202 19.4942 13.5212 20.327 13.5073 21.1588C13.5013 21.5708 13.2791 21.7662 12.8454 21.7691C11.8918 21.7749 10.9392 21.7749 9.98655 21.7691C9.5152 21.7662 9.30979 21.5631 9.3078 21.1036ZM13.797 28.233C13.7931 28.7215 13.6016 28.9033 13.0955 28.9101C12.6261 28.9159 12.1558 28.9111 11.6854 28.9111C11.215 28.9111 10.7447 28.9178 10.2743 28.9091C9.81488 28.9014 9.60054 28.6867 9.59756 28.234C9.5926 27.4506 9.5926 26.6661 9.59756 25.8827C9.60054 25.4194 9.82579 25.1998 10.31 25.196C11.2379 25.1892 12.1657 25.1892 13.0945 25.196C13.5916 25.1998 13.7931 25.3991 13.797 25.8808C13.802 26.6642 13.802 27.4486 13.797 28.233ZM15.1307 14.0681C15.1208 13.2363 15.1198 12.4025 15.1307 11.5697C15.1367 11.1635 15.3381 10.9691 15.7549 10.9662C16.7323 10.9575 17.7107 10.9585 18.6892 10.9652C19.1149 10.9681 19.3421 11.178 19.3481 11.5842C19.359 12.4054 19.359 13.2266 19.3481 14.0468C19.3431 14.4414 19.096 14.6639 18.6872 14.6687C18.192 14.6755 17.6968 14.6707 17.2007 14.6707C16.7184 14.6707 16.2352 14.6755 15.7519 14.6687C15.3351 14.6629 15.1357 14.4791 15.1307 14.0681ZM19.5783 21.1201C19.5743 21.5524 19.355 21.7662 18.9114 21.7691C17.9449 21.7749 16.9784 21.7759 16.0119 21.7681C15.5912 21.7652 15.3669 21.5534 15.3609 21.1394C15.35 20.3183 15.35 19.4971 15.3609 18.675C15.3669 18.2445 15.5644 18.0685 16.0099 18.0637C16.5061 18.0588 17.0012 18.0627 17.4974 18.0627C17.9687 18.0627 18.4391 18.0588 18.9105 18.0637C19.3798 18.0675 19.5743 18.2455 19.5783 18.6924C19.5852 19.501 19.5852 20.3105 19.5783 21.1201ZM25.3992 14.0352C25.3952 14.4579 25.167 14.6649 24.7225 14.6697C24.2392 14.6745 23.7569 14.6707 23.2747 14.6707C22.8162 14.6707 22.3588 14.6745 21.9003 14.6697C21.4299 14.6658 21.2067 14.4637 21.2027 14.0187C21.1958 13.2102 21.1948 12.4016 21.2037 11.5939C21.2077 11.1741 21.417 10.9681 21.8437 10.9652C22.8212 10.9575 23.7996 10.9575 24.777 10.9662C25.1809 10.9701 25.3942 11.1809 25.3992 11.5746C25.4071 12.3948 25.4071 13.215 25.3992 14.0352ZM27.2558 14.0623C27.2479 13.2295 27.2469 12.3967 27.2568 11.5639C27.2618 11.1616 27.4642 10.9691 27.885 10.9652C28.8624 10.9575 29.8408 10.9575 30.8192 10.9652C31.24 10.9681 31.4672 11.1809 31.4732 11.5901C31.4851 12.4112 31.4851 13.2324 31.4722 14.0526C31.4662 14.4472 31.2182 14.6639 30.8054 14.6697C30.3102 14.6755 29.814 14.6707 29.3189 14.6707C28.8485 14.6707 28.3781 14.6745 27.9078 14.6697C27.4612 14.6649 27.2608 14.4849 27.2558 14.0623ZM31.758 21.1636C31.75 21.5418 31.5 21.7652 31.109 21.7681C30.1296 21.7759 29.1492 21.7768 28.1698 21.7672C27.7689 21.7633 27.5525 21.5457 27.5486 21.152C27.5406 20.3183 27.5406 19.4836 27.5496 18.6498C27.5525 18.259 27.748 18.0714 28.1459 18.0646C28.654 18.0559 29.1621 18.0627 29.6711 18.0627C30.1544 18.0627 30.6386 18.0569 31.1219 18.0646C31.5307 18.0704 31.752 18.2629 31.759 18.6614C31.7729 19.4952 31.7739 20.3299 31.758 21.1636Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M34.9827 7.38647H0.0144847C0.0144847 6.23838 -0.022231 5.1135 0.0254002 3.99249C0.0690621 2.93822 0.974055 2.00485 2.05469 1.89749C2.75129 1.82882 3.4608 1.88492 4.20504 1.88492C4.21099 1.99808 4.22191 2.12672 4.2229 2.25536C4.22687 2.9566 4.20702 3.6588 4.2358 4.3581C4.2745 5.30501 5.02965 5.97433 5.99419 5.95499C6.93292 5.93661 7.65929 5.23827 7.67517 4.31264C7.69005 3.50501 7.67815 2.69738 7.67815 1.8646H15.7735C15.7735 2.57745 15.7705 3.27481 15.7755 3.97218C15.7764 4.20045 15.7675 4.43548 15.8151 4.65794C15.9928 5.48298 16.7856 6.02753 17.6658 5.95015C18.5271 5.87471 19.193 5.21603 19.2148 4.37164C19.2367 3.55144 19.2198 2.7293 19.2198 1.87428H27.2972C27.3032 1.97777 27.3161 2.09287 27.3171 2.20797C27.3191 2.89663 27.3111 3.58626 27.3211 4.27492C27.334 5.2257 28.0504 5.93564 29.002 5.95499C29.9805 5.97433 30.7297 5.29631 30.7644 4.32328C30.7892 3.64719 30.7723 2.96917 30.7743 2.29212V1.83365C31.714 1.89362 32.6369 1.67793 33.5121 2.04548C34.3804 2.40915 34.9162 3.07847 34.9678 3.99249C35.0314 5.11157 34.9827 6.23741 34.9827 7.38647Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M23.6029 22.7227C19.847 22.7053 16.7619 25.6824 16.752 29.3337C16.743 33.0082 19.7766 35.9891 23.5384 35.9998C27.2864 36.0104 30.3537 33.0556 30.3735 29.4149C30.3933 25.7501 27.3489 22.7401 23.6029 22.7227ZM27.081 27.6236C25.6005 29.0696 24.1189 30.5137 22.6364 31.9568C22.2444 32.3389 21.9894 32.335 21.5945 31.952C21.0666 31.4403 20.5396 30.9277 20.0167 30.4121C19.6882 30.0881 19.6644 29.7825 19.9373 29.5291C20.1894 29.295 20.5148 29.3231 20.8185 29.621C21.2382 30.0311 21.6491 30.4499 22.1214 30.9228C22.4409 30.595 22.7088 30.3116 22.9877 30.0388C24.0812 28.9681 25.1777 27.9003 26.2752 26.8325C26.6087 26.5084 26.9183 26.4717 27.1822 26.7135C27.462 26.9708 27.4313 27.2822 27.081 27.6236Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M18.0803 4.14181C18.0753 4.57803 17.855 4.82274 17.4869 4.82177C17.1138 4.8208 16.9183 4.59254 16.9163 4.13117C16.9133 2.98502 16.9133 1.83886 16.9163 0.692699C16.9183 0.225531 17.1038 0.00790633 17.4859 0.002103C17.8848 -0.00466756 18.0773 0.217794 18.0813 0.703339C18.0852 1.2827 18.0823 1.86207 18.0823 2.44047C18.0823 3.00823 18.0862 3.57502 18.0803 4.14181Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M29.6257 2.39891C29.6257 2.99085 29.6296 3.58279 29.6247 4.17473C29.6197 4.60224 29.4193 4.81987 29.0481 4.8218C28.675 4.82277 28.4696 4.61192 28.4666 4.1786C28.4587 3.0073 28.4597 1.83502 28.4657 0.663717C28.4686 0.206221 28.6721 -0.00753516 29.062 0.000202618C29.4332 0.00794039 29.6207 0.222664 29.6247 0.659848C29.6296 1.23921 29.6257 1.81955 29.6257 2.39891Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M6.53119 4.16627C6.52821 4.59862 6.29006 4.83559 5.91397 4.82108C5.55674 4.80658 5.37514 4.58411 5.37316 4.14209C5.36919 3.56273 5.37217 2.98336 5.37217 2.404C5.37217 1.8256 5.36919 1.24623 5.37316 0.666866C5.37613 0.227747 5.56071 0.0120566 5.92687 0.000449974C6.31884 -0.0111567 6.52921 0.201632 6.53119 0.655259C6.53913 1.8256 6.53913 2.99594 6.53119 4.16627Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.5207 19.2598H22.6611V20.6825H24.5207V19.2598Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M18.1621 12.125H16.3154V13.541H18.1621V12.125Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M30.293 12.1172H28.4453V13.538H30.293V12.1172Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M6.56057 26.3574H4.71387V27.7754H6.56057V26.3574Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M6.27368 19.2637H4.41309V20.6758H6.27368V19.2637Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M18.4552 19.2012H16.6006V20.6772H18.4552V19.2012Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M30.5694 19.1836H28.7188V20.6731H30.5694V19.1836Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M12.3341 19.25H10.4814V20.6689H12.3341V19.25Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M24.2397 12.1172H22.3643V13.5332H24.2397V12.1172Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M12.6353 26.3555H10.7568V27.7647H12.6353V26.3555Z"
                          fill="#FF508B"
                        />
                      </svg>
                    </div>
                    <div className="work-search">
                      <h3>Schedule Appointment</h3>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex p-3 gap-3">
                    <div className="work-svg">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0938 11.4237C21.0938 11.2474 21.0244 11.0645 20.9587 10.8956C20.6756 10.1677 20.3662 9.45018 20.0991 8.71667C19.9856 8.40245 19.9509 8.06008 19.8609 7.63986V7.93345C19.8609 14.3221 19.8619 20.7107 19.8609 27.0994C19.86 28.1021 19.3978 28.5636 18.4031 28.5645C13.1419 28.5645 7.88156 28.5645 2.62125 28.5636C1.73719 28.5636 1.24875 28.0796 1.24875 27.195C1.24687 19.4116 1.24594 11.6282 1.24875 3.84476C1.24875 2.96868 1.74656 2.48093 2.63063 2.48093C7.91531 2.47905 13.1991 2.47905 18.4828 2.48093C19.3603 2.48093 19.8516 2.97243 19.86 3.85508C19.8666 4.54169 19.8609 5.22923 19.8609 5.93741C19.8966 5.82861 19.9397 5.74325 19.9528 5.6532C20.1019 4.64487 20.4422 3.70594 20.9381 2.81766C20.9953 2.71448 20.9972 2.54471 20.9559 2.43027C20.6981 1.70802 20.0297 1.25122 19.2131 1.25122C13.4372 1.24747 7.66031 1.24653 1.88438 1.25122C0.999375 1.25216 0.353437 1.74648 0.0721875 2.59067C0.054375 2.6432 0.024375 2.69291 0 2.74356V33.2751C0.328125 34.2206 0.934687 34.7749 1.99031 34.7731C7.69687 34.7665 13.4025 34.7712 19.1081 34.7684C20.3419 34.7684 21.0984 34.0067 21.0984 32.7705C21.1003 25.6549 21.1003 18.5393 21.0938 11.4237ZM13.0266 32.2236C13.0162 32.6813 12.7875 32.9102 12.3272 32.9158C11.73 32.9233 11.1328 32.9177 10.5356 32.9177C9.96187 32.9177 9.38812 32.9215 8.81531 32.9168C8.30625 32.9121 8.08219 32.6917 8.07562 32.1927C8.07094 31.8175 8.06719 31.4423 8.07844 31.068C8.08969 30.6806 8.29969 30.4452 8.68781 30.4405C9.92812 30.4274 11.1694 30.4274 12.4106 30.4405C12.7997 30.4442 13.0106 30.675 13.0238 31.0643C13.0378 31.4498 13.035 31.8372 13.0266 32.2236Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M30.5959 0.559041C29.9678 0.297342 29.2778 0.18197 28.6169 0H27.2106C27.1459 0.0215737 27.0831 0.0553413 27.0175 0.0637832C23.8056 0.496196 21.3934 3.08035 21.1131 6.39333C20.8515 9.48213 22.9178 12.4555 25.9515 13.372C26.1775 13.4404 26.289 13.4114 26.4344 13.2088C27.1628 12.1882 28.6515 12.1498 29.3762 13.1497C29.5872 13.4404 29.7615 13.4236 30.0372 13.3326C32.7006 12.4574 34.6178 10.0083 34.7369 7.31256C34.8709 4.28848 33.294 1.68275 30.5959 0.559041ZM31.6487 7.35571C31.6412 7.83971 31.42 8.06858 30.939 8.07514C30.3672 8.08358 29.7953 8.07702 29.1756 8.07702C29.1756 8.64732 29.1765 9.19323 29.1747 9.73913C29.1728 10.3507 28.9675 10.5533 28.3469 10.5552C28.0309 10.5552 27.715 10.5589 27.399 10.5542C26.9331 10.5467 26.7044 10.3319 26.6969 9.86858C26.6865 9.28515 26.694 8.70172 26.694 8.07702C26.1203 8.07702 25.585 8.07796 25.0506 8.07702C24.4122 8.07608 24.204 7.87066 24.2012 7.2394C24.1994 6.92329 24.1937 6.60625 24.2031 6.29015C24.2162 5.83241 24.444 5.59979 24.9025 5.59135C25.4856 5.58103 26.0687 5.58947 26.6931 5.58947C26.6931 5.01073 26.6922 4.47421 26.694 3.93861C26.6959 3.29609 26.8919 3.10287 27.534 3.10099C27.7919 3.10005 28.0497 3.10005 28.3075 3.10099C28.9853 3.10193 29.1747 3.29515 29.1756 3.98739V5.58854C29.7672 5.58854 30.3156 5.58572 30.864 5.58947C31.4434 5.59323 31.6459 5.79677 31.6487 6.37176C31.6515 6.70005 31.6534 7.02741 31.6487 7.35571Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M36 20.2612V25.3263C35.9109 25.6875 35.8331 26.0514 35.729 26.4078C35.5172 27.1385 35.1487 27.7886 34.6528 28.3617C34.5619 28.4677 34.3847 28.5558 34.2478 28.5568C31.6931 28.568 29.1394 28.568 26.5856 28.5568C26.4469 28.5558 26.2669 28.4714 26.1769 28.3654C25.3378 27.3777 24.8662 26.2259 24.8372 24.9314C24.8006 23.3153 24.8259 21.6963 24.8259 20.0792C24.8259 20.023 24.84 19.9667 24.8475 19.9123C25.5328 19.8898 26.0456 20.3991 26.0709 21.1307C26.085 21.5265 26.0737 21.9233 26.0737 22.3407H27.2859C27.2934 22.201 27.3056 22.0659 27.3056 21.9299C27.3065 19.4808 27.3056 17.0308 27.3075 14.5807C27.3075 14.441 27.3075 14.2975 27.3337 14.1615C27.3956 13.8529 27.6703 13.6437 27.9656 13.6634C28.2656 13.6831 28.5103 13.9176 28.5431 14.2281C28.5562 14.3434 28.5497 14.4616 28.5497 14.5789V22.337H29.7994V21.9627C29.7994 21.0951 29.7956 20.2284 29.8003 19.3607C29.8031 18.8955 30.0375 18.6319 30.4265 18.6394C30.8006 18.646 31.0237 18.9011 31.0275 19.3514C31.0331 20.219 31.0294 21.0866 31.0294 21.9533V22.3454H32.2744V21.9683C32.2744 21.1129 32.2734 20.2575 32.2753 19.402C32.2762 18.9124 32.5069 18.6357 32.9025 18.6394C33.2944 18.6432 33.5203 18.9189 33.5222 19.4142C33.5259 20.2584 33.5231 21.1026 33.5231 21.9468V22.3426H34.7531C34.7531 21.761 34.7484 21.1907 34.754 20.6214C34.7587 20.1937 34.9397 19.9535 35.2697 19.8916C35.6128 19.826 35.805 20.0427 36 20.2612Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M18.6062 3.74805V27.2944H16.6731C16.51 24.8912 15.5865 22.8568 13.7275 21.2837C13.7406 21.249 13.7434 21.2087 13.765 21.1899C14.5506 20.5146 15.0831 19.6779 15.3793 18.6855C15.4065 18.5945 15.4731 18.4951 15.5509 18.4426C15.9793 18.1499 16.1734 17.7391 16.134 17.2373C16.0571 16.2599 16.3 15.3725 16.6468 14.4533C17.9134 11.0991 17.515 7.85644 15.7787 4.75169C15.7731 4.74325 15.759 4.7395 15.7187 4.71511C15.5696 4.81266 15.4056 4.91866 15.2434 5.02746C14.0603 5.81444 12.7628 6.21214 11.3378 6.20651C10.4828 6.2037 9.62309 6.1765 8.77465 6.25717C4.98715 6.61454 2.62934 10.6488 4.22684 14.1175C4.71809 15.184 5.10527 16.2111 4.98059 17.3986C4.93652 17.8244 5.1709 18.1565 5.51121 18.4126C5.58902 18.4717 5.67902 18.5514 5.7034 18.6396C5.99777 19.6713 6.55277 20.5343 7.41152 21.2556C5.52246 22.8464 4.59246 24.8772 4.43027 27.2963H2.49902V3.74805H18.6062Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M34.7022 36.0006H26.126C26.2966 33.9398 26.4663 31.9006 26.6369 29.8398H34.1894C34.36 31.8884 34.5297 33.9285 34.7022 36.0006Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M15.6678 13.5131C15.0594 12.8124 14.2363 12.8593 13.4732 12.7439C11.6797 12.4719 9.88253 12.2205 8.08628 11.9692C7.75722 11.9232 7.5294 11.7703 7.46565 11.4448C7.39722 11.095 7.5819 10.8661 7.88847 10.7188C8.0319 10.6494 8.17347 10.5734 8.34315 10.4862C8.1519 10.1044 7.97659 9.75364 7.80034 9.40096C6.95003 9.72081 6.25065 10.202 6.24972 11.14C6.24972 11.7262 6.06597 12.0442 5.60284 12.3237C5.40878 12.44 5.29065 12.682 5.10409 12.9081C4.87909 11.941 4.91565 11.0302 5.31034 10.1664C6.1044 8.42639 7.46753 7.50528 9.39034 7.4565C10.2566 7.43493 11.1257 7.47433 11.99 7.42086C12.545 7.38616 13.1047 7.27172 13.6428 7.12258C14.181 6.97344 14.6947 6.73707 15.276 6.51758C16.2519 8.76875 16.4057 11.0781 15.6678 13.5131Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M14.023 18.6337C13.9433 19.7209 12.3243 20.989 10.8964 21.0997C9.16301 21.2338 7.38645 20.1064 7.05176 18.6337C7.54676 18.6337 8.03613 18.6347 8.52457 18.6328C9.42738 18.6309 9.92145 18.145 9.92426 17.2511C9.92707 16.4904 9.9252 15.7307 9.9252 14.9277H11.1758C11.1758 15.7053 11.1749 16.4642 11.1758 17.223C11.1777 18.1432 11.6652 18.6309 12.5839 18.6328C13.063 18.6347 13.5421 18.6337 14.023 18.6337Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M9.26729 24.4376C9.11073 25.3831 8.94948 26.3277 8.78636 27.2947C7.76354 27.2947 6.75104 27.2947 5.73854 27.2938C5.46948 25.9243 6.87011 23.0729 8.24354 22.2324C8.57729 22.9012 8.91104 23.5672 9.24011 24.236C9.26917 24.2941 9.27761 24.3729 9.26729 24.4376Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M15.4153 27.2858H12.314C12.1537 26.3281 11.9953 25.3948 11.8415 24.4606C11.8303 24.3949 11.8265 24.3142 11.8537 24.2579C12.1865 23.5788 12.5268 22.9026 12.8793 22.1953C14.4731 23.5404 15.2765 25.2269 15.4153 27.2858Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M8.67043 14.9277H6.22168V17.359H8.67043V14.9277Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M14.8796 14.9277H12.4355V17.3637H14.8796V14.9277Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M10.6577 13.5975C10.6567 13.6116 10.6548 13.6247 10.6539 13.6388H6.26172C6.31328 13.1379 6.84297 12.8724 7.29953 13.0113C7.86297 13.1829 8.45641 13.2626 9.03953 13.3621C9.57672 13.454 10.1177 13.5206 10.6577 13.5975Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M11.0576 27.2933H10.0488C10.1876 26.4669 10.3245 25.6537 10.4613 24.8395C10.5195 24.8367 10.5776 24.8348 10.6357 24.832C10.7745 25.6425 10.9141 26.4529 11.0576 27.2933Z"
                          fill="#FF508B"
                        />
                        <path
                          d="M11.4217 22.3301C11.222 22.7287 11.0392 23.1236 10.8255 23.5016C10.7233 23.6798 10.3445 23.6348 10.2414 23.4407C10.052 23.0833 9.87766 22.7175 9.68359 22.3301H11.4217Z"
                          fill="#FF508B"
                        />
                      </svg>
                    </div>
                    <div className="work-search">
                      <h3>Get Your Solution</h3>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 articles-wrapper">
        <div className="container">
          <div className="d-flex gap-1 latest-article">
            <h1 className="mt-3">Latest Articles</h1>
            <svg
              width="66"
              height="34"
              viewBox="0 0 66 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_131_119702)">
                <path
                  opacity="0.32"
                  d="M49.9999 32.8291V24.7091H41.8799V16.9091H49.9999V8.78906H57.7999V16.9091H65.9199V24.7091H57.7999V32.8291H49.9999Z"
                  fill="#FF508B"
                />
                <path
                  opacity="0.87"
                  d="M23.3303 33.44V22.15H12.0303V11.29H23.3303V0H34.1803V11.29H45.4703V22.15H34.1803V33.44H23.3303Z"
                  fill="#FF508B"
                />
              </g>
              <defs>
                <clipPath id="clip0_131_119702">
                  <rect width="65.92" height="33.44" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="row bb">
            <div className="col-lg-6 i  col-12 op mt-3 ">
              <div className="x">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    className="img-fluid"
                    src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/news/news-1.png"
                  />
                  <div className="blog">
                    <div className="d-flex align-items-center gap-4 mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">person</span>

                        <h5 className="mb-0">John Doe</h5>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">
                          calendar_month
                        </span>
                        <h5 className="mb-0">13 Aug, 2024</h5>
                      </div>
                    </div>
                    <h3>Doccure – Making your clinic painless visit?</h3>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                    <button className="mt-3 blog-view">View Blog</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 i col-12 op mt-3 ">
              <div className="x">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    className="img-fluid"
                    src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/news/news-02.png"
                  />
                  <div className="blog">
                    <div className="d-flex align-items-center gap-4 mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">person</span>

                        <h5 className="mb-0">Darren Elder</h5>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">
                          calendar_month
                        </span>
                        <h5 className="mb-0">23 Sep, 2024</h5>
                      </div>
                    </div>
                    <h3>What are the benefits of Online Therapist Booking?</h3>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                    <button className="mt-3 blog-view">View Blog</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 i col-12 op mt-3 ">
              <div className="x">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    className="img-fluid"
                    src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/news/news-03.png"
                  />
                  <div className="blog">
                    <div className="d-flex align-items-center gap-4 mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">person</span>

                        <h5 className="mb-0">Ruby Perrin</h5>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">
                          calendar_month
                        </span>
                        <h5 className="mb-0">13 Oct, 2024</h5>
                      </div>
                    </div>
                    <h3>Benefits of consulting with an Online Therapist</h3>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                    <button className="mt-3 blog-view">View Blog</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 i col-12 op mt-3 ">
              <div className="x">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    className="img-fluid"
                    src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/news/news-1.png"
                  />
                  <div className="blog">
                    <div className="d-flex align-items-center gap-4 mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">person</span>

                        <h5 className="mb-0">Sofia Brient</h5>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <span class="material-symbols-outlined">
                          calendar_month
                        </span>
                        <h5 className="mb-0">13 Aug, 2024</h5>
                      </div>
                    </div>
                    <h3>5 Great reasons to use an Online Therapist ?</h3>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                    <button className="mt-3 blog-view">View Blog</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-wrapper mb-5 mt-4">
        <div className="container">
          <div className="m-app px-5 row d-flex align-items-center ">
            <div className="col-lg-6 col-12 m-app-text mt-3">
              <h3>Working For Your Better Health.</h3>
              <h2>Download The Doccure App Today!</h2>
              <div className="mt-4">
                <p>Scan the QR code to get the app now</p>
                <img className="img-fluid" src="/images/scan-img.png" />
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5">
              <div className="m-app-img w-100">
                <img className="img-fluid" src="/images/mobile-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-wrapper py-4">
        <div className="container">
          <div className="d-flex gap-1 latest-article faqq">
            <h3>Get Your Answers</h3>
            <div className="d-flex gap-1">
              <h2 className="mt-3">Frequently Asked Questions</h2>
              <svg
                width="66"
                height="34"
                viewBox="0 0 66 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_131_119702)">
                  <path
                    opacity="0.32"
                    d="M49.9999 32.8291V24.7091H41.8799V16.9091H49.9999V8.78906H57.7999V16.9091H65.9199V24.7091H57.7999V32.8291H49.9999Z"
                    fill="#0EA5E9"
                  />
                  <path
                    opacity="0.87"
                    d="M23.3303 33.44V22.15H12.0303V11.29H23.3303V0H34.1803V11.29H45.4703V22.15H34.1803V33.44H23.3303Z"
                    fill="#0EA5E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_131_119702">
                    <rect width="65.92" height="33.44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 flex-lg-row container-xxl align-items-center mt-5 ">
            <img
              className="img-fluid faq-img w-100 lazyload"
              src="https://pathivu.dreamstechnologies.com/template/assets/img/home5/services/1.png"
              alt=""
            />
            <FAQ />
          </div>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div className="container">
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default Home;
