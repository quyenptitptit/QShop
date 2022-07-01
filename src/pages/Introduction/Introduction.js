import React from 'react'
import { Link } from 'react-router-dom';
import './Introduction.css'

function Introduction() {
    return (

        <div className='introduction'>
            <div className='introduction-title'>
                <div className='intro-title'>
                    <h1>INTRODUCTION</h1>
                    <h2>2022 SPRING SUMMER</h2>
                </div>
                <Link to="/products"><button className='intro-btn'>Buy it now</button></Link>
            </div>


            <div className='introduction-paragraph'>
                <h1>About our Fashion Web Design Inspirations</h1><br />
                <p>
                    Fashion is one of the most desirable industries in the world. Think about all the ways in which fashion is part of our lives. All of us participate in the fashion industry at some point in our lives when we buy clothes. Many people study fashion or go on to work in the fashion industry, while many more take an interest in the industry from afar. Some write about fashion, while others have their Instagram feeds filled with their favorite brands, celebrities, and styles.<br />
                    If you’re looking to make your own impression on the fashion industry, you need to make sure you’re doing everything you can to stand out and be better than your competitors, whether you’re selling a product or writing a blog.<br />
                    Our unique fashion website designs will put you on the right track to do exactly that!
                </p><br />

                <h1>What design trends work well for fashion websites?</h1><br />
                <p>
                    This largely depends on what you’re selling and how you want to represent your brand online. However, one of the most common design features used by fashion websites is the use of tiles or cards to display as many products on the page as you can. It’s also common for fashion website homepages to focus on a key product, often being worn by a model or a group of people.<br />
                    Some fashion websites go for a minimalist approach, but you need to find the right balance between displaying your products and including information about them, while keeping the focus on what you want to sell!<br />
                    Even if you’re planning a fashion blog rather than selling a product or promoting a brand, you’re still likely to be heavily reliant on visuals to create an engaging website. As such, you will still need to look at sleek designs that allow you to focus on highly desirable images as much as what you want to write.
                </p><br />

                <h1>What color schemes should I use?</h1><br />
                <p>
                    There aren’t really any rules when it comes to the colors themselves, although you should focus on those that best match your brand. It’s often worth keeping the color palette of your website simple, and potentially only using two or three colors so you can create distinct contrasts and make the user experience as straightforward as possible.<br />
                    When choosing colors for your fashion website design approach, it is also worth thinking about your products and what color they are. You’ll be making these the focal point of your website, so make sure they fit with your design.
                </p><br />

                <h1>What should my fashion website design focus on?</h1><br />
                <p>It depends on what your fashion website concept will be designed to do. If you’re selling products or promoting a brand, clearly the focus will be on the things you’re looking to promote and sell. However, even if you’re launching a blog, you’ll still need to focus on the visual aspects of your website. People who love fashion are often more interested in looking at pictures than reading about it, so keep that in mind whatever you will do with your fashion website!
                </p><br />
            </div>


        </div>


    )
}

export default Introduction