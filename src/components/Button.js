import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import {withAuthenticator} from '@aws-amplify/ui-react';

function Button(signOut, user) {
  return (
    <div>
      <button className="btn" onClick={signOut}>Sign Out</button>
      {/* This is not working */}
    </div>
    
  );
}

export default withAuthenticator(Button);