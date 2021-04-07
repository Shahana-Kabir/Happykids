
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

  const reload = ()=>{
    setJobsLoaded(false);
  }

  return (
    <Container>

      <Row>
        <Col>
          <h1>
            My Jobs
          </h1>
        </Col>

      </Row>          
      
      <Row>

        {jobs.map(job => <Col className="mb-4" sm="12"> <JobCard onChange={reload} {...job} showingMine={true} loggedIn={props.loggedIn} /> </Col>)}

      </Row>
    </Container>
  );
}

export default MyJobs;