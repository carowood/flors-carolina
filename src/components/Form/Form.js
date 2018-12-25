import React from "react";
import Translate from "../../translations/Translate";
import BtnSend from "../Btn-send/BtnSend";

export default class Form extends React.Component {
  render() {
    return (
      <form className="form-group">
        <label htmlFor="name">
          <Translate string={"contact.name"} />
          <span className="required">*</span>
        </label>
        <input className="form-field" name="name" type="text" />
        <label htmlFor="email">
          <Translate string={"contact.email"} />
          <span className="required">*</span>
        </label>
        <input className="form-field" name="email" type="text" />
        <label htmlFor="telephone">
          <Translate string={"contact.telephone"} />
          <span className="required">*</span>
        </label>
        <input className="form-field" name="telephone" type="number" />
        <label htmlFor="message">
          <Translate string={"contact.message"} />{" "}
          <span className="required">*</span>
        </label>
        <textarea
          className="form-field"
          name="message"
          id="message-field"
          cols="30"
          rows="10"
        />
        <div className="button">
          <BtnSend>
            <Translate string={"contact.formsendbtn"} />
          </BtnSend>
        </div>
      </form>
    );
  }
}
