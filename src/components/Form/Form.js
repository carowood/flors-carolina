import React from "react";
import Translate from "../../translations/Translate";
import BtnSend from "../Btn-send/BtnSend";

export default class Form extends React.Component {
  state = {
    form_name: "",
    form_email: "",
    form_tel: "",
    form_msg: "",
    gdpr: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleCheckbox = e => {
    //e.preventDefault();
    console.log("etarget form", e.target.checked);
    this.setState({
      gdpr: e.target.checked
    });
    console.log(this.state);
  };

  submitForm = e => {
    e.preventDefault(); // Prevents page to reload when click on send button
    console.log("gdpr", this.state.gdpr);
    if (this.state.gdpr !== true) {
      this.setState({
        confirmationMessage:
          "Please check the box in order to send your message!"
      });
      return;
    }
    let data = {
      form_name: this.state.form_name,
      form_email: this.state.form_email,
      form_msg: this.state.form_msg,
      form_tel: this.state.form_tel
    };
    return fetch("/mailer.php", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({
          confirmationMessage: "Message sent!" + response
        });
        console.log("response", response);
      })
      .catch(error => {
        this.setState({
          confirmationMessage: "Something went wrong, try again!"
        });
      });
  };

  render() {
    return (
      <form className="form-group" method="POST" action="/mailer.php">
        <p>{this.state.confirmationMessage}</p>
        <label htmlFor="name">
          <Translate string={"contact.name"} />
          <span className="required">*</span>
        </label>
        <input
          onChange={this.handleChange}
          className="form-field"
          name="form_name"
          type="text"
          value={this.state.form_name}
        />
        <label htmlFor="email">
          <Translate string={"contact.email"} />
          <span className="required">*</span>
        </label>
        <input
          onChange={this.handleChange}
          className="form-field"
          name="form_email"
          type="text"
          value={this.state.form_email}
        />
        <label htmlFor="telephone">
          <Translate string={"contact.telephone"} />
          <span className="required">*</span>
        </label>
        <input
          onChange={this.handleChange}
          className="form-field"
          name="form_tel"
          type="number"
          value={this.state.form_tel}
        />
        <label htmlFor="message">
          <Translate string={"contact.message"} />{" "}
          <span className="required">*</span>
        </label>
        <textarea
          onChange={this.handleChange}
          className="form-field"
          name="form_msg"
          id="message-field"
          cols="30"
          rows="10"
        >
          {this.state.form_msg}
        </textarea>

        <div className="checkbox">
          <input
            onChange={this.handleCheckbox}
            type="checkbox"
            name="gdpr"
            value="acknowledged"
            required
          />
          {/* //Add translation HERE */}
          <p>Agree to the terms of service.</p>
        </div>

        <div className="button">
          <BtnSend onClick={this.submitForm}>
            <Translate string={"contact.formsendbtn"} />
          </BtnSend>
        </div>
      </form>
    );
  }
}
