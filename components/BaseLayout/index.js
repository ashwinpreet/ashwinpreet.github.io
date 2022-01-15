import Link from 'next/link'

const BaseLayout = (props) => {
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

	return (
		<div>
			<header className='page-header'>
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
			</header>
			{props.children}
		</div>
	)
}

export default BaseLayout
