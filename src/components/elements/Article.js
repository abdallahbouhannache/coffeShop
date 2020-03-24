import React, { useState } from "react";
import { Image, Segment, Header } from "semantic-ui-react";
import "../styles/elements.css";

const Article = props => {
  const [artState, setstate] = useState({
    coffeeParaHead: "Coffe beans from brazil",
    coffeePara:
      "abdallah ipsum dolor sit amet " +
      ",consectetuer adipiscing elit.Aenean " +
      "commodoligula eget dolor.Aenean massa " +
      "strong.Cum sociis natoque penatibus " +
      "etmagnis dis parturient montes, nasddcetur " +
      "ridiculus mus.Donec quam felis, "
  });
  let loadStatus = false;
  return (
    <Segment loading={loadStatus} className="artWrp">
      {loadStatus === true ? (
        <Image src="/images/wireframe/paragraph.png" />
      ) : (
        <>
          <Header as="h1" className="headArt">
            {props.headContent || artState.coffeeParaHead}
          </Header>
          <p className="paraWrp" align="justify">
            {props.paragraph || artState.coffeePara}
          </p>
        </>
      )}
    </Segment>
  );
};

export default Article;
