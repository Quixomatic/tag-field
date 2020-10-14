import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './styles.scss';
import view from './view';
import actions from './actions';

createCustomElement('x-saw-tag-field', {
	renderer: { type: snabbdom },
	view,
	initialState: {
		tooltip: null,
		inputElement: null,
		active: false,
	},
	properties: {
		componentId: {
			default: null,
		},
		tags: {
			default: [{ value: 'Tag 1' }, { value: 'Othing Tag' }],
		},
		inputValue: {
			default: null,
		},
		placeholder: {
			default: 'Enter tags...',
		},
		onChange: {
			default: (tags) => { console.log(tags) },
		},
		isDisabled: {
			default: false,
		},
	},
	styles,
	...actions,
});
