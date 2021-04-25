import React, {useState, useEffect} from "react";
import './Home.css'
import { motion } from "framer-motion"
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.8,
        }}
        className="user-card">

            <Navbar className = "bar">
                <Navbar.Brand href="/" className = "nav-title">Be well</Navbar.Brand>
            </Navbar>

            <section className="top-panel">
                <div className="top-panel-container">
                    <div>
                        <h1 className="top-panel-title">Be <span>Well</span></h1>
                        <p className="top-panel-description">Life can get busy sometimes. From deciding what to eat to which workout to do, making these choices every day can get difficult and overwhelming. It's easy to forget to slow down and take a breath. Be Well is a quick and simple way to incorporate health, fitness, and self care into your day. After you choose an option from each category, we’ll surprise you with new resources each time! Whether you only have five minutes to spare on a workout or want to eat healthy but don’t know where to start, Be well can help!
</p>
                        <Link to="/select"><a href="#" type="button" className="portfolio-button">Start Your Day Here</a></Link>
                    </div>
                </div>
            </section>

        </motion.div>
    )
};

export default Home;