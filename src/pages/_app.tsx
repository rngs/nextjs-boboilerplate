import { AppProps } from 'next/app';
import React from 'react';

/**
 * 初期化コンポーネント
 *
 * @param AppProps
 *
 * @returns React.FC<AppProps>
 */
const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
