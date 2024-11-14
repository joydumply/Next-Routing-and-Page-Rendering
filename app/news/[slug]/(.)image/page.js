import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
	const { slug } = await params;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

	if (!newsItem) {
		notFound();
	}

	return (
		<div className="fullscreen-image">
			<h2>Intercepted!</h2>
			<img
				src={`/images/news/${newsItem.image}`}
				alt={newsItem.title}
			/>
		</div>
	);
}
