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
                <span>89</span>
                <span>pac</span>
              </li>
              <li>
                <span>94</span>
                <span>sho</span>
              </li>
              <li>
                <span>81</span>
                <span>pas</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>90</span>
                <span>dri</span>
              </li>
              <li>
                <span>33</span>
                <span>def</span>
              </li>
              <li>
                <span>83</span>
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
