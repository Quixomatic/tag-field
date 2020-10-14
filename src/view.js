import tippy from 'tippy.js';

import { getTagIcon } from './utils/getTagIcon';
import { getTooltipTarget } from './utils/getTooltipTarget';

export default (state, { updateProperties, dispatch }) => {
	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { componentId } = state.properties;

	const handleInit = (vnode) => {
		const targetClass = 'field-popover';
		const content = getTooltipTarget(vnode, targetClass);

		const tooltip = tippy(vnode.elm, {
			content: content,
			appendTo: vnode.elm,
			theme: 'light-border',
			placement: 'right',
			trigger: 'manual',
			interactive: true,
			arrow: false,
			allowHTML: true,
			hideOnClick: false,
			maxWidth: 'none',
			popperOptions: {
				strategy: 'fixed',
			},
		});

		dispatch('SET_TOOLTIP', tooltip);
	};

	const togglePopover = (val) => {
		dispatch('TOGGLE_TOOLTIP', { val });
	};

	return (
		<div className="tag-field" id={componentId} hook-insert={handleInit}>
			<div className="field-icon" on-click={togglePopover}>{getTagIcon()}</div>
			<div className="field-popover">
				Test
			</div>
		</div>
	);
};
