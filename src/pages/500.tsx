import React from "react";

const InternalServerError: React.FC = () => {
    return (
        <b>500 - Internal Server Error</b>
    );
};

export default React.memo(InternalServerError);
