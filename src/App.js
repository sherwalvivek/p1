import React, {useState} from "react";

function App(props) {
  const btnHandleUp =()=>{
     let newText = text.toUpperCase();
     setText(newText);
     console.log(text)
  }
  const btnHandleClear =()=>{
    setText("");
    console.log(text);
 }
  const handleChnage= (event)=>{
     setText(event.target.value);
  }
  const [text , setText] = useState("");
  return (
<div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="mb-3 container">
  <label forhtml="exampleFormControlTextarea1" className="form-label textA">Enter the text to analyse below: </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Enter text here" onChange={handleChnage} value={text}></textarea>
  <button type="button" className="btn btn-success" onClick={btnHandleUp} >Convert UpperCase</button>
  <button type="button" className="btn btn-danger my-5 mx-2" onClick={btnHandleClear} >Clear</button>
</div>
<h2>{text.split(" ").length-1} words and {text.length} characters </h2>

</div>
 )
}

export default App
