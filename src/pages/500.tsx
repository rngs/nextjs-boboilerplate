import React from "react";

/**
 * 404ページ
 *
 * @param AppProps
 *
 * @returns React.FC
 */
const InternalServerError: React.FC = () => {
    return (
        <b>500 - Internal Server Error</b>
    );
};

export default React.memo(InternalServerError);
