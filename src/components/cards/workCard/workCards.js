import React, { useState } from 'react';
import './workCard.css';
import { Tooltip } from 'react-tippy';
import { Modal } from 'react-bootstrap';

function WorkCards(props) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleTooltipClick = (job) => {
    setSelectedJob(job);
    setTooltipVisible(true);
  };

  const handleTooltipHide = () => {
    setSelectedJob(null);
    setTooltipVisible(false);
  };

  return (
    <>
      <div className="card-group justify-content-center gap-5">
        {props.dataProp[3] &&
          props.dataProp[3].map((data, i) => {
            console.log(data.job_city, i);
            return (
              <section key={i}>
                <div className="card">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      onClick={() => handleTooltipClick(data)}
                    >
                      Job Title: {data.job_title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Job Location: {data.job_city}
                    </h6>
                    <a href={data.job_apply_link} target='_blank' className="btn btn-primary">
                      Go to job
                    </a>
                  </div>
                </div>
                <Tooltip                 
                  trigger="manual"
                  open={tooltipVisible && selectedJob === data}
                  offset="-8, 16"
                  onMouseLeave={handleTooltipHide}
                />
              </section>
            );
          })}
      </div>
      <Modal show={selectedJob !== null} onHide={handleTooltipHide}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob && selectedJob.job_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedJob && selectedJob.job_description}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WorkCards;
