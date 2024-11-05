// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';

const About = () => {
  return (
    <> 
      <div className='About'>
        <div className='About-contents'>
          <h2>About Us</h2>
          <h3>Koa Cafe - Where Every Sip Tells a Story</h3>
          <p>
            Welcome to Koa Cafe, where we take pride in using the finest ingredients to craft a unique 
            and flavorful menu. Whether you're craving a warm cup of our signature chai, a refreshing iced tea, 
            or one of our mouth-watering snacks, we’ve crafted every item with care and passion. Our friendly staff 
            is here to make your visit enjoyable, whether you’re dining solo, with friends, or with family.
          </p>
          <p>
            Established in 2010, we have been serving the community with our exceptional drinks and snacks. 
            Our cafe is not just a place to eat, but a place to create memories. Join us and be part of the story!
          </p>

          {/* Add the image 
          <div className='About-image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcooWDH5tcjdbQ8Dd3yIkuVj2TeBh-V1pEQ&s" alt='Koa Cafe' />
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default About;



