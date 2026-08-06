const aliases: Record<string, string> = {
	"oracle-10": "oracle",
	"google-chrome": "chrome",
	"microsoft-office-2021": "office21",
	"microsoft-office-365": "office365",
	"adobe-acrobat": "acrobat",
	"actualizaciones-de-windows": "windows-actualizaciones",
};

const normalizeForIcon = (name: string): string => {
	return name
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
};

const resolveIcon = (
	name: string,
	icons: Record<string, string>,
): string | undefined => {
	if (!name) return undefined;
	const normalized = normalizeForIcon(name);

	const aliasKey = aliases[normalized];
	if (aliasKey && icons[aliasKey]) return icons[aliasKey];

	if (icons[normalized]) return icons[normalized];
	if (icons[`${normalized}-logo`]) return icons[`${normalized}-logo`];

	const flat = normalized.replace(/-/g, "");
	const matchKey = Object.keys(icons).find(
		(k) => k.replace(/-/g, "") === flat,
	);
	return matchKey ? icons[matchKey] : undefined;
};

export { resolveIcon };
