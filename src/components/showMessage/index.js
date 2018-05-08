import React from "react";
import { message } from "antd";

const showMessage = () => {
    const info = () => {
        message.info("This is a normal message");
    }

    return(
        <div 
            className="show-message-box"
            onClick={ info() }
        >
            
        </div>
    )
}

export default showMessage;