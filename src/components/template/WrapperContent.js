import React from "react";

export default (props) => (
    <div className="content-wrapper" style={{ minHeight: '650px'}}>
        <section className="content">
            {props.children}
        </section>
    </div>
)