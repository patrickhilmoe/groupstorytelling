export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: "sticky", top: "0px"}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img src="/oroborous3.jpg" alt="oroboros image" width="50px" height="30px" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dunesstory">
                  The Imperial Dunes
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/cpstory">
                  CrystalPunk
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
