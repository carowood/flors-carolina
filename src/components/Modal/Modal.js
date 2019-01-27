import React from "react";
import Translate from "../../translations/Translate";

export default class Modal extends React.Component {
  render() {
    let modal = (
      <div className="modal">
        <button className="modal__closeicon" onClick={this.props.hideModal} />
        <div className="modal__content">{this.props.children}</div>
        <div
          className="modal__closebutton"
          id="closebutton"
          onClick={this.props.hideModal}
        >
          <Translate string={"modal.close"} />
        </div>
        <div className="modal__spacer" />
      </div>
    );

    if (!this.props.showModal) {
      modal = null;
    }
    return <div>{modal}</div>;
  }
}
