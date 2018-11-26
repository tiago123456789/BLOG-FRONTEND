import React from "react";

export default (props) => {
    return (
        <div>
            { props.display &&  <p className="text-bold">Nenhum registro encontrado!</p>}
        </div>
    )
}
