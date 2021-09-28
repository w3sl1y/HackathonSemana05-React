import React, {Component} from "react";

class Greeting extends Component{

render(){
    return (
        <div className="greeting">
            <h1 class="gray">USERNAME</h1>
            <form>
            <input placeholder="Text your username"/>
            </form>
            <hr/>
            <form>
            <h1 class="gray">PASSWORD</h1>
            <input placeholder="Text your password"/>
            <button class="show">SHOW</button>
            </form>
            <hr/>
            <button class="sinFondo">Forgot password?</button>
        </div>
    );
}
}
export default Greeting;