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
		title: "Sole Manufacture",
		link: "/sole-types/sole-pro-max",
		has_dropdown: true,
		sub_menus: [
			{ link: "/sole-types/sole-pro-max", title: "SOLE Pro Max (Carbon-Fiber)" },
			{ link: "/sole-types/sole-classic", title: "SOLE Classic (Gum Rubber)" },
			{ link: "/sole-types/apex-trail-360", title: "Apex Trail 360 (Outdoor)" },
			{ link: "/sole-types/ecobio-matrix", title: "EcoBio Matrix (Recycled)" },
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
		title: "B2B Quote",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
