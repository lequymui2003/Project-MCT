import "../App.scss";
import { useState } from "react";

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      className="accordion"
    >
      <summary className="summary">
        <div className="summary-text">
          <i className="fas fa-check-double"></i> {title}
        </div>
        <div className="summary-icondown">
          <i
            className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
          ></i>
        </div>
      </summary>
      <div className="content">{children}</div>
    </details>
  );
};
const Home: React.FC = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-image">
          <img src="banner.jpg" alt="banner" />
        </div>
        <div className="banner-text">
          <div className="text-first">
            <p>Math Competivive Training</p>
          </div>
          <div className="text-second">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div>
            <button>Bắt đầu ngay!</button>
          </div>
        </div>
      </div>
      <div className="container body-mct">
        <div className="row">
          <div className="col-12 body-mct-title">
            <p>Phương thức học tập</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 body-mct-img">
            <div className="img1">
              <img src="imgxanh.png" alt="" />
            </div>
            <div className="img2">
              <img src="imgcam.png" alt="" />
            </div>
            <div className="img3">
              <img src="imghong.png" alt="" />
            </div>
            <div className="img4">
              <img src="imgtim.png" alt="" />
            </div>
            <div className="center-img">
              <img src="logo.png" alt="icon" />
            </div>
          </div>
          <div className="col-6 body-mct-text">
            <AccordionItem title="Chi phí thấp và dễ tiếp cận">
              <ul>
                <li>Hàng trăm tính năng, nội dung hoàn toàn miễn phí</li>
                <li>
                  Hệ thống hoạt động trên mọi nền tảng và thiết bị phổ biến
                </li>
                <li>Học bất cứ ở đâu và khi nào bạn muốn</li>
                <li>Trả phí cho những gì bạn thực sự cần</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Nội dung đa dạng">
              <p></p>
            </AccordionItem>

            <AccordionItem title="Tận dụng sức mạnh trí tuệ nhân tạo để cá nhân hóa trải nghiệm người dùng">
              <p></p>
            </AccordionItem>
            <AccordionItem title="Công cụ đắc lực hỗ trợ, đồng hành cùng phụ huynh và giáo viên">
              <p></p>
            </AccordionItem>
            <AccordionItem title="Tính năng tạo đề thi siêu tiện lợi">
              <p></p>
            </AccordionItem>
            <AccordionItem title="Sử dụng toàn bộ các tính năng VIP mà không cần trả phí">
              <p></p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
