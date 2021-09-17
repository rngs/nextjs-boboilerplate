import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * HTML/BODYカスタムコンポーネント
 */
class DocumentRoot extends Document {
    /**
     * render
     *
     * @returns TSX
     */
    public render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default DocumentRoot;
