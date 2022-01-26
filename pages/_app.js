import React, { useState } from 'react'
import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import BaseLayout from '../components/BaseLayout'
import Router, { useRouter } from 'next/router'
import { KBarAnimator, KBarProvider, KBarPortal, useDeepMatches, KBarPositioner, KBarSearch, KBarResults } from 'kbar'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	const actions = [
		{
			id: 'home',
			name: 'Home',
			shortcut: ['g', 'h'],
			keywords: 'go-home',
			section: 'Go To',
			perform: () => router.push('/')
		},
		{
			id: 'blog',
			name: 'Blog',
			shortcut: ['b'],
			keywords: 'writing words',
			perform: () => (window.location.pathname = 'blog')
		},
		{
			id: 'code-snippet',
			name: 'Code Snippets',
			shortcut: ['c'],
			keywords: 'code, code-snippet',
			perform: () => (window.location.pathname = 'code-snippet')
		},
		{
			id: 'about',
			name: 'About',
			shortcut: ['a'],
			keywords: 'About',
			perform: () => (window.location.pathname = 'about')
		}
	]

	React.useEffect(() => {
		const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		document.querySelector('html').dataset.theme = `theme-${isOsDark ? 'dark' : 'light'}`
	}, [])

	return (
		<KBarProvider actions={actions}>
			<KBarPortal>
				<KBarPositioner style={positionerStyle}>
					<KBarAnimator className='kbar-blur' style={animatorStyle}>
						<KBarSearch style={searchStyle} placeholder='Type a command or search…' />
						<RenderResults />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		</KBarProvider>
	)
}

function RenderResults() {
	const { results } = useDeepMatches()

	return <KBarResults items={results} onRender={({ item, active }) => (typeof item === 'string' ? <div style={groupNameStyle}>{item}</div> : <ResultItem action={item} active={active} />)} />
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
	return (
		<div ref={ref} style={getResultStyle(active)}>
			<div style={actionStyle}>
				{action.icon && action.icon}
				<div style={actionRowStyle}>
					<span>{action.name}</span>
				</div>
			</div>
			{action.shortcut?.length ? (
				<div aria-hidden style={shortcutStyle}>
					{action.shortcut.map((shortcut) => (
						<kbd key={shortcut} style={kbdStyle}>
							{shortcut}
						</kbd>
					))}
				</div>
			) : null}
		</div>
	)
})

const positionerStyle = {
	position: 'fixed',
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'center',
	width: '100%',
	inset: '0px',
	padding: '14vh 16px 16px',
	background: 'rgba(0, 0, 0, .8)',
	boxSizing: 'border-box'
}

const animatorStyle = {
	maxWidth: '600px',
	width: '100%',
	color: '#08070b',
	borderRadius: '8px',
	overflow: 'hidden'
}

const searchStyle = {
	padding: '12px 16px',
	fontSize: '16px',
	width: '100%',
	boxSizing: 'border-box',
	outline: 'none',
	border: 'none',
	margin: 0,
	background: '#ececec',
	color: '#08070b'
}

const groupNameStyle = {
	padding: '8px 16px',
	fontSize: '10px',
	textTransform: 'uppercase',
	letterSpacing: '1px',
	background: '#ececec'
}

const iconStyle = {
	fontSize: '20px',
	position: 'relative',
	top: '-2px'
}

const kbdStyle = {
	padding: '4px 8px',
	textTransform: 'uppercase',
	color: '#cccccc',
	background: 'rgba(255, 255, 255, .1)'
}

const shortcutStyle = {
	display: 'grid',
	gridAutoFlow: 'column',
	gap: '4px'
}

const actionStyle = {
	display: 'flex',
	gap: '8px',
	alignItems: 'center'
}

const actionRowStyle = {
	display: 'flex',
	flexDirection: 'column'
}

const getResultStyle = (active) => {
	return {
		padding: '12px 16px',
		background: active ? 'rgba(255, 255, 255, 0.1)' : '#ececec',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 0,
		cursor: 'pointer',
		color: active ? '#08070b' : '#cccccc'
	}
}

export default MyApp
