const handlers = {
    FETCH_SECTIONS: (state, {payload}) => ({...state, sections: payload}),
    DEFAULT: state => state,
};

export const sectionsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};
