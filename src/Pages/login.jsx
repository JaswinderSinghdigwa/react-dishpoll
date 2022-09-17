import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userList from '../../src/user.json'

const Login = () => {
    const navigate = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const changeInputValue = (e) => {
        setUser({
            [e.target.name]: e.target.value
        })
    };

    const validationForm = () => {
        let returnData = {
            error: false,
            msg: ''
        }
        const { password } = user
        if (password.length < 7) {
            returnData = {
                error: true,
                msg: 'Password must be more than 7 characters'
            }
        }
        return returnData;
    }

    const submitForm = (e) => {
        e.preventDefault();
        const validation = validationForm()
        var inputData = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value
        };
        if (validation.error) {
            alert(validation.msg)
        }
        else if (userList.find((data) => { return data.username === inputData.username && data.password === inputData.password }) !== undefined) {
            navigate.push('./dishes')

        } else {
            alert("Wrong password or username");
        }
    }


    return (
        <div style={{ paddingTop: "10%", display: "flex", justifyContent: "center" }}>
            <form
                onSubmit={e => {
                    submitForm(e)
                }}
            >
                <h1 className='intro'>Login Page</h1>
                <div className="form-group">
                    <label >UserName</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        onChange={e => changeInputValue(e)}
                    />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={e => changeInputValue(e)}

                    />
                </div>
                <button style={{marginTop : '30px'}} value="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>

    );
}

export default Login