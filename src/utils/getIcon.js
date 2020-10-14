import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';

const { createElementFromNode } = snabbdom;

const BASE_FONT_SIZE = 16;
const ICON_SIZES = {
	sm: 12,
	md: 16,
	lg: 24,
	xl: 32,
};

export const getIcon = (iconDef, size = 'md') => {
	const wrapper = document.createElement('SPAN');
	const iconSize = ICON_SIZES[size];
	const iconRems = iconSize / BASE_FONT_SIZE;
	const def = { ...iconDef };

	if (!def) {
		return null;
	}

	const { icon } = def;

	if (!icon) {
		return null;
	}

	const viewBox = `0 0 ${icon[0]} ${icon[1]}`;
	const svgPathData = icon[4];
	const svgPath = svgPathData ? `<path xmlns="http://www.w3.org/2000/svg" d="${svgPathData}"></path>` : '';

	wrapper.innerHTML = `<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="${viewBox}"
			style="width: ${iconRems}rem; height: ${iconRems}rem; fill: currentColor;">
				${svgPath}
			</svg>
		`;

	const vnode = createElementFromNode(wrapper);

	return vnode.children[0];
};
