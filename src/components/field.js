import React from "react";
import { useState } from "react";
import { Card } from "./card";
import { cloneElement } from "react";

export function Field({ formation }) {
  let players = [
    {
      name: "Tarnovanu",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/568544-1631086819.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Sorescu",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/379209-1627301347.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Tamm",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/111556-1641743392.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Cristea",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/331971-1631086911.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Radunovic",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/144339-1631086944.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "EDJOUMA",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/468704-1652260774.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Sut",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/433979-1631087307.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Olaru",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/395800-1631087222.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Cordea",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/435712-1631088546.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Compagno",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/287255-1661929174.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
    },
    {
      name: "Popescu",
      value: "94",
      position: "ST",
      photo:
        "https://img.a.transfermarkt.technology/portrait/header/797100-1631088497.png?lm=1",
      club: "/clubs/steaua.png",
      country: "/flags/romania.png",
      stats: [99, 99, 99, 99, 99, 99],
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

    // targetCard = currentCard;

    // let target = cloneElement(targetCard.firstElementChild);
    // let current = cloneElement(currentCard.firstElementChild);

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
