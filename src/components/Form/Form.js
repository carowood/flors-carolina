import React from "react";
import Translate from "../../translations/Translate";
import BtnSend from "../Btn-send/BtnSend";
import Icon from "../../assets/icons/icon-circle-tick.svg";

export default class Form extends React.Component {
  state = {
    form_name: "",
    form_email: "",
    form_tel: "",
    form_msg: "",
    gdpr: false,
    errorMessage: "",
    emailInvalid: "",
    displayCustomerInformation: false,
    displayErrorMessage: false,
    displayConfirmationMessage: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleCheckbox = e => {
    console.log("etarget form", e.target.checked);
    this.setState({
      gdpr: e.target.checked,
      errorMessageClass: "errorMessage-hide",
      errorMessage: ""
    });
    console.log(this.state);
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({
      confirmationMessage: "",
      nameRequired: "",
      emailRequired: "",
      msgRequired: "",
      emailInvalid: ""
    });

    if (this.state.gdpr !== true) {
      this.setState({
        errorMessage: "Please check the box in order to send your message!",
        errorMessageClass: "errorMessage-display"
      });
      return;
    }
    if (this.state.gdpr === true) {
      this.setState({
        errorMessageClass: "errorMessage-hide"
      });
    }

    if (!this.state.form_name) {
      this.setState({
        nameRequired: <Translate string={"contact.nameRequired"} />
      });
    }
    if (!this.state.form_email) {
      this.setState({
        emailRequired: <Translate string={"contact.emailRequired"} />
      });
    }

    if (!this.state.form_msg) {
      this.setState({
        msgRequired: <Translate string={"contact.msgRequired"} />
      });
    }
    if (
      !this.state.form_email ||
      !this.state.form_name ||
      !this.state.form_msg
    ) {
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
        console.log(response.status);
        // if (response.status !== 200) {
        //   this.setState({
        //     errorMessage: "Something went wrong, try again!",
        //     displayErrorMessage: true
        //   });
        // } else {
        this.setState({
          confirmationMessage: "Message sent!",
          displayConfirmationMessage: true,
          displayCustomerInformation: true
        });
        //}
      })
      .catch(error => {
        this.setState({
          errorMessage: "Something went wrong, try again!",
          displayErrorMessage: true
        });
      });
  };

  render() {
    return (
      <div className="form-box-container">
        <div
          className={
            this.state.displayConfirmationMessage
              ? "confirmation-message-display"
              : "confirmation-message-hide"
          }
        >
          <p>{this.state.confirmationMessage}</p>
          <img className="icon" src={Icon} alt="Message sent!s" />
        </div>

        <div
          className={
            this.state.displayCustomerInformation
              ? "user-information-display"
              : "user-information-hide"
          }
        >
          <div className="customer-info">
            <p className="info-label">Name:</p>
            <p className="info-data">{this.state.form_name}</p>
          </div>
          <div className="customer-info">
            <p className="info-label">Email:</p>
            <p className="info-data">{this.state.form_email}</p>
          </div>
          <div className="customer-info">
            <p className="info-label">Telephone:</p>
            <p className="info-data">{this.state.form_tel}</p>
          </div>
          <div className="customer-info">
            <p className="info-label">Message:</p>
            <p className="info-data">{this.state.form_msg}</p>
          </div>
        </div>
        <form
          onSubmit={this.submitForm}
          className={
            this.state.displayCustomerInformation
              ? "form-group-hide"
              : "form-group"
          }
          method="POST"
          action="/mailer.php"
        >
          <div
            className={
              this.state.displayErrorMessage
                ? "error-message-display"
                : "error-message-hide"
            }
          >
            {this.state.errorMessage}
          </div>

          <label htmlFor="name">
            <Translate string={"contact.name"} />
            <span className="required">* </span>
            <span className="requiredMessage">{this.state.nameRequired}</span>
          </label>

          <input
            onChange={this.handleChange}
            className="form-field"
            name="form_name"
            type="text"
            value={this.state.form_name}
            required
          />

          <label htmlFor="email">
            <Translate string={"contact.email"} />
            <span className="required">*</span>
            <span className="requiredMessage">{this.state.emailRequired}</span>
            <span className="invalidEmail">{this.state.emailInvalid}</span>
          </label>
          <input
            onChange={this.handleChange}
            className="form-field"
            name="form_email"
            type="email"
            value={this.state.form_email}
            required
          />
          <label htmlFor="telephone">
            <Translate string={"contact.telephone"} />
          </label>
          <input
            onChange={this.handleChange}
            className="form-field"
            name="form_tel"
            type="text"
            value={this.state.form_tel}
          />
          <label htmlFor="message">
            <Translate string={"contact.message"} />{" "}
            <span className="required">*</span>
            <span className="requiredMessage">{this.state.msgRequired}</span>
          </label>
          <textarea
            onChange={this.handleChange}
            className="form-field"
            name="form_msg"
            id="message-field"
            cols="30"
            rows="3"
            value={this.state.form_msg}
            required
          />
          <div className="checkbox-container">
            <input
              className="checkbox"
              onChange={this.handleCheckbox}
              type="checkbox"
              name="gdpr"
              value="acknowledged"
              required
            />
            <p className="checkbox-description">
              <Translate string={"contact.formcheckbox"} />
            </p>
          </div>
          <div className="button">
            <BtnSend>
              <Translate string={"contact.formsendbtn"} />
            </BtnSend>
          </div>
        </form>
      </div>
    );
  }
}
