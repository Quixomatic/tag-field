export default {
	actionHandlers: {
		SET_INPUT_ELEMENT: ({ action, updateState }) => {
			action.stopPropagation();

			const { payload } = action;
			const { inputElement } = payload;

			updateState({
				inputElement,
			});
		},
		SET_TOOLTIP: ({ action, updateState }) => {
			action.stopPropagation();

			const { payload: tooltip } = action;

			updateState({
				tooltip,
			});
		},
		TOGGLE_TOOLTIP: ({ action, state, updateState }) => {
			action.stopPropagation();

			const { tooltip } = state;
			const { payload } = action;
			const { val } = payload;

			if (!tooltip) {
				return;
			}

			const {
				state: { isShown },
			} = tooltip;

			if (val === true || val === false) {
				tooltip[val ? 'show' : 'hide']();

				updateState({
					active: val,
				});

				return;
			}

			tooltip[!isShown ? 'show' : 'hide']();

			updateState({
				active: !isShown,
			});
		},
		ADD_TAG: ({ action, state, updateProperties, dispatch }) => {
			action.stopPropagation();

			const { tags } = state.properties;
			const { payload } = action;
			const { value } = payload;

			const existingIndex = tags.map((tag) => tag.value).indexOf(value);
			const tempObj = {
				value,
			};

			if (existingIndex !== -1) {
				dispatch('CLEAR_INPUT_VALUE');
				return;
			}

			updateProperties({
				tags: [...tags, tempObj],
			});

			dispatch('CLEAR_INPUT_VALUE');
			dispatch('TAGS_CHANGED');
		},
		REMOVE_TAG: ({ action, state, updateProperties, dispatch }) => {
			action.stopPropagation();

			const { tags } = state.properties;
			const { payload } = action;
			const { value } = payload;

			const existingIndex = tags.map((tag) => tag.value).indexOf(value);

			if (existingIndex === -1) {
				return;
			}

			updateProperties({
				tags: tags.filter((tag) => tag.value !== value),
			});

			dispatch('TAGS_CHANGED');
		},
		CLEAR_INPUT_VALUE: ({ action, state }) => {
			action.stopPropagation();

			const { inputElement } = state;

			if (!inputElement) {
				return;
			}

			inputElement.innerHTML = '';
		},
		TAGS_CHANGED: ({ action, state }) => {
			const { tags, onChange } = state.properties;

			if (!onChange) {
				return;
			}

			onChange(tags);
		},
	},
};
