import React from "react";

const ContentBlock = (props) => {
    return (
        <div
            className={
                props.className
                    ? `content-block ${props.className}`
                    : `content-block`
            }
        >
            {props.children}
        </div>
    );
};

export default ContentBlock;
