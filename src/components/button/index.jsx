import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
	return createElement('button', {
		className: classNames("bg-[#1d9bf0] rounded-full flex items-center text-white justify-center font-bold hover:bg-[#1a8cd8] transition-colors", {
			"px-4 h-9": size === 'normal',
			"px-4 text-[17px] h-[52px] w-full": size === 'large',
		})
	}, children)
}

Button.propTypes = {
	size: PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps = {
	size: 'normal'
}
