import React from "react";

export function Card({ player }) {
  return (
    // <div className="card-wrapper" draggable>
    <div className="container">
      <img className="card-bk" src="card-bks/gold.png" alt="" />
      <div className="card">
        <div className="card-top">
          <div className="info">
            <div className="value">
              <span>{player.value}</span>
            </div>
            <div className="position">
              <span>{player.position}</span>
            </div>
            <div className="country">
              <img src={player.country} alt="" />
            </div>
            <div className="club">
              <img src={player.club} alt="" />
            </div>
          </div>
          <div className="image">
            <img src={player.photo} alt="" />
          </div>
        </div>
        <div className="card-bottom">
          <div className="name">{player.name}</div>
          <div className="stats">
            <ul>
              <li>
                <span>{player.stats[0]}</span>
                <span>pac</span>
              </li>
              <li>
                <span>{player.stats[1]}</span>
                <span>sho</span>
              </li>
              <li>
                <span>{player.stats[2]}</span>
                <span>pas</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>{player.stats[3]}</span>
                <span>dri</span>
              </li>
              <li>
                <span>{player.stats[4]}</span>
                <span>def</span>
              </li>
              <li>
                <span>{player.stats[5]}</span>
                <span>phy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
