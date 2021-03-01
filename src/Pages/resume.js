import React from "react";
import "./resume.css";
import bp from "../images/bp_logo.png";
import soldyn from "../images/soldyn_logo.png";
import ou from "../images/OU_logo.png";
import occc from "../images/OCCC_logo.png";
import prof_pic from "../images/Prof_pic.jpeg";

export default function Resume() {
  return (
    <>
      <div className="resume-container">
        <div className="resume-top-container">
          <div className="resume-name">
            <h2>Andy</h2>
            <h2>Czeropski</h2>
          </div>
          <div className="resume-prof-pic">
            <img src={prof_pic} alt="Andy's profile picture" id="prof-img" />
          </div>
          <div className="resume-careers-container">
            <div className="resume-careers-wrapper">
              <h3 id="data-science">Data Scientist</h3>
              <h3 id="engineer">Engineer</h3>
              <h3 id="software-development">Software Developer</h3>
            </div>
          </div>
        </div>
        <hr className="resume-hr" />
        <div className="resume-center-container">
          <div className="resume-skills-container">
            <h2 id="skills">Skills.</h2>
            <div className="resume-skills-wrapper">
              <h3 id="data-science">Data Science</h3>
              <div className="resume-data-science">
                <div className="skill-col">
                  <p>Python</p>
                  <p>scikit-learn</p>
                  <p>FastAI</p>
                </div>
                <div className="skill-col">
                  <p>TensorFlow</p>
                  <p>Azure Services</p>
                  <p>Reinforcement Learning</p>
                </div>
                <div className="skill-col">
                  <p>PyTorch</p>
                  <p>Bonsai</p>
                  <p>Pandas/Numpy</p>
                </div>
              </div>
              <h3 id="engineer">Engineering</h3>
              <div className="resume-engineer">
                <div className="skill-col">
                  <p>SolidWorks</p>
                  <p>MS Excel</p>
                  <p>FEA</p>
                </div>
                <div className="skill-col">
                  <p>Catia</p>
                  <p>PowerBI</p>
                  <p>Git</p>
                </div>
                <div className="skill-col">
                  <p>MatLab</p>
                  <p>C++</p>
                  <p>Ansys</p>
                </div>
              </div>
              <h3 id="software-development">Software Development</h3>
              <div className="resume-software-developer">
                <div className="skill-col">
                  <p>HTML </p>
                  <p>node</p>
                  <p>Python</p>
                </div>
                <div className="skill-col">
                  <p>CSS</p>
                  <p>React</p>
                  <p>UI</p>
                </div>
                <div className="skill-col">
                  <p>Javascript</p>
                  <p>SQL</p>
                  <p>JSON</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-interests-container">
            <h2 id="education">Education.</h2>
            <div className="resume-education-wrapper">
              <div className="resume-education">
                <div className="resume-ou">
                  <div className="resume-school-logo">
                    <img src={ou} alt="University of Oklahoma" />
                  </div>
                  <div className="resume-school-text">
                    <p>University of Oklahoma </p>
                    <p>BSc. Mechanical Engineering</p>
                    <p>2016:2018 - Norman, Oklahoma</p>
                  </div>
                </div>
                <div className="resume-occc">
                  <div className="resume-school-logo">
                    <img src={occc} alt="Oklahoma City Community College" />
                  </div>
                  <div className="resume-school-text">
                    <p>Oklahoma City Community College </p>
                    <p>ASc. Math/Engineering</p>
                    <p>2014:2016 - Oklahoma City, Oklahoma</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-passions-container">
              <h2 id="passions">Passions.</h2>
              <div className="resume-passions-wrapper">
                <div className="resume-passions">
                  <div className="resume-passions-top">
                    <div>
                      <i class="fas fa-laptop-code"></i>
                      <p>Coding</p>
                    </div>
                    <div>
                      <i class="fas fa-piggy-bank"></i>
                      <p>Finance</p>
                    </div>
                    <div>
                      <i class="fas fa-home"></i>
                      <p>Real Estate</p>
                    </div>
                    <div>
                      <i class="fas fa-car"></i>
                      <p>Cars</p>
                    </div>
                  </div>
                  <div className="resume-passions-bottom">
                    <div>
                      <i class="fas fa-dumbbell"></i>
                      <p>Lifting</p>
                    </div>
                    <div>
                      <i class="fas fa-campground"></i>
                      <p>Camping</p>
                    </div>
                    <div>
                      <i class="fas fa-fish text-center"></i>
                      <p>Fishing</p>
                    </div>
                    <div>
                      <i class="fas fa-gamepad"></i>
                      <p>Gaming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-bottom-container">
          <div className="resume-exp-container">
            <h2 id="experience">Experience.</h2>
            <div className="resume-exp-wrapper">
              <div className="resume-bp-container">
                <div id="bp-logo">
                  <img src={bp} alt="bp" />
                </div>
                <div className="resume-bp-roles">
                  <div>
                    <h4>Data Scientist, Advanced Analytics — bp </h4>
                    <h5>Oct. 2020 - Present</h5>
                    <ul>
                      <li>
                        AirBP - Led a team of 10 that delivered a 99.5%+
                        accurate aviation fuel decal classifier using PyTorch
                        and TensorFlow. I then ported our model to an Android
                        app so it could be used in the field. I utilized LIME
                        and GradCAM for explainability of our model.
                      </li>
                      <li>
                        SPOT Vision - I worked with the Boston Dynamics robot
                        dog SPOT to create a mask RCNN model to identify objects
                        on the GoM Mad Dog rig. Utilized both FastAI and Keras
                        SSD, as well as the COCO dataset.
                      </li>
                      <li>
                        NEAT - Using the Neuro Evolution of Augmenting
                        Topologies algorithm, I created and evaluated AI agents
                        in the classic game of Flappy Birds. The AI agents were
                        able to completely autonomously beat the game with no
                        inputs from the user.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4>GOM Subsea Project Engineer — bp</h4>
                    <h5>Oct. 2019 - Sep. 2020</h5>
                    <ul>
                      <li>
                        Successfully refurbished and delivered a $4.5mm subsea
                        Christmas tree, beating schedule by 3 weeks.
                      </li>
                      <li>
                        Led a BP aftermarket initiative to test, reuse, and
                        redeploy subsea Christmas trees when possible, resulting
                        in savings of $4mm in 2020 for BP, and $12mm of
                        potential savings for 2021.
                      </li>
                      <li>
                        Responsible for delivering refurbished subsea equipment
                        including trees, tubing hangers, chokes, tree caps,
                        crown plugs, etc.
                      </li>
                      <li>
                        Coordinate mobilization/demobilization of refurbished
                        subsea equipment to and from offshore
                      </li>
                      <li>
                        Manage suppliers and contractors to ensure they are
                        meeting BP specifications related to safety, quality,
                        cost, and delivery of equipment.
                      </li>
                      <li>
                        Oversee factory acceptance testing, pre-deployment
                        testing, and final factory inspections for refurbished
                        subsea trees.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4>Discipline Tree Engineer — bp </h4>
                    <h5>Jun. 2018 - Oct. 2019</h5>
                    <ul>
                      <li>
                        Led risk assessment activities to ensure new subsea tree
                        designs were safe and fit for service.
                      </li>
                      <li>
                        Established self-verification activities for subsea tree
                        designs and ensured proper execution.
                      </li>
                      <li>
                        Verified that new tree designs met industry standards,
                        regulatory requirements, and appropriate BP standards.
                      </li>
                      <li>
                        Implemented a common information hub to capture BP
                        subsea tree tribal knowledge, tree schematics, quick
                        reference guides, and other related tree documents.
                      </li>
                      <li>
                        Drove increased product value through cost savings and
                        cycle time reductions by supporting the industry led
                        initiative to standardize subsea trees.
                      </li>
                      <li>
                        Incorporated simplification, efficiency, continuous
                        improvement, and lessons learned into tree designs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="resume-soldyn-container">
                <div id="soldyn-logo">
                  <img src={soldyn} alt="solution dynamics" />
                </div>
                <div className="resume-soldyn-roles">
                  <div>
                    <h4>Mechanical Engineer - Solution Dynamics</h4>
                    <h5>May 2017 - Jan. 2018</h5>
                    <ul>
                      <li>
                        Created proprietary excel templates to estimate
                        cost/energy savings when installing variable frequency
                        drives on:
                        <ul>
                          <li>Single + Parallel Pumping Systems</li>
                          <li>Single + Parallel Fan Systems</li>
                          <li>Single + Parallel Cooling Tower Systems</li>
                        </ul>
                      </li>
                      <li>
                        Excel calculations resulted in a 17% energy usage
                        reduction across all 3 systems by intelligent sequencing
                        of equipment.
                      </li>
                      <li>
                        Performed a preliminary energy analysis at two cow
                        processing plants to identify cost saving opportunities
                        while collaborating with a team of engineers. Three
                        major opportunities found resulting in $360k worth of
                        savings.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
