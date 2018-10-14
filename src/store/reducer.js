const initialState = {
    cards: [],
    form: {
      name: '',
      tag: ''
    }
}

export const NOCASE = "[ROOT][CASE] there no case";
export const LOAD_CARD = "[CARD][LOAD] LOAD Action pending";
export const LOAD_CARD_PENDING = "[CARD][LOAD] LOAD Action pending";
export const LOAD_CARD_SUCCESS = "[CARD][LOAD] LOAD Action success";
export const LOAD_CARD_FAILURE = "[CARD][LOAD] LOAD Action failure";
export const ONCHANGE_FORM = "[FORM][ONCHANGE] change form";
export const SUBMIT_FORM = "[FORM][SUBMIT] submit form";

export default (state = initialState, action) => {
  switch (action.type) {

  case LOAD_CARD_PENDING:
    return {}

  case ONCHANGE_FORM:
    return { ...state, form: { ...state.form, [action.name]:action.value, } };

  case SUBMIT_FORM:
    const card = {
        name: state.form.name,
        tag: state.form.tag,
    }
    return { ...state, cards: [...state.cards, card], form: { name: '', tag: ''} };
    
  case NOCASE:
    return { ...state }

  default:
    return state
  }
}
