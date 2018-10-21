import React from "react";

export default (props) => (
    <div className="content-wrapper">
        <section className="content-header">
            <h1>
                Dashboard
                <small>Version 2.0</small>
            </h1>
        </section>

        <section className="content">
            {props.children}
        </section>
    </div>
)