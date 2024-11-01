import { getAvailableNewsYears } from '@/lib/news';

export default function ArchiveNewsPage() {
	const links = getAvailableNewsYears();
	return (
		<header id="archive-header">
			<nav>
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={`/archive/${link}`}>{link}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
