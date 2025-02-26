import { useState } from "react";

// Định nghĩa kiểu dữ liệu dựa trên cấu trúc API
interface CompetitionData {
  id: number;
  code: string;
  name: string;
  org: string;
  logoImage: string;
  orgLink: string;
  scope: string;
  difficultLevel: number;
  popular: string;
  registerLink: string;
  classMin: number;
  classMax: number;
  roundCount: number;
}

const CompetitionPage: React.FC = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState<CompetitionData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!id) {
      setError("Vui lòng nhập ID");
      return;
    }

    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(
        `https://mct.finbox.vn/api/competitions?isMany=false`
      );
      const result = await response.json();

      if (result?.data?.competition?.[id]) {
        setData(result.data.competition[id] as CompetitionData);
      } else {
        setData(null);
        setError("Không có dữ liệu.");
      }
    } catch {
      setError("Lỗi khi tải dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Nhập ID cuộc thi</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Nhập ID"
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <button onClick={fetchData} style={{ padding: "8px 12px" }}>
        Tìm kiếm
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <h3>Thông tin cuộc thi</h3>
          <img
            src={data.logoImage}
            alt="Competition Logo"
            width={150}
            style={{ display: "block", marginBottom: "10px" }}
          />
          <p>
            <strong>ID:</strong> {data.id}
          </p>
          <p>
            <strong>Tên:</strong> {data.name}
          </p>
          <p>
            <strong>Đơn vị tổ chức:</strong> {data.org}
          </p>
          <p>
            <strong>Phạm vi:</strong> {data.scope}
          </p>
          <p>
            <strong>Mức độ khó:</strong> {data.difficultLevel}
          </p>
          <p>
            <strong>Trạng thái:</strong> {data.popular}
          </p>
          <p>
            <strong>Số vòng thi:</strong> {data.roundCount}
          </p>
          <p>
            <strong>Học sinh từ lớp:</strong> {data.classMin} - {data.classMax}
          </p>
          <p>
            <strong>Link đăng ký:</strong>{" "}
            <a
              href={data.registerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.registerLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default CompetitionPage;
