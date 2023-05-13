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
	indexName: 'gethomepage',
	appId: 'Y6AL4ARVMN',
	apiKey: 'a8ec8891c69515772ba7fee64b320f5d',
};

export type SidebarLink = { text: string; link?: string, links?: SidebarLink[] };

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, SidebarLink[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Installation', link: 'en/installation' },
            { text: 'Docker', link: 'en/installation/docker' },
            { text: 'Kubernetes', link: 'en/installation/k8s' },
            { text: 'Unraid', link: 'en/installation/unraid' },
            { text: 'Source', link: 'en/installation/source' },
		],
		'Configuration': [
            { text: 'Services', link: 'en/configs/services' },
            { text: 'Service Widgets', link: 'en/configs/service-widgets'},
            { text: 'Information Widgets', link: 'en/configs/widgets' },
            { text: 'Bookmarks', link: 'en/configs/bookmarks' },
            { text: 'Docker', link: 'en/configs/docker' },
            { text: 'Kubernetes', link: 'en/configs/kubernetes' },
            { text: 'Settings', link: 'en/configs/settings' }
        ],
        'Service Widgets': [
            { text: 'Streaming Media Providers', links: [
                { text: 'Channels DVR Server', link: 'en/services/channelsdvrserver' },
                { text: 'Emby', link: 'en/services/emby' },
                { text: 'Jellyfin', link: 'en/services/jellyfin' },
                { text: 'Plex (Tautulli)', link: 'en/services/plex-tautulli' },
                { text: 'Plex', link: 'en/services/plex' },
                { text: 'Navidrome', link: 'en/services/navidrome' },
                { text: 'Xteve', link: 'en/services/xteve' },
            ]},
            { text: 'Media Management Tools', links: [
                { text: 'Audiobookshelf', link: 'en/services/audiobookshelf' },
                { text: 'Bazarr', link: 'en/services/bazarr' },
                { text: 'Immich', link: 'en/services/immich' },
                { text: 'Jellyseerr', link: 'en/services/jellyseerr' },
                { text: 'Komga', link: 'en/services/komga' },
                { text: 'Lidarr', link: 'en/services/lidarr' },
                { text: 'Medusa', link: 'en/services/medusa' },
                { text: 'Mylar', link: 'en/services/mylar' },
                { text: 'Ombi', link: 'en/services/ombi' },
                { text: 'Overseerr', link: 'en/services/overseerr' },
                { text: 'PhotoPrism', link: 'en/services/photoprism' },
                { text: 'Radarr', link: 'en/services/radarr' },
                { text: 'Readarr', link: 'en/services/readarr' },
                { text: 'Sonarr', link: 'en/services/sonarr' },
            ]},
            { text: 'Download Clients', links: [
                { text: 'Autobrr', link: 'en/services/autobrr' },
                { text: 'Deluge', link: 'en/services/deluge' },
                { text: 'Flood', link: 'en/services/flood' },
                { text: 'Jackett', link: 'en/services/jackett' },
                { text: 'NZBGet', link: 'en/services/nzbget' },
                { text: 'Prowlarr', link: 'en/services/prowlarr' },
                { text: 'Pyload', link: 'en/services/pyload' },
                { text: 'qBittorrent', link: 'en/services/qbittorrent' },
                { text: 'ruTorrent', link: 'en/services/rutorrent' },
                { text: 'SABnzbd', link: 'en/services/sabnzbd' },
                { text: 'Transmission', link: 'en/services/transmission' },
            ]},
            { text: 'Network Utilities', links: [
                { text: 'AdGuard Home', link: 'en/services/adguard-home' },
                { text: 'Gluetun', link: 'en/services/gluetun' },
                { text: 'Gotify', link: 'en/services/gotify' },
                { text: "Health Checks", link: "en/services/healthchecks" },
                { text: 'Mikrotik', link: 'en/services/mikrotik' },
                { text: 'NextDNS', link: 'en/services/nextdns' },
                { text: 'PiHole', link: 'en/services/pihole' },
                { text: 'Speedtest Tracker', link: 'en/services/speedtest-tracker' },
                { text: 'Syncthing Relay Server', link: 'en/services/syncthing-relay-server' },
                { text: 'Synology Disk Station', link: 'en/services/diskstation' },
                { text: 'Synology Download Station', link: 'en/services/downloadstation' },
                { text: 'TP Link Omada', link: 'en/services/omada' },
                { text: 'Unifi Controller', link: 'en/services/unifi-controller' },
                { text: 'Uptime Kuma', link: 'en/services/uptime-kuma' },
            ]},
            { text: 'Network Infrastructure', links: [
                { text: 'Authentik', link: 'en/services/authentik' },
                { text: 'Cloudflare Tunnels', link: 'en/services/cloudflared' },
                { text: 'NGINX Proxy Manager', link: 'en/services/nginx-proxy-manager' },
                { text: 'OPNSense', link: 'en/services/opnsense' },
                { text: 'pfSense', link: 'en/services/pfsense' },
                { text: 'Portainer', link: 'en/services/portainer' },
                { text: 'Proxmox', link: 'en/services/proxmox' },
                { text: 'QNAP', link: 'en/services/qnap' },
                { text: 'Scrutiny', link: 'en/services/scrutiny' },
                { text: 'Traefik', link: 'en/services/traefik' },
                { text: 'Truenas', link: 'en/services/truenas' },
            ]},
            { text: 'Information Providers', links: [
                { text: 'Coin Market Cap', link: 'en/services/coin-market-cap' },
                { text: 'Mastodon', link: 'en/services/mastodon' },
            ]},
            { text: 'Other', links: [
                { text: 'Fileflows', link: 'en/services/fileflows' },
                { text: 'FreshRSS', link: 'en/services/freshrss' },
                { text: 'Ghostfolio', link: 'en/services/ghostfolio'},
                { text: 'Grafana', link: 'en/services/grafana' },
                { text: 'Home Assistant', link: 'en/services/homeassistant' },
                { text: 'Homebridge', link: 'en/services/homebridge' },
                { text: 'Kopia', link: 'en/services/kopia' },
                { text: 'Minecraft', link: 'en/services/minecraft'},
                { text: 'Miniflux', link: 'en/services/miniflux' },
                { text: 'Moonraker', link: 'en/services/moonraker' },
                { text: 'Nextcloud', link: 'en/services/nextcloud' },
                { text: 'OctoPrint', link: 'en/services/octoprint' },
                { text: 'Paperless-ngx', link: 'en/services/paperlessngx' },
                { text: 'Prometheus', link: 'en/services/prometheus' },
                { text: 'Proxmox Backup Server', link: 'en/services/proxmoxbackupserver' },
                { text: 'Pterodactyl', link: 'en/services/pterodactyl' },
                { text: 'Tdarr', link: 'en/services/tdarr' },
                { text: 'Tube Archivist', link: 'en/services/tubearchivist' },
                { text: 'Unmanic', link: 'en/services/unmanic' },
                { text: 'Watchtower', link: 'en/services/watchtower' },
                { text: 'Whats Up Docker', link: 'en/services/whatsupdocker' },
            ]},
        ],
        'Information Widgets': [
            { text: 'Resources', link: 'en/widgets/resources' },
            { text: 'OpenMeteo', link: 'en/widgets/openmeteo' },
            { text: 'OpenWeatherMap', link: 'en/widgets/openweathermap' },
            { text: 'Weather API', link: 'en/widgets/weather' },
            { text: 'Search', link: 'en/widgets/search' },
            { text: 'Date & Time', link: 'en/widgets/datetime' },
            { text: 'Greeting', link: 'en/widgets/greeting' },
            { text: 'Logo', link: 'en/widgets/logo' },
            { text: 'Unifi Controller', link: 'en/widgets/unifi_controller' },
            { text: 'Glances', link: 'en/widgets/glances' },
            { text: 'Kubernetes', link: 'en/widgets/kubernetes' },
            { text: 'Longhorn', link: 'en/widgets/longhorn' }
        ],
		'More': [
            { text: 'Troubleshooting', link: 'en/more/troubleshooting' },
            { text: 'Development', link: 'en/more/development' },
            { text: 'Changelog', link: 'en/more/changelog' },
            { text: 'Translations', link: 'en/more/translations' },
        ],
	},
};
