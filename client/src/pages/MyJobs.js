
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import JobCard from '../components/JobCard';
import { useEffect, useState } from 'react';

const MyJobs = (props) => {

  const [jobs, setJobs] = useState([]);
  const [jobsLoaded, setJobsLoaded] = useState(false);

  useEffect(async () => {
      if(!jobsLoaded){
        const response = await axios.get('http://localhost:8080/jobs/my?token=' + sessionStorage.getItem('token'));
        setJobs(response.data);
        setJobsLoaded(true);
      }    
  });

  return (
    <Container>

      <Row>
        <Col>
          <h1>
            Jobs Posted by Me
          </h1>
        </Col>

      </Row>          
      
      <Row>

        {jobs.map(job => <Col className="mb-4" md="6" lg="3"> <JobCard {...job} showingMine={true} loggedIn={props.loggedIn} /> </Col>)}

      </Row>
    </Container>
  );
}

export default MyJobs;