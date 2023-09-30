import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ as, size, variant, className, children, ...props }) {
	return createElement(as, {
		type: 'button',
		className: classNames("rounded-full flex items-center justify-center font-bold transition-all", {
			"px-4 h-8 text-sm": size === 'small',
			"px-4 h-9": size === 'normal',
			"px-4 text-[1.063rem] h-[3.25rem] w-full": size === 'large',
			"bg-[color:var(--color-primary)] hover:opacity-90 text-white": variant === 'primary',
			"bg-[color:var(--color-base)] text-[color:var(--background-primary)]": variant === 'white',
			"border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === 'white-outline',
			[className]: true
		}),
		...props
	}, children)
}

Button.propTypes = {
	as: PropTypes.any,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
	props: PropTypes.object,
	className: PropTypes.string
}

Button.defaultProps = {
	as: 'button',
	size: 'normal',
	variant: 'primary'
}
