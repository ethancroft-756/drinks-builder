import React from "react";

const Subheading = (props) => {
    return <h2 className={props.className ? `subheading ${props.className}` : `subheading`}>{props.children}</h2>;
};

export default Subheading;
