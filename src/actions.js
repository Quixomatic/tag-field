export default {
	actionHandlers: {
		SET_TOOLTIP: ({ action, updateState }) => {
			action.stopPropagation();

			const { payload: tooltip } = action;

			updateState({
				tooltip,
			});
		},
		TOGGLE_TOOLTIP: ({ action, state }) => {
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
				return;
			}

			tooltip[!isShown ? 'show' : 'hide']();
		},
	},
};
