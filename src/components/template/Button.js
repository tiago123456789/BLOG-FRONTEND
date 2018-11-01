import React from "react";

export default (props) => (
    <button className={`btn btn-${props.size} btn-${props.color}`}>
        { props.children }
    </button>
);