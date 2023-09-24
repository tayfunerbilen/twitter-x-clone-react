import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarSection({ title, children, more }) {
	return (
		<section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
			<h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">
				{title}
			</h5>
			<div className="grid">
				{children}
			</div>
			{more && (
				<Link
					to={more}
					className="h-[52px] flex rounded-b-2xl items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]"
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
