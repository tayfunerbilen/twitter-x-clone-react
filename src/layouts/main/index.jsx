import {Outlet} from "react-router-dom";
import Sidebar from "~/layouts/main/sidebar";
import RightBar from "~/layouts/main/rightbar";

export default function MainLayout() {
	return (
		<div className="w-[1265px] mx-auto flex">
			<Sidebar/>
			<main className="flex-1 flex gap-[30px]">
				<main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
					<Outlet/>
				</main>
				<RightBar/>
			</main>
		</div>
	)
}
