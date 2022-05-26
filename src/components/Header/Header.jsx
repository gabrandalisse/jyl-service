import CompanyData from "../../assets/data";

const Header = () => {
  return (
    <header className="bg-dark py-5 parallax" id="home">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center my-5">
              
              <h1 className="display-5 fw-bolder text-white mb-2">
                {CompanyData.menu.companyName}
              </h1>

              <p className="lead text-white-50 mb-4">
                {CompanyData.header.text}
              </p>

              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <a
                  className="btn btn-lg btn-outline-light px-4 me-sm-3"
                  href="#contact"
                >
                  Contactanos
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
