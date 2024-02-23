import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
function Portalform() {
  const [id, setId] = useState("")
  const [title, setname] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()
    const data = { id, title, description }
    fetch("https://web-project-api.onrender.com/Portal",{
    // fetch("http://localhost:3006/Portal",{
      method: "POST",
      headers: {"Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(() => {
        alert("Data saved..!")
        navigate("/")
      })
      .catch((err) => {
        alert("error" + err)
      })
  }
  return (
    <div className="container">
      <h2>User Portal Form </h2>
      <form onSubmit={sendData}>
        <div className="mb-3" style={{ width: "400px" }}>
          <label className="form-label">ID</label>
          <input value={id} type="text" onChange={e => setId(e.target.value)} disabled="disabled" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} type="text" onChange={e => setname(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input value={description}
            type="text" onChange={e => setDescription(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/search" className="btn btn-danger">Back</Link>

      </form>
      <h2>Types of Portals Available</h2>
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">B2B portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            {/* <a href="#" className="btn btn-primary">back</a> */}
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>
          </div>
        </div>
      </div>
     
      <br />
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">B2C portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            {/* <a href="#" className="btn btn-primary">back</a> */}
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>
          </div>
        </div>
      </div>
      <br/>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Vendor portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            {/* <a href="#" className="btn btn-primary">back</a> */}
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>
          </div>
        </div>
      </div>
      <br />
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Partner Portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>
          </div>
        </div>
      </div>
      <br/>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Community portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <br />
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>

          </div>
        </div>
      </div>
      <br />
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Banking Portal</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <a href="#" className=""><button type="button" className="btn btn-primary" aria-label="Close">back</button></a>
          </div>
        </div>
      </div>
    </div>
)
}
export default Portalform;