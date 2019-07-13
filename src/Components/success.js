import React from 'react'
import history from '../history';

function Success (data){
    const handleClick = ()=>{
        history.push('/')
    }
return(
    <div>
        <div className="container">
            <center style={{ paddingTop: "5%" }}>
                <h2>Thanx for filling form!</h2>
                <button style={{ backgroundImage: "linear-gradient(to right, cornflowerblue , #53bffe)" }} onClick={handleClick} className="ui blue button">Home</button>
            </center>
        </div>
    </div>
)
}


export default Success