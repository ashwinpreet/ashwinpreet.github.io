import Link from 'next/link'
import { useState, useEffect } from 'react'

const BaseLayout = (props) => {
	const [_theme, setTheme] = useState(null)

	let menuOptions = [
		{
			key: 'blog',
			label: 'Blog',
			path: '/blog'
		},
		{
			key: 'code-snippets',
			label: 'Code Snippets',
			path: '/code-snippet'
		},
		{
			key: 'about',
			label: 'About',
			path: '/about'
		}
	]

	let footerLinks = [
		{
			key: 'linkedin',
			icon: 'ri-linkedin-line',
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/ashwinpreet/'
		},
		{
			key: 'github',
			icon: 'ri-github-line',
			label: 'GitHub',
			link: 'https://github.com/ashwinpreet'
		},
		{
			key: 'instagram',
			icon: 'ri-instagram-line',
			label: 'Instagram',
			link: 'https://www.instagram.com/ashwinpreet/'
		},
		{
			key: 'twitter',
			icon: 'ri-twitter-line',
			label: 'Twitter',
			link: 'https://twitter.com/ashwinpreet'
		}
	]

	let handleThemeChange = (e) => {
		const html = document.querySelector('html')
		let currentTheme = html.dataset.theme

		if (!currentTheme) {
			const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			document.querySelector('html').dataset.theme = `theme-${isOsDark ? 'dark' : 'light'}`
			return
		}

		if (currentTheme == 'theme-dark') {
			html.dataset.theme = 'theme-white'
			setTheme('theme-white')
		} else {
			html.dataset.theme = 'theme-dark'
			setTheme('theme-dark')
		}
	}

	useEffect(() => {
		setTheme(document.querySelector('html').dataset.theme)
	}, [_theme])

	return (
		<div id={'base-layout'}>
			<aside className='side-bar'>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
					<div style={{ borderRadius: '50%', height: 100, width: 100 }}>
						<img src='/favicon.svg' width={100} height={100} style={{ borderRadius: '50%', height: 100, width: 100 }} />
					</div>
				</div>
				<div style={{ fontSize: 24, margin: 'auto', textAlign: 'center', marginTop: 20, fontFamily: 'Lato-Bold' }}>Ashwin Preetham Lobo</div>
				<div>
					<ul id={'nav-wrap'}>
						{menuOptions.map((menuItem) => {
							return (
								<li key={menuItem.key} className='menu-item'>
									<Link href={menuItem.path}>
										<span>{menuItem.label}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<ul id={'footer-wrap'}>
					{footerLinks.map((footerElement) => {
						return (
							<li key={footerElement.key} className={'footer-element'}>
								<a href={footerElement.link} target='_blank' title={footerElement.label}>
									<i className={footerElement.icon + ' footer-icon'} />
								</a>
							</li>
						)
					})}
				</ul>
			</aside>
			<div className={'site-content'}>
				<div style={{ height: 24 }}>
					{_theme && (
						<span>
							<i onClick={handleThemeChange} className={_theme == 'theme-dark' ? 'ri-sun-line' : 'ri-moon-line'} style={_theme == 'theme-dark' ? { color: 'white', fontSize: 20 } : { color: 'black', fontSize: 20 }} />
						</span>
					)}
				</div>
				<div className='inner-content'>{props.children}</div>
			</div>
		</div>
	)
}

export default BaseLayout
