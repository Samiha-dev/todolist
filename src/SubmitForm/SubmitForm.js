import React, {Component} from 'react';

class SubmitForm extends Component {
    render(){
        return(
            <div>
                <label>Enter Todo: </label>
                <input type= "text"></input>
                <button>Submit</button>
            </div> 
        )
    }
     
}

export default SubmitForm;