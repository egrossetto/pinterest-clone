import React from 'react';
import { connect } from 'react-redux';

export const NewPinForm = props => {
    const { onChange, form: {name, tag } } = props;
        return (
        <div>
            <form >
                <label>Name: <input type="text" name="name" /></label>
                <label>Tag: <input name="tag" type="text" /></label>  
                <button style={{marginLeft: 5 + 'px'}}>Buscar</button>
            </form>
        </div>
        )
}

export default connect(state => ({form: state.form}), null)(NewPinForm)