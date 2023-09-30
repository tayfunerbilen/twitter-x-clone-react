import store from "~/store";

export const mainMenu = [
	{
		path: '/',
		title: 'Anasayfa',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem] block">
					<path
						fill="currentColor"
						d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem] block">
					<path
						fill="currentColor"
						d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/explore',
		title: 'Keşfet',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem] block">
					<path
						fill="currentColor"
						d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem] block">
					<path
						fill="currentColor"
						d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/notifications',
		title: 'Bildirimler',
		notification: 2,
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/messages',
		title: 'Mesajlar',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/lists',
		title: 'Listeler',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/bookmarks',
		title: 'Yer İşaretleri',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
					/>
				</svg>
			)
		}
	},
	{
		path: '/verified',
		title: 'Onaylanmış',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
					/>
				</svg>
			)
		}
	},
	{
		path: () => {
			return `/${store.getState()?.auth?.currentAccount?.username}`
		},
		title: 'Profil',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"
					/>
				</svg>
			),
			passive: (
				<svg viewBox="0 0 24 24" className="h-[1.641rem]">
					<path
						fill="currentColor"
						d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
					/>
				</svg>
			)
		}
	}
]

export const topics = [
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'tag',
			value: 'dilanpolat'
		}
	},
	{
		title: 'Türkiye tarihinde gündemde',
		topic: {
			type: 'query',
			value: 'Starlink'
		},
		postCount: 15640
	}
]

export const colors = [
	{
		primary: '#1d9bf0',
		secondary: '#8ecdf8'
	},
	{
		primary: '#ffd400',
		secondary: '#ffea80'
	},
	{
		primary: '#f91880',
		secondary: '#fc8cc0'
	},
	{
		primary: '#7856ff',
		secondary: '#bcabff'
	},
	{
		primary: '#ff7a00',
		secondary: '#ffbd80'
	},
	{
		primary: '#00ba7c',
		secondary: '#80ddbe'
	}
]

export const fontSizes = [
	14,
	15,
	16,
	18,
	19
]
