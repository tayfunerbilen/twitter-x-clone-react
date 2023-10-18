import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu";
import Account from "~/layouts/main/sidebar/account";

export default function Sidebar() {
	return (
		<aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col sticky z-[2] top-0">
			<Logo />
			<Menu />
			<Account />
		</aside>
	)
}
