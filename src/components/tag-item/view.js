import { getIcon } from '../../utils/getIcon';
import { faTimes } from '../../svg/faTimes';

export default (state, { updateProperties, dispatch }) => {
	const { item } = state.properties;

	const handleRemove = () => {
		dispatch('REMOVE_TAG', item);
	};

	return (
		<div className="tag-item">
			<div className="item-inner">
				<div className="item-value">
					<span>{item.value}</span>
				</div>
				<div className="item-remove" on-click={handleRemove}>
					{getIcon(faTimes, 'sm')}
				</div>
			</div>
		</div>
	);
};
