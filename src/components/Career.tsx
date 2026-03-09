import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">

        {/* ── Education & Achievements ── */}
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech, Computer Science</h4>
                <h5>Dayananda Sagar University, Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science, focusing on
              AI/ML, Deep Learning, and modern full-stack development. Published
              research on Heritage Site Image Restoration using Generative AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>11th / 12th — PCMCs</h4>
                <h5>Vijaya Composite PU College</h5>
              </div>
              <h3>PUC</h3>
            </div>
            <p>
              Completed Pre-University education with Physics, Chemistry,
              Mathematics, and Computer Science as core subjects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling — CBSE</h4>
                <h5>Jnanodaya School</h5>
              </div>
              <h3>SCHOOL</h3>
            </div>
            <p>
              Completed schooling under CBSE syllabus at Jnanodaya School,
              building a strong foundation in science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participations</h4>
                <h5>LMA EDGE · Arm AI Developer Challenge · AMD AI Sprint 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively participated in competitive hackathons including LMA EDGE
              Hackathon, Arm AI Developer Challenge, and AMD AI Sprint Hackathon
              2025, applying AI/ML skills to solve real-world problems under
              time constraints.
            </p>
          </div>
        </div>

        {/* ── Professional Experience ── */}
        <h2 className="career-sub-heading">
          Professional <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>DERBI Foundation (MedaiLockr)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to full-stack development by managing both front-end
              and back-end components for the website. Executing cross-functional
              technical tasks to support the startup's operational and
              development goals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Technology Intern</h4>
                <h5>Codtech IT Solutions (Online)</h5>
              </div>
              <h3>INTERN</h3>
            </div>
            <p>
              Focused on learning, skill development, and gaining practical
              knowledge in Blockchain Technology. Collaborated on group projects
              and participated in team meetings to solve technical challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Computing Intern</h4>
                <h5>Codec Technologies (Online)</h5>
              </div>
              <h3>INTERN</h3>
            </div>
            <p>
              Completed a one-month AICTE &amp; ICAC approved internship
              specializing in Cloud Computing. Recognized for achievements and
              contributions as a Cloud Computing Intern.
            </p>
          </div>
        </div>

        {/* ── Publications ── */}
        <h2 className="career-sub-heading">
          Publications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Heritage Site Image Restoration using AI Image Generation</h4>
                <h5>Research Publication</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Published research on restoring degraded heritage site images using
              Generative AI techniques — Stable Diffusion, Realistic Vision, and
              soft edge detection — to revive structural and artistic details.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Real Time Animal Intrusion Monitoring</h4>
                <h5>Ongoing Research</h5>
              </div>
              <h3>WIP</h3>
            </div>
            <p>
              Ongoing research on real-time wildlife intrusion detection using
              YOLOv8, PIR sensors, and IoT-based alert systems for agricultural
              and forest border protection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
