import React from "react";

export default (props) => (
    <div className="content-wrapper">
        <section className="content">
            {props.children}
        </section>
    </div>
)