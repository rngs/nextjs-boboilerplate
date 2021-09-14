import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentRoot extends Document {
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
