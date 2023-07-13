import React from 'react';


function AboutUs() {
let message = ``;
return (
<section className=" flex place-content-center section-white">

  <div className="container">

            <div className=" justify-content-center">

            <div className=" col-md-12 text-center">

            <h2 id ="about-us" className="section-title">The Team Behind Calpal</h2>

            <p className="section-subtitle">{message}</p>

            </div>

  <div className="flex  justify-center	items-stretch place-items-center place-content-center	 flex-nowrap flex-row gap-10 place-content-center">  

            <div className=" col-sm-6 col-md-4">

            <div className=" team-item">

                  <img src="https://www.linkpicture.com/q/345454302_249964134275081_1706394919925166623_n.jpeg" className="team-img" alt="pic" />
                  <h3>Goldie Rizova</h3>
                  <div className="team-info"><p>Software Engineer</p></div>

                  <ul className="team-icon">

                  <li><a href="https://github.com/Goldie369" target="_blank" rel="noreferrer" className="GitHub">
                  <i className="fa-brands fa-github"></i>
                  </a></li>

                  <li><a href="https://www.linkedin.com/in/zlatelina-rizova-6b7487266/" target="_blank" rel="noreferrer" className="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                  </a></li>


                  </ul>

            </div>
            </div>

            <div className="col-sm-6 col-md-4">

            <div className="team-item">

            <img src="https://www.linkpicture.com/q/me_3.jpg" className="team-img" alt="pic" />
            <h3>Mohamed Elhelw</h3>
            <div className="team-info"><p>Software Engineer</p></div>
            {/* <p>Full stack web developer with a passion for turning ideas into results</p> */}

            <ul className="team-icon">

            <li><a href="https://github.com/melhelow"  target="_blank" rel="noreferrer" className="GitHub">
            <i className="fa-brands fa-github"></i>
            </a></li>

            <li><a href="https://www.linkedin.com/in/mohamed-elhelw-76a888271/" target="_blank"  rel="noreferrer" className="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
            </a></li>



            </ul>


            </div>
            </div>

            <div className="col-sm-6 col-md-4">

            <div className="team-item">

            <img src="https://www.linkpicture.com/q/IMG_9280_1.jpg" className="team-img" alt="pic" />

            <h3>Matt Wagner</h3>

            <div className="team-info"><p>Junior Engineer</p></div>


            <ul className="team-icon">

            <li><a href="https://github.com/orgs/Bit-Bandits/people/mattwagner28" target="_blank" rel="noreferrer" className="GitHub">
            <i className="fa-brands fa-github"></i>
            </a></li>

            <li><a href="https://www.linkedin.com/in/matthewtwagner" target="_blank" rel="noreferrer" className="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
              </a></li>



            </ul>

            </div>

            </div>

            <div className="col-sm-6 col-md-4">

            <div className="team-item">

            <img src="https://www.linkpicture.com/q/hey-me.jpg" className="team-img" alt="pic" />

            <h3>José Segura</h3>

            <div className="team-info"><p>Junior Engineer</p></div>


            <ul className="team-icon">

            <li><a href="https://github.com/Jose-seg" target="_blank" rel="noreferrer" className="GitHub">
            <i class="fa-brands fa-github"></i>
            </a></li>

            <li><a href="https://www.linkedin.com/in/jose-segura-7a998319a" target="_blank" rel="noreferrer" className="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
              </a></li>


            </ul>

            </div>


            </div>
            <div className="col-sm-6 col-md-4">

            <div className="team-item">

            <img src="https://www.linkpicture.com/q/CoderAnthony.png" className="team-img" alt="pic" />

            <h3>Anthony Groce</h3>

            <div className="team-info"><p>Junior Engineer</p></div>


            <ul className="team-icon">

            <li><a href="https://github.com/AnthGrow" target="_blank"  rel="noreferrer" className="GitHub">
            <i class="fa-brands fa-github"></i>
            </a></li>

            <li><a href="https://www.linkedin.com/in/anthonygroce/" target="_blank" rel="noreferrer" className="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
              </a></li>



            </ul>

            </div>



            </div>

            </div>


            </div>
            </div>


</section>
)
}

export default AboutUs;


