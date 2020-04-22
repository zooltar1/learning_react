// selectors

export const getSearchString = ({searchString}) => searchString;

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => {
  return cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
};

// action name creator

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const CHANGE = createActionName('CHANGE');

// action creators

export const createActionChange = payload => ({ payload: { ...payload }}); // ?

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

