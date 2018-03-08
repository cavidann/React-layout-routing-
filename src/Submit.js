import React, {Component} from 'react';

class Submit extends Component{

    constructor(props){
        super(props);

        this.state={};
        this.submit=this.submit.bind(this);
    }

    submit(){
        console.log("12");
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            <h2>Submit</h2>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}
export default Submit;