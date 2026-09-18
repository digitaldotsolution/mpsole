interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Sole Types",
		link: "/single-project?id=1",
		has_dropdown: true,
		sub_menus: [
			{ link: "/single-project?id=1", title: "SOLE Pro Max (Carbon-Fiber)" },
			{ link: "/single-project?id=2", title: "SOLE Classic (Gum Rubber)" },
			{ link: "/single-project?id=3", title: "Apex Trail 360 (Outdoor)" },
			{ link: "/single-project?id=4", title: "EcoBio Matrix (Recycled)" },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "/blog",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
