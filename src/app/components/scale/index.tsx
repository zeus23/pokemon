import React from "react";

const Scale = (props: any) => {
    const { completed } = props;

    const containerStyles = {
        height: 3,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: completed > 50 ? 'green' : 'red',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    );
};

export default Scale;