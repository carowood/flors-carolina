import React from "react";
import TextBox from "../TextBox/TextBox";

export default class ImageContainerLarge extends React.Component {
  render() {
    let text =
      "“Les flors es regalen des del moment que neixes, fins al moment que faltes. Moments molt feliços i moments molt tristos. Però entre aquest període, que és la vida, la flor sempre ens acompanya” ";
    return (
      <div className="container">
        <div className="container__top">
          {/* <img
            className="container__top__background"
            src="/images/background.jpg"
            alt="Flowers by Flors Carolina"
          /> */}
          <TextBox text={text} />
        </div>

        <div className="container__middle">
          <div className="container__middle__border">
            <h1 className="container__middle__border__title">Our Story</h1>
            <img src="" alt="" className="container__middle__border__img-one" />
            <img src="" alt="" className="container__middle__border__img-two" />
            <p className="container__middle__border__bodytext">
              Middle: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a href="#" className="container__middle__border__link">
              Read more
            </a>
          </div>
        </div>
        <div className="container__bottom">
          <div className="container__bottom__border">
            <h1 className="container__middle__border__title">Our Services</h1>
            <img src="" alt="" className="container__middle__border__img-one" />
            <img src="" alt="" className="container__middle__border__img-two" />
            <p className="container__middle__border__bodytext">
              Middle: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a href="#" className="container__middle__border__link">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
