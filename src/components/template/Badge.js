import React from "react";

export default (props) => (
    <span className="badge btn-primary">
        {props.text}
        &nbsp;
        { props.remover && 
            <a onClick={props.remover}>
                <i className="fa fa-close text-white"></i>
            </a>
        }
    </span>
);