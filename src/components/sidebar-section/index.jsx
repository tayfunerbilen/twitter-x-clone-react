import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarSection({ title, children, more }) {
	return (
		<section className="bg-[#16181c] overflow-hidden mb-4 rounded-2xl border border-[#16181c]">
			<h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">
				{title}
			</h5>
			<div className="grid">
				{children}
			</div>
			{more && (
				<Link
					to={more}
					className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]"
				>
					Daha fazla göster
				</Link>
			)}
		</section>
	)
}

SidebarSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
	more: false
}
