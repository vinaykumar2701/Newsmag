

const Navbar =({setCategory, setCountry})=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <div className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Newsmag</span></div >
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" >
        
        <li className="nav-item ">
          <div className="nav-link " onClick={()=>setCategory("business")}>Bussines</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Helth</div >
        </li>e
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Tecnology</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div >
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCountry("in")}>INDIA</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCountry("us")}>USA</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCountry("ca")}>Canada</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCountry("Au")}>Australia</div >
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCountry("mx")}>Mexico</div >
        </li>
        



        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar