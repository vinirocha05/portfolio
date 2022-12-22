import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Atualmente ter uma identidade digital é muito importante, sem ele você é apenas mais um site na Internet. Mas é para isso que estou aqui, meu objetivo é tornar sua empresa competitiva no mundo digital gerando ganhos para seu negócio."
          />
          <meta
            name="keywords"
            content="site, criação front-end, desenvolvimento, digital, web"
          />
        </Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ24206WMG"
        ></script>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
