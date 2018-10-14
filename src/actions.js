import { ONCHANGE_FORM } from './store/reducer';

export const onChangeForm = (evt) => ({
    type: ONCHANGE_FORM,
    name: evt.target.name,
    value: evt.target.value
});

export const submitForm = (event) => ({
})