import payMe from "../images/payme.jpeg";

import React from "react";

function Home() {
  return (
    <>
      <div className="container flex-center">
        <span>1</span>
        <div>
          <h3>Whom is this event intended for?</h3>
          <img src={payMe} alt="img" />
          <p>
            Rose event is organized for both aspiring and accomplished
            designers, developers and marketers around the world.
          </p>
        </div>
      </div>
      <div className="container flex items-start">
        <span>2</span>
        <div>
          <h3>Why should I come maybe it's a waste of time?</h3>
          <p>
            You should come to Rose this year because it will be one of the most
            information packed events of the year.
          </p>
        </div>
      </div>
      <div className="container flex items-start">
        <span>3</span>
        <div>
          <h3>Any restrictions that I should be aware of?</h3>
          <p>
            Yes you definitely need to leave your preconceptions behind, keep an
            open mind and enjoy the presentations.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
