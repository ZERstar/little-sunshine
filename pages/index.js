import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import bgimg from '../public/bg.jpg';

const IndexPage = () => {
  const [backgroundImage, setBackgroundImage] = useState('/bg.jpg');

  const handleBackgroundChange = (e) => {
    setBackgroundImage(e.target.value);
  };

  

  const testimonialData = [
    { name: 'Rajashri Dumbre', stars: 4, testimonial: 'The teachers here are very friendly and approachable. My daughter`s class teacher is Bhakti teacher who is doing a great job. They are managing covid situation very well through online classes.' },
    { name: 'Jayashree Walunj', stars: 5, testimonial: 'Little Sunshine Pre School  Badlapur is an excellent school. The teachers are professional, caring and qualified. The school not only have a precise academic curriculum but also supports hidden talents of the students through extra curricular activities which develops the social skills of the students like empathy, team-work etc.' },
    { name: 'Trupti Gaikwad', stars: 4.5, testimonial: 'This has been my first experience in Golden Kids as a parent and I am very proud of my decision of getting my child admitted here. As a parent, I have found the teachers are very friendly and approachable. She enjoys coming to school, learning new topics and They are taught to express clearly and effectively. All the teachers are well qualified and supporting. Best Wishes to the entire team!' },
  ];

  return (
    
    <div className="page-container">
      <nav className="navbar">
      <div className="logo">
        <img src="favicon.ico" alt="Plant Logo" className="logo-image" />
        <span className="logo-text">Little Sunshine Pre-School</span>
      </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#ratings">Ratings</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="sections-container">
      <section id="home" className="section home-section">
            <div className="content">
              <h1>Welcome to Little Sunshine Pre School</h1>
              <p>Unleash the brilliance within at Little Sunshine Pre School. We ignite young minds with curiosity, creativity, and a love for learning. Our nurturing environment and passionate educators empower children to shine their brightest and embrace the wonders of education.</p>
              <p>Join us on an extraordinary journey where little sparks become radiant stars.</p>
            </div>
      </section>

        <section id="about" className="section about-section">
          <div className="content1">
            <h2>About Little Sunshine Pre-School</h2>
            <p>Welcome to Little Sunshine Pre School, where we provide a nurturing and stimulating environment for children aged 3 to 4 years. With our years of experience in early education, we foster a love for learning through a balanced approach to academics and holistic development. Our passionate educators create personalized learning experiences, igniting curiosity and imagination through play-based activities and interactive lessons. Our state-of-the-art facilities prioritize safety and hygiene, ensuring a secure and enriching environment. Join our Little Sunshine family today and embark on an exciting learning journey. Contact us to schedule a visit and learn more about our admission process.</p>
          </div>
        </section>

        <section id="photos" className="section photos-section">
          <div className="content2">
            <h2>Photos</h2>
            <div className="image-gallery">
              <div className="image-item">
              <img src="logo.jpg" alt="Image 1" width={250} height={150} />
              </div>
              <div className="image-item">
              <img src="img1.jpg" alt="Image 2" width={250} height={150} />
              </div>
              <div className="image-item">
              <img src="img2.jpg" alt="Image 3" width={250} height={150} />
              </div>
              <div className="image-item">
              <img src="img3.jpg" alt="Image 3" width={150} height={150} />
              </div>
            </div>
          </div>
        </section>


        <section id="ratings" className="section ratings-section">
          <div className="content3">
            <h2>Ratings &amp; Testimonials</h2>
            <Carousel autoPlay infiniteLoop showStatus={false}>
              {testimonialData.map((testimonial, index) => (
                <div key={index}>
                  <div className="rating-stars">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <span key={i} className="star"></span>
                    ))}
                  </div>
                  <p className="rating-name">{testimonial.name}</p>
                  <p className="testimonial">{testimonial.testimonial}</p>
                </div>
              ))}
            </Carousel>
          </div>
       </section>

       <section id="contact" className="section contact-section">
          <div className="content4">
            <div className="contact-details">
              <h2>Contact Details</h2>
              <p>Address: Shop No-123 Awing, Bhatki Park, Badlapur East, Thane - 421503 (Near Mangal More Karyala)</p>
              <p>Email: littlesunshine289@gmail.com</p>
              <p>Phone: +91 9619704844 / +91 8308912842</p>
            </div>
            <div className="social-media">
                <h2>Follow Us On</h2>
                <div className="social-icons">
                  <a href="https://www.facebook.com/people/Little-Sunshine/100064971131968/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/littlesunshine_badlapur2/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.youtube.com/@littlesunshine7342" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
          </div>
      </section>

      </div>

      <style jsx>{`
      
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");


        .body {
            margin: 0;
            padding: 0;

        }
        .page-container {
          height: 100vh;
          overflow: auto;
        }

        .navbar {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          background-color: rgba(254, 220, 86, 0.8); /* Glassmorphism background color */
          backdrop-filter: blur(9px); /* Glassmorphism effect */
          border-radius: 30px;
        }

        .navbar ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar li {
          margin-left: 20px;
          margin-right: 20px; /* Add margin-right to increase distance */
        }

        .navbar li a {
          color: #000;
          text-decoration: none;
          font-size: 18px;
        }


        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #000; /* Black font color */
        }

        .logo-image {
          width: 60px;
          height: 40px;
          margin-top: 1px;
          margin-right: 10px;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin-left: 10px;
        }

        li a {
          color: #000; /* Black font color */
          text-decoration: none;
        }

        .sections-container {
          padding-top: 0px;
          
           /* To push the sections below the navbar */
        }

        .content {
          text-align: center;
          background: rgba(254, 220, 86, 0.8); /* Glassmorphism background color */
          padding: 20px;
          border-radius: 30px;
          backdrop-filter: blur(4px); /* Glassmorphism effect */
        }


        .section {
          height: 100vh;
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-section {
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          color: #000; /* White font color */
          margin-top: 0; /* Remove margin over the home section */
        }


        .content1{
          text-align: center;
          background: rgba(0, 0, 0, 0.5); /* Glassmorphism background color */
          padding: 20px;
          border-radius: 30px;
          backdrop-filter: blur(5px); /* Glassmorphism effect */
        }

        .about-section {
            background: linear-gradient(135deg, #FEDC56, #FF9CAB); /* Gradient from yellow to darker pink */
            padding: 40px;
            color: #fff; /* White font color */
          }

          .about-section h2 {
            font-size: 28px;
            color: #fff; /* White font color */
            margin-bottom: 20px;
          }

          .about-section p {
            font-size: 16px;
            line-height: 1.5;
            color: #fff; /* White font color */
          }

          .about-section p:last-child {
            margin-bottom: 0; /* Remove bottom margin for the last paragraph */
          }


          .photos-section {
            background: linear-gradient(135deg, #0d0d2d 0%, #1e1e5a 50%, #0d0d2d 100%); /* Blueish gradient background color */
             color: #fff;
          }

          .content2 {
            text-align: center;
            background: rgba(255, 255, 255, 0.1); /* Glassmorphism background color */
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px); /* Glassmorphism effect */
          }

            .photos-section {
             width: 100%; /* Set the section width to 100% */
              }

              .image-gallery {
                display: flex;
                justify-content: space-between;
                /* Adjust the spacing and layout as needed */
                gap: 20px;
                margin-top: 20px;
              }

              .image-item {
                flex: 1;
              }

            


        .ratings-section {
          background: linear-gradient(135deg, #FF7F7F, #FF4D4D); /* Gradient from light red to dark red */
        color: #fff;
        }

        .content3 {
          text-align: center;
          padding: 20px;
          border-radius: 30px;
          background-color: rgba(0, 0, 0, 0.5); /* Dark color background with 50% opacity */
          backdrop-filter: blur(10px); /* Glassmorphism effect */
        }

        .rating-stars {
          margin-bottom: 10px;
        }

        .star {
            display: inline-block;
            width: 20px;
            height: 20px;
            background-color: #ffd700; /* Gold star color */
            margin-right: 5px;
          }

          .half-star {
            background-color: #ffd700; /* Gold star color */
            clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
          }

        .rating-name {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .testimonial {
          font-style: italic;
        }

        .contact-section {
          background: linear-gradient(135deg, #667eea, #764ba2); /* Light gray background color */
            padding: 50px;
          }

          .content4 {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .contact-details,
          .social-media {
            width: 45%;
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
            backdrop-filter: blur(8px); /* Glassmorphism effect */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
          }

          .contact-details h2,
          .social-media h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333; /* Dark gray font color */
          }

          .contact-details p {
            font-size: 16px;
            margin-bottom: 10px;
            color: #666; /* Gray font color */
          }

          .social-icons {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .social-icons a {
            color: #333; /* Dark gray font color */
            font-size: 24px;
            margin-right: 10px;
            transition: color 0.3s ease;
          }

          .social-icons a:hover {
            color: #000; /* Black font color on hover */
          }


        
      `}</style>
    </div>
  );
};

export default IndexPage;
