export const getTooltipTarget = (vnode, targetClass) => {
	const tooltipIdx = vnode.children
		.map((child) => (child.data.props ? child.data.props.className : null))
		.indexOf(targetClass);

	return tooltipIdx !== -1 ? vnode.children[tooltipIdx].elm : null;
};
