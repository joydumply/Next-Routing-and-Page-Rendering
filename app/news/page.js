import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/news-list';

export default function NewsPage() {
	return (
		<div>
			<h1>News Page</h1>
			<p>Welcome to the news page. Stay tuned for updates!</p>

			<NewsList news={DUMMY_NEWS} />
		</div>
	);
}
