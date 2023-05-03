import React, { useState } from 'react';
import AboutUs from '../components/AboutUs';
import '../styles/Home.css';

function Home(props) {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(false);

  // const changeTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    // <div className={isDarkTheme ? 'dark' : 'light'}>
    //   <h1>Welcome to Employee Trip Manager</h1>
    //   <p>Use the navigation menu to manage employees, trips, and drivers.</p>
    //   <h1>{props.name}</h1>
    //   {isExpanded ? (
    //     <>
    //       <p>
    //         The sun had just risen over the horizon, casting a warm glow over
    //         the tranquil meadow. The grass was still dewy and sparkled in the
    //         morning light, while a light mist hovered over the nearby stream.
    //         The sound of birdsong filled the air, and a gentle breeze carried
    //         the sweet scent of wildflowers. A lone deer grazed peacefully in
    //         the distance, undisturbed by the quiet solitude of the early
    //         morning. It was a peaceful and serene scene, and for a moment, all
    //         was right with the world.
    //         <span className="read-more" onClick={toggleExpand}>Read Less</span>
    //       </p>
          
    //     </>
    //   ) : (
    //     <>
    //       <p>The sun had just risen over the horizon, casting a warm glow over
    //         the tranquil meadow. <span className="read-more" onClick={toggleExpand}>Read More</span></p>
          
    //     </>
    //   )}
    //   <h1>{props.age}</h1>
    //   <AboutUs name={props}></AboutUs>
    //   <button onClick={changeTheme}>Change Theme</button>
    // </div>
    <div>Home</div>
  );
}

export default Home;
