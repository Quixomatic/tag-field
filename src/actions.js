export default {
	actionHandlers: {
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
		ADD_TAG: ({ action, state, updateProperties }) => {
			action.stopPropagation();

			const { tags } = state.properties;
			const { payload } = action;
			const { value } = payload;

			const existingIndex = tags.map(tag => tag.value).indexOf(value);
			const tempObj = {
				value,
			}

			if (existingIndex !== -1) {
				return;
			}

			updateProperties({
				tags: [...tags, tempObj],
			});
		},
	},
};
