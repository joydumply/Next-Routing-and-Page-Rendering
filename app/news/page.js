import NavLink from '@/components/main-header/nav-link';
import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
	return (
		<div>
			<h1>News Page</h1>
			<p>Welcome to the news page. Stay tuned for updates!</p>

			<ul className="news-list">
				{DUMMY_NEWS.map((newsItem) => (
					<li key={newsItem.id}>
						<Link href={`/news/${newsItem.slug}`}>
							<img
								src={`/images/news/${newsItem.image}`}
								alt={newsItem.title}
							/>
							{newsItem.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
