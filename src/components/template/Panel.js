import React from "react";

export default (props) => {
    return (
        <div className={`box box-${props.type}`}>
            { props.title &&
              <div className="box-header">
                  <h1 className="box-title">{props.title}</h1>
              </div>
            }
            <div className="box-body">
                {props.children}
            </div>
        </div>
    )
}