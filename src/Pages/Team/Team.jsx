import React from 'react';
import './Team.css';
const Team = () => {
  return (
    <div class="containerTeam">

        <div class="navbar">
            <img src="../../images/Logo.jpg" alt="logo" class="logo"/>
            {/* <nav>
                <ul>
                    <li><a href="">OUR TEAM</a></li>
                    <li><a href="">CONTACT US</a></li>
                    <li><a href="">ABOUT US</a></li>
                </ul>
            </nav> */}
        </div>

        <div class="row">
            
            <div class="col">
                <h1>OUR TEAM</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae laudantium, praesentium ea
                    expedita nisi architecto minus laboriosam neque, sequi reprehenderit debitis. Saepe, magni deserunt
                    beatae error quaerat quam placeat et!</p>
            </div>
            <div>
                <div class="col">
                    <div class="card card1">
                        <div class="Name">
                            
                            <p>Anil</p>
                            <h5>Front-End Developer</h5>
                        </div>

                    </div>
                    <div class="card card2">
                        <div class="Name">
                            
                            <p>Sweta</p>
                            <h5>Front-End Developer</h5>
                        </div>
                    </div>
                    <div class="card card3">
                        <div class="Name">
                            
                            <p>Bhabani</p>
                            <h5>Back-End Developer</h5>
                        </div>

                    </div>
                    <div class="card card4">
                        <div class="Name">
                            
                            <p>Nirjharani</p>
                            <h5>Back-End Developer</h5>
                        </div>

                    </div>
                    <div class="card card5">
                        <div class="Name">
                            
                            <p>Arati</p>
                            <h5>Back-End Developer</h5>
                        </div>

                    </div>
                    <div class="card card6">
                        <div class="Name">
                            
                            <p>Pradeep</p>
                            <h5>Designer</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Team;
