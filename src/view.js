import tippy from 'tippy.js';

import { getTagIcon } from './utils/getTagIcon';
import { getTooltipTarget } from './utils/getTooltipTarget';

import './components/tag-item';

export default (state, { updateProperties, dispatch }) => {
	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { tooltip, active } = state;
	const { componentId, tags, inputValue } = state.properties;

	const handleInitPopover = (vnode) => {
		const targetClass = 'field-popover';
		const content = getTooltipTarget(vnode, targetClass);

		const tooltip = tippy(vnode.elm, {
			content: content,
			appendTo: vnode.elm,
			theme: 'light-border',
			placement: 'top',
			trigger: 'manual',
			interactive: true,
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

	const handleKeyPressed = (e) => {
		const { which, target } = e;
		const { textContent } = target;
		const value = textContent.replace(',', '');

		const whitelist = [13, 44, 188];

		if (whitelist.indexOf(which) === -1) {
			return;
		}

		dispatch('ADD_TAG', { value });
	};

	return (
		<div className="tag-field" id={componentId} hook-insert={handleInitPopover}>
			<div className="field-icon" class-active={active} on-click={togglePopover}>
				{getTagIcon()}
			</div>
			<div className="field-popover">
				{tags.map((item, idx) => (
					<x-saw-tag-item item={item} key={`${item}_${idx}`} />
				))}
				<span contentEditable={true} on-keyup={handleKeyPressed} textContent={inputValue}></span>
			</div>
		</div>
	);
};
