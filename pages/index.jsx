import Head from 'next/head';

import { PostWidget, PostCard, Categories } from '../components';
import {FeaturedPosts} from '../sections';
import { getPosts } from '../services';


const Home = ({posts}) => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<FeaturedPosts/>
			<Head>
				<title>Blog App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post, index) => <PostCard key={post.title} id={index} post={post.node} />)}
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return { props: { posts } };
}
