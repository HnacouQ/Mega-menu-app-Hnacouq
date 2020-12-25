import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

TestAlert.propTypes = {};

function TestAlert(props) {
  return (
    <div className="Container">
      <ReactNotification></ReactNotification>
      <h1>Test Notification...</h1>

      <HnacouQ></HnacouQ>
    </div>
  );
}

function HnacouQ(props) {
  const handleAlertReact = () => {
    store.addNotification({
      title: "Ckeck!!",
      message: "test",
      type: "success",
      container: "top-right",

      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };

  return (
    <div>
      <button onClick={handleAlertReact}>Please Me!!!</button>
    </div>
    // {this.props.fontFamily ? <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${this.props.fontFamily.replace(' ', '+')}:ital,wght@${this.props.fontVariant.indexOf('italic') > -1 ? '1' : '0'},${this.props.fontVariant.indexOf('regular') > -1 ? '400' : parseInt(this.props.fontVariant)}`} /> : null}
    // {this.state.fontFamily && this.state.fontFamily != this.props.fontFamily ? <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${this.state.fontFamily.replace(' ', '+')}:ital,wght@${this.props.fontVariant.indexOf('italic') > -1 ? '1' : '0'},${this.props.fontVariant.indexOf('regular') > -1 ? '400' : parseInt(this.props.fontVariant)}`} /> : null}
    // {googleapisParams.length ? (
    //     Array.from({ length: this.state.page }, (x, i) => <link key={'link-' + i} rel="stylesheet" href={`https://fonts.googleapis.com/css2?${googleapisParams.slice((i  50), ((i + 1)  50)).join('&')}`} />)
    // ) : null}
  );
}

export default TestAlert;
