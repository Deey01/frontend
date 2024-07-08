import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
 <div className="container-fluid">
<div className="row">
  <div className="--bs-info-border-subtle">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servic</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button class="btn btn-outline-success" type="submit">signUp</button>
        <button className="btn btn-outline-success" type="submit">Signin</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</div>

<div className="row">
  <div className="col-md-12 text-center p-0">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oEmAIYYmriw9yALkdvZAP7WJAgbAPidETOABB~tplv-tej9nj120t-origin.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oEmAIYYmriw9yALkdvZAP7WJAgbAPidETOABB~tplv-tej9nj120t-origin.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oEmAIYYmriw9yALkdvZAP7WJAgbAPidETOABB~tplv-tej9nj120t-origin.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div>
ิ<br></br>

<div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNJGD4Gg8seW-trAF4W9ztQJGJclYOJ2oeA&s"className="card-img-top" alt="..."/>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <img src="https://f.ptcdn.info/827/020/000/1404373460-422pxRapun-o.jpg"className="card-img-top" alt="..."/>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <img src="https://pbs.twimg.com/profile_images/469432104921468928/tcR0FCZ__400x400.jpeg"className="card-img-top" alt="..."/>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<br></br>
<div className="row">
          <div className="col-md-12 text-center bg-white p-5">
          <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Home</a></li>
      <li className="nav-item"><a href="#" className="https://getbootstrap.com/docs/5.3/examples/">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>

          </div>
</div>
</div>
    </>
  );
}