import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export default function BlogDetail({ postData }) {
	return (
		<div>
			<h1>{postData.title}</h1>
			<div>{postData.date}</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</div>
	)
}
