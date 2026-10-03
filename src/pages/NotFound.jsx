import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <main className="page-shell not-found-page">
      <section className="section narrow-center">
        <div className="not-found-card">
          <p className="section-tag">404 / NOT FOUND</p>
          <h1>Looks like this frame doesn&apos;t exist.</h1>
          <button type="button" className="back-button" onClick={handleBack}>
            <ArrowLeft size={16} /> BACK HOME
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
