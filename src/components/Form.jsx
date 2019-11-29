import React from 'react';

const bar = {
    display: 'flex',
};


const Form = (props) => {
    return (
    <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        <div style={bar}>
            <label>
            <input name="username"
            type="text"
            placeholder="GitHub username"
            required
            value={props.formData.username}
            onChange={props.handleFormChange}
            />
            </label>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </div>
    </form>)
};
export default Form;