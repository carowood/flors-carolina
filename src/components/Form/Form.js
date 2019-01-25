import React from "react";
import Translate from "../../translations/Translate";
import BtnSend from "../Btn-send/BtnSend";
import Icon from "../../assets/icons/icon-circle-tick.svg";
import Modal from "../Modal/Modal";
import TermsConditions from "../TermsConditions/TermsConditions";
import TermsConditionsES from "../TermsConditions/TermsConditionsES";

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
    displayConfirmationMessage: false,
    showModal: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      gdpr: e.target.checked,
      errorMessageClass: "error-message-hide",
      errorMessage: "",
      displayErrorMessage: false
    });
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
        errorMessage: <Translate string={"contact.errormessage-checkbox"} />,
        displayErrorMessage: true
      });
      return;
    }
    if (this.state.gdpr === true) {
      this.setState({
        displayErrorMessage: false
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
        if (response.status !== 200) {
          this.setState({
            errorMessage: <Translate string={"contact.errormessage-general"} />,
            displayErrorMessage: true
          });
        } else {
          this.setState({
            confirmationMessage: <Translate string={"contact.message-sent"} />,
            displayConfirmationMessage: true,
            displayCustomerInformation: true
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: <Translate string={"contact.errormessage-general"} />,
          displayErrorMessage: true
        });
      });
  };

  render() {
    let terms =
      this.props.lang === "en" ? <TermsConditions /> : <TermsConditionsES />;

    return (
      <React.Fragment>
        <Modal
          showModal={this.state.showModal}
          hideModal={e => this.setState({ showModal: false })}
        >
          {terms}
        </Modal>
        <div className="form-box-container">
          <div
            className={
              this.state.displayConfirmationMessage
                ? "confirmation-message-display"
                : "confirmation-message-hide"
            }
          >
            <p>{this.state.confirmationMessage}</p>
            <img className="icon" src={Icon} alt="Message sent!" />
          </div>

          <div
            className={
              this.state.displayCustomerInformation
                ? "user-information-display"
                : "user-information-hide"
            }
          >
            <div className="customer-info">
              <p className="info-label">
                <Translate string={"contact.name"} />
              </p>
              <p className="info-data">{this.state.form_name}</p>
            </div>
            <div className="customer-info">
              <p className="info-label">
                <Translate string={"contact.email"} />
              </p>
              <p className="info-data">{this.state.form_email}</p>
            </div>
            <div className="customer-info">
              <p className="info-label">
                <Translate string={"contact.telephone"} />
              </p>
              <p className="info-data">{this.state.form_tel}</p>
            </div>
            <div className="customer-info">
              <p className="info-label">
                <Translate string={"contact.message"} />
              </p>
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
              <span className="requiredMessage">
                {this.state.emailRequired}
              </span>
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
              <div
                onClick={e => this.setState({ showModal: true })}
                className="checkbox-description"
              >
                <Translate string={"contact.formcheckbox-agree"} />
                <span className="terms-of-service">
                  <Translate string={"contact.formcheckbox-termsofservice"} />
                </span>
              </div>
            </div>
            <div className="button">
              <BtnSend>
                <Translate string={"contact.formsendbtn"} />
              </BtnSend>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
