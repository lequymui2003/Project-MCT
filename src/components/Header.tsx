import "../App.scss";
function Header () {
  return (
    <header className="container">
      <div className="row mt-3">
        <div className="col-6 header-right">
          <div className="logo">
            <div>
              <img src="logo.png" alt="Logo" width="63px" height="55px" />
            </div>
            <div className="logo-content">
              <span>MCT</span>
            </div>
          </div>
          <div className="navbar">
            <ul>
              <li>Trang chủ</li>
              <li>Về chúng tôi</li>
              <li>Blog</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
        </div>
        <div className="col-6 header-left">
          <div className="button-login">
            <button>Đăng nhập</button>
          </div>
          <div className="button-register">
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
