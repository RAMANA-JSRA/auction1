import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Auction1 from "../images/auction1.png";
import "./homestyle.scss";
import MetaData from "../MetaData/MetaData";
import Product from "./Product";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // console.log(productCount);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="BID X"></MetaData>
          <section id="header" className="d-flex align-items-center homepg">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div
                      className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h1>
                        {" "}
                        Bid and sell items with{" "}
                        <strong className="brand-name">
                          <br />
                          Online Auction
                        </strong>
                      </h1>

                      <h2 className="my-3">
                        An online auction is a service in which auction users or
                        participants sell or bid for products or services via
                        the Internet.
                      </h2>
                      <div className="mt-3">
                        <NavLink to="/signup" className="btn-get-started">
                          Get Started
                        </NavLink>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 order-1 order-lg-2 header-img "
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <img
                        src={Auction1}
                        className="img-fluid animated hedrimg"
                        alt="auction img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Home Section 2 */}

          <div className="container-fluid nav_bg sectiontwocls">
            <div className="row">
              <div className="col-10 mx-auto">
                <section className="section secthreecls">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          <span className="number">01</span>
                          <h3>Create Profile</h3>
                          <p>
                            Sign up in our website, and make your user Profile.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <span className="number">02</span>
                          <h3>Sign In</h3>
                          <p>
                            Provide your correct user Id and Password and Login
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <span className="number">03</span>
                          <h3>Enjoy the app</h3>
                          <p>Sell and Buy Products with Best Bid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <section className="product_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <div className="section-title" data-aos="fade-up">
                  <h2>Featured Auctions</h2>
                  <p>Start Bidding Now!</p>
                </div>
              </div>
              <div className="row">
                {products &&
                  products.map((product) => <Product product={product} />)}
              </div>
              <div className="btn_box">
                <NavLink excat to={"/lot"} className="view_more-link">
                  View More
                </NavLink>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
