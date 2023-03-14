import React from "react";
import { useState } from "react";
import { Card } from "./card";
import { cloneElement } from "react";

export function Field({ formation }) {
  let players = [
    {
      name: "Tarnovanu",
      value: "67",
      position: "GK",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/568544-1631086819.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [65, 67, 65, 66, 41, 67],
    },
    {
      name: "Sorescu",
      value: "69",
      position: "RB",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/379209-1627301347.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [86, 66, 64, 68, 61, 73],
    },
    {
      name: "Tamm",
      value: "66",
      position: "CB",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/111556-1641743392.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [60, 52, 45, 51, 64, 79],
    },
    {
      name: "Cristea",
      value: "70",
      position: "CB",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/331971-1631086911.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [74, 38, 46, 55, 70, 77],
    },
    {
      name: "Radunovic",
      value: "69",
      position: "LB",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/144339-1631086944.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [77, 57, 63, 60, 65, 78],
    },
    {
      name: "EDJOUMA",
      value: "68",
      position: "CM",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/468704-1652260774.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [63, 55, 57, 65, 66, 78],
    },
    {
      name: "Sut",
      value: "67",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/433979-1631087307.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [71, 61, 61, 63, 65, 71],
    },
    {
      name: "Olaru",
      value: "72",
      position: "CM",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/395800-1631087222.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [82, 70, 72, 73, 63, 79],
    },
    {
      name: "Cordea",
      value: "68",
      position: "RW",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/435712-1631088546.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [85, 64, 65, 70, 36, 67],
    },
    {
      name: "Compagno",
      value: "66",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/287255-1661929174.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [47, 66, 46, 58, 32, 76],
    },
    {
      name: "Popescu",
      value: "72",
      position: "LW",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/797100-1631088497.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [82, 68, 69, 76, 31, 53],
    },
  ];

  const [currentCard, setcurrentCard] = useState(null);
  const [targetCard, settargetCard] = useState(null);

  const dragStart = (e) => {
    console.log("DragStart");
    setcurrentCard(e.currentTarget);
  };
  const drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drop");
    settargetCard(e.currentTarget);
  };
  const dragEnd = (e) => {
    e.stopPropagation();
    console.log("DragEnd");

    let target = targetCard.cloneNode(true);
    let current = currentCard.cloneNode(true);

    currentCard.removeChild(currentCard.firstChild);
    currentCard.appendChild(target);

    targetCard.removeChild(targetCard.firstChild);
    targetCard.appendChild(current);

    console.log(targetCard);
    console.log(currentCard);

    setcurrentCard(null);
    settargetCard(null);
  };
  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  let cardIndex = 0;
  const rows = formation.map((number, index) => (
    <div className="field-row" key={index}>
      {players.splice(0, number).map((player) => (
        <div
          className="card-wrapper"
          draggable={true}
          onDrop={drop}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          onDragOver={prevent}
          onDragEnter={prevent}
          onDragLeave={prevent}
        >
          <Card player={player} key={cardIndex++}></Card>
        </div>
      ))}
    </div>
  ));
  // console.log(index);

  return (
    <div className="field-wrapper">
      <img src="field.png" alt="" />
      <div className="field">{rows}</div>
    </div>
  );
}
