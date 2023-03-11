import "../css/extraInformation.scss";

import doneIcon from "../icon/done.png";
import clientIcon from "../icon/client.png";
import repeatIcon from "../icon/repeat.png";
import teamIcon from "../icon/team.png";

const ExtraInformation = () => {
  return (
    <div id="extra">
      <div className="container90rem">
        <div className="cards">
          <div className="card">
            <img src={doneIcon} alt="doneIcon" />
            <div className="cardText ">
              <p>150+</p>
              <h3>Project Completed</h3>
            </div>
          </div>
          <div className="card">
            <img src={clientIcon} alt="clientIcon" />
            <div className="cardText ">
              <p>53+</p>
              <h3>Happy Clients</h3>
            </div>
          </div>
          <div className="card">
            <img src={repeatIcon} alt="repeatIcon" />
            <div className="cardText ">
              <p>25+</p>
              <h3>Repeated Clients</h3>
            </div>
          </div>
          <div className="card">
            <img src={teamIcon} alt="teamIcon" />
            <div className="cardText ">
              <p>13+</p>
              <h3>Team Members</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInformation;
