import React from 'react';
import mg1 from './gallery-hero.jpg';

function Pro2() {
  return (
    <div>
      <section id="collection">
        <div className="container">
          <div className="fn_cs_title">
            <div className="divider" data-color="2">
              <div className="line"></div>
              <div className="middle"></div>
              <div className="left1"></div>
              <div className="left2"></div>
              <div className="right1"></div>
              <div className="right2"></div>
            </div>
            <h3 className="title" data-color="white">From Collection</h3>
          </div>
        </div>

        {/* Carousel 1 */}
        <div className="fn_cs_moving_collection" data-layout="modern" data-direction="left" data-speed="4000" data-gap="30" data-ratio="1.2" data-width="300">
          <div className="owl-carousel">
            {[...Array(10)].map((_, i) => (
              <div className="item" key={`left1-${i}`}>
                <div className="left__border"></div>
                <div className="right__border"></div>
                <div className="abs_img" data-bg-img={mg1}></div>
                <div><img src={mg1} alt="" /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel 2 */}
        <div className="fn_cs_moving_collection" data-layout="modern" data-direction="right" data-speed="4000" data-gap="30" data-ratio="1.2" data-width="300">
          <div className="owl-carousel">
            {[11,12,13,14,15,16,17,18,19,20,21].map((num) => (
              <div className="item" key={`right-${num}`}>
                <div className="left__border"></div>
                <div className="right__border"></div>
                <div className="abs_img" data-bg-img={`/assets/img/drops/${num}.jpg`}></div>
                <div><img src="/assets/img/1x1.jpg" alt="" /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel 3 */}
        <div className="fn_cs_moving_collection" data-layout="modern" data-direction="left" data-speed="4000" data-gap="30" data-ratio="1.2" data-width="300">
          <div className="owl-carousel">
            {[22,23,24,25,26,27,28,29,30,31,32].map((num) => (
              <div className="item" key={`left2-${num}`}>
                <div className="left__border"></div>
                <div className="right__border"></div>
                <div className="abs_img" data-bg-img={`/assets/img/drops/${num}.jpg`}></div>
                <div><img src={num === 31 ? mg1 : "/assets/img/1x1.jpg"} alt="" /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Info Section */}
        <div className="fn_cs_collection_info">
          <div className="container">
            <div className="info_in">
              <h3 className="count">10,000</h3>
              <h3 className="title">Total Items in Collection</h3>
              <p className="fn_animated_text">
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="collection.html" className="metaverse_fn_button white">
                <span className="text">See all</span>
              </a>
            </div>
          </div>
          <img src="svg/claws.svg" alt="" className="fn__svg bottom" />
        </div>
      </section>
    </div>
  );
}

export default Pro2;
