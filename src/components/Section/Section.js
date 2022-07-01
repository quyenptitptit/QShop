import React from 'react'
import { Link } from 'react-router-dom';
import './Section.css'
import anh1 from '../../images/ussama-azam-HKchJL3uFrw-unsplash-removebg-preview.png'
import anh2 from '../../images/gabriel-benois-sVIBH6dMIlI-unsplash-removebg-preview.png'
import anh3 from '../../images/kindred-hues-photography-YTQQYQ6_g1s-unsplash__1_-removebg-preview.png'

function Section() {
    return (
        <div>
            <div class="section-products" id="gallery">

                <div>
                    <h2 class="section-text-header">Find out what options <br /> you have</h2>
                </div>

                <div class="product-list"  >
                    <div class="product-left-side">
                        <p>Women's styles</p>
                        <Link to="/women"><img src={anh1} alt="pedram-normohamadian" /></Link>
                    </div>
                    <div class="product-right-side" >
                        <div class="product-right-side-1">
                            <p>Men's Styles</p>
                            <Link to="/men"><img src={anh2} alt="ussama-azam" /></Link>
                        </div>
                        <div class="product-right-side-2">
                            <p>Kid's style</p>
                            <Link to="kids"><img src={anh3} alt="kindred-hues" /></Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>   
        </div>
    )
}

export default Section