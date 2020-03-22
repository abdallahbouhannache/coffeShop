import React from "react";
import { Image, Segment, Header } from "semantic-ui-react";
import "../styles/elements.css";

const Article = props => {
  let loadStatus = false;
  return (
    <Segment loading={loadStatus} className="artWrp">
      {loadStatus === true ? (
        <Image src="/images/wireframe/paragraph.png" />
      ) : (
        <>
          <Header as="h1" className="headArt">
            {props.headContent || ""}
          </Header>
          <p className="paraWrp" align="justify">
            {props.paragraph ||
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo" +
                "ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et" +
                "magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,"}
          </p>
        </>
      )}
    </Segment>
  );
};

export default Article;
