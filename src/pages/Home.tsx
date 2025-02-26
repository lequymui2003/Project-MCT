import "../App.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <>
      <div className="home-body">
        <div className="row home-body-row">
          <div className="col-12 banner p-0">
            <img src="banner.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 banner_text">
            <div className="banner-text-title">
              <p>Math Competivive Training</p>
            </div>
            <div className="banner-text-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div>
              <button onClick={() => navigate("/competition")}>
                Bắt đầu ngay!
              </button>
            </div>
          </div>
        </div>
        <div className="row body-text">
          <div className="col-10 mx-auto text-title">
            <p>Phương pháp học tập</p>
          </div>
          <div className="col-10 mx-auto">
            <div className="row body-mct">
              <div className="col-6 body-img">
                <img src="body-img.png" alt="" />
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
        </div>
      </div>
    </>
  );
};

export default Home;
