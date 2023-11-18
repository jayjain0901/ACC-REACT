import React, { useState } from "react";
import "../../src/styles/card.css";
import data from "../../src/data/data.json";

class Card extends React.Component {
  state = {
    data,
  };
  render() {
    console.log({ data });
    return (
      <div className="github-profile">
        {
          data.map((jfile) => {
            return (
              <div>
                <img style={{width : 75}} src={jfile.avatar_url} />
                <div className="info">
                  <div className="name">{jfile.name}</div>
                  <div className="company">{jfile.company}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Card;
