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
	},
	properties: {
		componentId: {
			default: null,
		},
		tags: {
			default: [],
		},
	},
	styles,
	...actions,
});
