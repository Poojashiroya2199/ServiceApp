import React from "react";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SecurityIcon from "@material-ui/icons/Security";
export default function Service() {
  return (
    <div className="service">
      <div className="servicedetail">
        <div className="shipping">
          <AirportShuttleIcon fontSize="large" />
        </div>
        <div className="servicename"> Free Shipping</div>
        <div className="serviceoffer">Free shipping for all US order</div>
      </div>
      <div className="servicedetail">
        <div className="shipping">
          <HeadsetMicIcon fontSize="large" />
        </div>
        <div className="servicename">Support 24/7</div>
        <div className="serviceoffer">We support 24hr a day</div>
      </div>
      <div className="servicedetail">
        <div className="shipping">
          <CreditCardIcon fontSize="large" />
        </div>
        <div className="servicename">100% Money Back</div>
        <div className="serviceoffer">We have 30days to return</div>
      </div>
      <div className="servicedetail">
        <div className="shipping">
          <SecurityIcon fontSize="large" />
        </div>
        <div className="servicename">Payment Secure</div>
        <div className="serviceoffer">We ensure secure payment</div>
      </div>
    </div>
  );
}
