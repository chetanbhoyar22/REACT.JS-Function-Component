import React, {useState} from 'react';

function App()
{
const [my_name, changeMyName] = useState("react js");
const [my_age] = useState(24);
const buttonClicked = () =>
{
  changeMyName("Chetan Bhoyar");
}

return(
<div>
<h1 align='Center'>By Using FunctionComponent -</h1>
  <h1>Welcome {my_name}</h1>
  <h2>And My Age is: {my_age}</h2>

  <button onClick={buttonClicked}> Change Name </button>
</div>
);
}
export default App;