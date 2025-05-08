import React from 'react';
import './TeamContent.css';

export default class TeamContent extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
            });
        }

        $('select:not(.ignore)').niceSelect();
    
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <section className="team-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 mx-auto">
                            <div className="team-details__content professional-content">
                                <div className="title-box">
                                    <h2 className="main-title">Company Profile</h2>
                                    <p className="subtitle">Background & Vision-Mission</p>
                                </div>

                                <section className="profile-section">
                                    <h3 className="section-title">Background</h3>
                                    <p>Charot is a family-owned Trading and Manufacturing Private Limited Company. It stemmed out from a long-lasted trade-based living of the family. Our ancestors were into a whole and retail sale business in the capital. We grew in the hot and charming Markato Market Place in Addis Ababa. The scope of our family business extended to importing simple machinery spare parts and assembling units to sell to the local market. This practice persuaded us to move out, to the overseas, to witness businesses of large scales. This move helped us to explore a wide range of opportunities.</p>
                                    <p>These exposures opened our eyes and thoughts. We gradually decided to move out of the limited items whole/retail sale business of our family. On the other side, the transformation of Ethiopia's economy from a traditional farming to industrialization and the flourishing of both commercial and residential real-estate business scratched in us the coming opportunities in the fields. Looking at the untapped demands that was opening from the growing Construction in the country, especially the Residential Real Estate and initiatives of the government in the field of manufacturing, we involved ourselves in to the manufacturing and the real estate businesses.</p>
                                    <p>With a determination of providing solutions to the growing demands of the market, We thought of Charot: healing the market; by locally providing a typically new product, adding value to the quality of the flourishing commercial and residential buildings that changed the life style and standards of the citizens at home.</p>
                                    <p>Charot's WPC – Wood and Plastic Compounding process was introduced to Ethiopia with a wide range of applications. It is the pioneer of this typically new and characteristic product.</p>
                                    <p>The name Charot originated from a historical background of our ancestors using "Charot" (in the Silte language, and Demakasie in Amharic); a green plant (Ocimum Lamiifolium) as a remedy for curing patients with vital signs of sickness. We were used to be treated with this medicine mostly for high fever, headache and stomach disorders at our childhood and this treatment is yet, widely used in most part of Ethiopia.</p>
                                    <p>We, at Charot now, took the initiative of resolving the escalating demands of the construction industry, through innovative approaches and contemporary business management principles to answer the call of the industry by adding significant value to the supply chain of this industry. And that was so, by maintaining environmental conservation.</p>
                                    <p>Our products are currently the best chosen in terms of quality and applicability at customers end. We are committed to retain the reputation of our products and services by ensuring continual improvement to the quality of our products and services alike.</p>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Mission</h3>
                                    <p className="highlighted">We are committed to provide the most satisfying WPC products for various applications at superior quality and competitive prices.<br />
                                    We are committed to ensure our customers' needs and expectations are achieved on time every time.</p>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Vision</h3>
                                    <p className="highlighted">Being the leading provider of WPC products to the local and to the East African Markets for various applications by 2030.</p>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Core Values</h3>
                                    <ul className="core-values-list">
                                        <li><span className="icon-check">✔</span> Ethical</li>
                                        <li><span className="icon-check">✔</span> Endurance</li>
                                        <li><span className="icon-check">✔</span> Integrity</li>
                                        <li><span className="icon-check">✔</span> Customer Satisfaction</li>
                                        <li><span className="icon-check">✔</span> Professionalism</li>
                                        <li><span className="icon-check">✔</span> Environmental Friendly</li>
                                    </ul>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Our Products</h3>
                                    <p>We manufacture typically exceptional products to add value to the growing living standards. We operate here, with a sense of serving the community we live in; by covering the growing demands of the society, We produce multipurpose WPC products that are user and environmentally friendly. We are committed to continuously transform with the growing technology and keep on innovating new products and approaches.</p>
                                    <p>Our products are exceptional in many ways when compared to other materials used to provide the applications our products are set to. They have exclusive aesthetic features, characteristic quality and enduring life without defects.</p>
                                    <ul className="core-values-list">
                                        <li><span className="icon-check">✔</span> Aesthetic: they come with variety of colors, shapes and patterns.</li>
                                        <li><span className="icon-check">✔</span> Waterproof: they are water and moisture resistant. They don't damage</li>
                                        <li><span className="icon-check">✔</span> Soundproof: acoustic walls and doors absorb sounds, hence no noise issues may disturb</li>
                                        <li><span className="icon-check">✔</span> Fire Retardant: WPC products are high fire resistant.</li>
                                        <li><span className="icon-check">✔</span> Scratch Resistant: WPC products do not peel off and don't scratch easily</li>
                                        <li><span className="icon-check">✔</span> Anti-Bacterial: these products are clean and neat; they don't hatch bacteria.</li>
                                        <li><span className="icon-check">✔</span> Durable and Long-lasting with their aesthetic features.</li>
                                    </ul>
                                    <p>We cover a wide range of home, offices and hotels finishing materials. At Charot we manufacture WPC panels for doors, kitchen cabinets, roofings, floors, wall partitions, dining tables, reception desks, luxury meeting tables and many more. Further, all our operations are environmentally friendly. Neither we deplete the environment through degradation of the flora looking for raw materials; nor leave a negative impact on where we operate in any form. There is a zero-waste operational practice in our manufacturing process. There is nothing for the garbage and hence, we maintain the balance of the eco system.</p>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Our Services</h3>
                                    <p>All our employees are nurtured under a distinct business policy of the organization that is based on giving priority to the customer. Our workforce is a strong believer of a "win-win business relation". Our employees are well oriented with loyal services and regularly enlightened with, ethical business relationships to deliver the best service and products to our customers.</p>
                                    <p>Loyalty and commitment toward our clients were always our characteristic features at providing comprehensive quality products at competitive prices. We are determined to extend our services to cover new dimensions and markets. Our services are based on giving priority to our customers. Our pride blooms from our satisfied customers. Nothing is more satisfying to us than the reflections of our customers, on our services from the bottom line of our manufacturing plant up to the installation of our products at our clients end. We follow the feelings of our customers even after the completion of the desired services.</p>
                                </section>

                                <section className="profile-section">
                                    <h3 className="section-title">Location/Address</h3>
                                    <p>Our plant is in Oromiya, Administrative Region at the Tatek industrial city near Addis Ababa on the rout to Ambo.<br />
                                    Charot's Headquarter is at Lebu, Addis Ababa in front of the Lebu Commercial Market, on the 4th Floor of Foziana building.<br />
                                    <strong>Contact:</strong> Tel No: +251118547858, Mob: +251908686868<br />
                                    Website: ………….<br />
                                    Email address: ………..</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}