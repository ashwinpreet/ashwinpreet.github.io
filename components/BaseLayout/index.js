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
		<div>
			<header className='site-header'>
				<div id={'logo-wrap'}>
					<Link href={'/'}>
						<span id={'logo-text'}>A</span>
					</Link>
				</div>
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
				{_theme && (
					<span>
						<i onClick={handleThemeChange} className={_theme == 'theme-dark' ? 'ri-sun-line' : 'ri-moon-line'} style={_theme == 'theme-dark' ? { color: 'white', fontSize: 20 } : { color: 'black', fontSize: 20 }} />
					</span>
				)}
			</header>
			<div className={'site-content'}>{props.children}</div>
			<footer className={'site-footer'}>
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
			</footer>
		</div>
	)
}

export default BaseLayout
