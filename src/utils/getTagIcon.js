import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';
import { faTag } from '../faTag';

const { createElementFromNode } = snabbdom;

export const getTagIcon = () => {
	const wrapper = document.createElement('SPAN');
	const def = { ...faTag };

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
			style="width: 1rem; height: 1rem; fill: currentColor;">
				${svgPath}
			</svg>
		`;

	const vnode = createElementFromNode(wrapper);

	return vnode.children[0];
};
