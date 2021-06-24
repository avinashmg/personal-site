const Navbar = () =>{
    return (
    <nav className="navbar navbar-dark navbar-expand-md textwhite text-white navigation-clean">
    <div className="container"><a className="navbar-brand" href="#">Avinash M G</a><button data-bs-toggle="collapse"
            className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle
                navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a class="nav-link active" href="#gallery">Gallery</a></li>
                <li className="nav-item"><a class="nav-link" href="#aboutme">About Me</a></li>
                <li className="nav-item"><a class="nav-link" href="#video">Video</a></li>
            </ul>
        </div>
    </div>
</nav>
);
}
export default Navbar