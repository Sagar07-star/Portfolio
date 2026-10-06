import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Information Science Engineering</h4>
                <h5>RV Institute of Technology and Management (RVITM), Bengaluru</h5>
              </div>
              <h3>2024 – 2028</h3>
            </div>
            <p>
              Bachelor of Engineering in Information Science Engineering. Current CGPA: 8.4. Focused on core CS principles, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Operating Systems, Machine Learning, and Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
