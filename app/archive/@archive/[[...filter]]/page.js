import NewsList from '@/components/news-list';
import { getNewsForYear, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';

export default async function FilteredNewsPage({ params }) {
	const { filter } = await params;
	const news = getNewsForYear(filter);
	const links = getAvailableNewsYears();
	return (
		<>
			<header id="archive-header">
				<nav>
					<ul>
						{links.map((link, index) => (
							<li key={index}>
								<Link href={`/archive/${link}`}>{link}</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<NewsList news={news} />
		</>
	);
}
