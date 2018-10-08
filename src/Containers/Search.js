import React, {Component} from 'react';
import style from './Search.module.css'
class Search extends Component {
    state = {
        username: ""
    }

    onChange = e => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = e => {
        const {setUser} = this.props;
        const {username} = this.state;
        e.preventDefault();
        setUser(username);
        this.setState({username:""});
    }

    render() {
        const {username} = this.state;
        const isEnabled = username.length > 0;

        return ( 
            <form className = {style.Form}
                onSubmit = {this.onSubmit} >
            <input type = "text"    
                onChange = { this.onChange }
                placeholder = "Username"
                value={this.state.username}
                style = {{
                    width: "75%",
                    border: "none",
                    height: "100%",
                    background: "transparent"
                }}
            /> 
            <input disabled={!isEnabled}
                className={style.Button}
                type = "submit"
                value = "Search" 
            />
            </form>
        )
    }
}

export default Search;