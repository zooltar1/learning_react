// selectors

export const getSearchString = state => ({
  searchString: state.app,
});

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => {
  return cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
};

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

