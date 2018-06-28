
import Immutable from 'immutable';

let statusId = 1;

export default (state = new Immutable.OrderedMap(), action) => {
    switch (action.type) {
        case 'CREATE_STATUS': {
            const newStatusId = statusId++;

            return state.set(
                newStatusId, {id: newStatusId, text: action.text}
            );
        }
        case 'REMOVE_STATUS':
            return state.delete(action.statusId);
        default:
            return state;
    }
};
