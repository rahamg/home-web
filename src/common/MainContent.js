import Form from 'react-bootstrap/Form';
//import { useState } from 'react';
import { useState } from 'react';

import { Row } from 'react-bootstrap';
var curr = new Date();
curr.setDate(curr.getDate() + 3);
var dateRequired = curr.getDate.toString;

//const [name, setName] = useState("");
	
//const [dateRequired, setDateRequired] = useState(new Date());
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The name you entered was: `)
}
function MainContent() {
    return (
      <div className="home-main" >
        <form onSubmit={handleSubmit}>
          <Row>
          <label>Trasaction Date:</label>
          <input id="dateRequired" type="date" name="dateRequired" defaultValue={dateRequired} />    
          </Row>
          <Row>
            <label> 
            <input
              type="text" 
            />
             </label>
             </Row>
             <Row>
            <label>Enter your name:
            <input
              type="text" 
            />
             </label>
             </Row><Row>
            <label>Enter your name:
            <input
              type="text" 
            />
          </label>
          </Row>
        </form>
      </div>
    );
  }
  
  export default MainContent;