import tippy from 'tippy.js';

import { getIcon } from './utils/getIcon';
import { getTooltipTarget } from './utils/getTooltipTarget';
import { faTag } from './svg/faTag';

import './components/tag-item';

export default (state, { updateProperties, dispatch }) => {
	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { active } = state;
	const { componentId, tags, placeholder, isDisabled } = state.properties;

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

	const handleInitInput = (vnode) => {
		const { elm: inputElement } = vnode;

		dispatch('SET_INPUT_ELEMENT', { inputElement });
	};

	const togglePopover = (val) => {
		dispatch('TOGGLE_TOOLTIP', { val });
	};

	const handleKeyUp = (e) => {
		const { which, target } = e;
		const { textContent } = target;
		const value = textContent.replace(',', '').trim();
		const whitelist = [13, 44, 188];

		if (whitelist.indexOf(which) === -1 || !value || value === '') {
			return;
		}

		dispatch('ADD_TAG', { value });
	};

	const handleKeyDown = (e) => {
		const { which } = e;
		const blacklist = [13, 44, 188];

		if (blacklist.indexOf(which) !== -1) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	return (
		<div className="tag-field" id={componentId} hook-insert={handleInitPopover} disabled={isDisabled}>
			<div className="field-icon" class-active={active} on-click={togglePopover}>
				{getIcon(faTag)}
			</div>
			<div className="field-popover">
				{tags.map((item, idx) => (
					<x-saw-tag-item item={item} key={`${item}_${idx}`} />
				))}
				<span
					contentEditable={true}
					on-keydown={handleKeyDown}
					on-keyup={handleKeyUp}
					hook-insert={handleInitInput}
					attr-data-after={placeholder}
				></span>
			</div>
		</div>
	);
};
