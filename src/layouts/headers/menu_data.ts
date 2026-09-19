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
		link: "/sole-types/pio-sole-gents",
		has_dropdown: true,
		sub_menus: [
			{ link: "/sole-types/pio-sole-gents", title: "Pio Sole Gents" },
			{ link: "/sole-types/ladies-jelly-sole", title: "Ladies Jelly Sole" },
			{ link: "/sole-types/tr-sole", title: "T.R Sole" },
			{ link: "/sole-types/medicated-sole", title: "Medicated Sole" },
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
