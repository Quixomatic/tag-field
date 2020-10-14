import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';

export default (state, { updateProperties, dispatch }) => {
	const { item } = state.properties;

	return (
		<div className="tag-item">
			<div className="item-inner">
				<div className="item-value">
					<span>{item.value}</span>
				</div>
				<div className="item-remove"></div>
			</div>
		</div>
	);
};
