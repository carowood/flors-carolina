import React from "react";
import FacebookIcon from "../../assets/icons/socialmedia/facebook.svg";
import InstagramIcon from "../../assets/icons/socialmedia/instagram.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__instagram">
          <a
            href="https://www.instagram.com/florscarolinabcn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="footer__facebook">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
        <div className="footer__contactinfo">
          <p>Tel. 93 302 3028 </p>
          <p>La Rambla, 93</p>
          <p>08002 Barcelona</p>
        </div>
      </div>
    );
  }
}
