import Search from "~/layouts/main/rightbar/search";
import Premium from "~/layouts/main/rightbar/premium";
import Topics from "~/layouts/main/rightbar/topics";
import WhoFollow from "~/layouts/main/rightbar/who-follow";
import Footer from "~/layouts/main/rightbar/footer";
import StickyBox from "react-sticky-box";

export default function RightBar() {
	return (
		<StickyBox className="self-start" offsetBottom={80}>
			<aside className="w-[350px] mr-2.5">
				<Search/>
				<Premium/>
				<Topics/>
				<WhoFollow/>
				<Footer/>
			</aside>
		</StickyBox>
	)
}
