import React from "react";

/**
 * 404ページ
 *
 * @param AppProps
 *
 * @returns React.FC
 */
const NotFound: React.FC = () => {
    return (
        <b>404 - Page Not Found</b>
    );
};

export default React.memo(NotFound);
