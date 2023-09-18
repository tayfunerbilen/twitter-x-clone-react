import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu";

export default function Sidebar() {
	return (
		<aside className="w-[275px] min-h-screen px-2">
			<Logo />
			<Menu />
		</aside>
	)
}
