import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../conf/GTracker'

export default class extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang

		return (
			<Html lang={lang ? lang : 'en-US'}>
				<Head>
					<meta charSet='utf-8' />
					<meta content='Ashwin Preetham Lobo' name='author' />
					<meta property='og:type' content='website' />

					<link rel='shortcut icon' href='/favicon.svg' />

					<script async src='https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}'></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${GA_TRACKING_ID}');
                            `
						}}
					/>
				</Head>
				<Main />
				<NextScript />
			</Html>
		)
	}
}
