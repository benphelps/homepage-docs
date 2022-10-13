export const SITE = {
	title: 'Homepage',
	description: 'A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://gethomepage.dev/homepage-og.png',
		alt: 'hompage dashboard with logo'
	},
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/benphelps/homepage-docs/tree/main/`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/k4ruYNrudu`;

export const GITHUB_URL = `https://github.com/benphelps/homepage`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Installation', link: 'en/installation' },
            { text: 'Docker', link: 'en/installation/docker' },
            { text: 'Unraid', link: 'en/installation/unraid' },
            { text: 'Source', link: 'en/installation/source' },
		],
		'Configuration': [
            { text: 'Services', link: 'en/configs/services' },
            { text: 'Service Widgets', link: 'en/configs/service-widgets' },
            { text: 'Information Widgets', link: 'en/configs/widgets' },
            { text: 'Bookmarks', link: 'en/configs/bookmarks' },
            { text: 'Docker', link: 'en/configs/docker' },
            { text: 'Settings', link: 'en/configs/settings' }
        ],
		'Contributing': [
            { text: 'Translations', link: 'en/contributing/translations' },
        ],
	},
};
