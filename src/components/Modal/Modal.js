import React from "react";
import Translate from "../../translations/Translate";

export default class Modal extends React.Component {
  render() {
    let modal = (
      <div className="modal">
        <button className="modal__closeicon" onClick={this.props.hideModal} />
        <div className="modal__content">{this.props.children}</div>
        <button className="modal__closebutton" onClick={this.props.hideModal}>
          <Translate string={"modal.close"} />
        </button>
      </div>
    );

    if (!this.props.showModal) {
      modal = null;
    }
    return <div>{modal}</div>;
  }
}
