import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ashwin Preetham Lobo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div></div>
				<i className='fa fa-copy' style={{ color: 'red', fontSize: 16 }} />
				<strong>Ashwin Preetham Lobo</strong>
				<div>Principal Engineer at Envestnet | Yodlee</div>
				<div style={{ color: '#ececec' }}>Press ⌘ + k to Start</div>
			</main>
		</div>
	)
}
