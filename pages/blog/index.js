import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

export default function Blog({ allPostsData }) {
	return (
		<div>
			<h3>Articles</h3>
			<ul>
				{allPostsData.map(({ id, date, title }, index) => (
					<li key={index}>
						<Link href={`/blog/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<span>{date}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
