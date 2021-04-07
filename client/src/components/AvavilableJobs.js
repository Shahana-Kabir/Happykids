
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AvailableJobs.scss';


const AvailableJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(async () => {
        if (!loaded) {

            const response = await axios.get('http://localhost:8080/jobs/recent');
            setJobs(response.data);
            setLoaded(true);

        }

    })


    return (<div>
        <h2>Recent Jobs</h2>
        <Container>
            <Row>
                {jobs.map(job => {
                    return (<Col key={job.id} md = "6" className="p-2 mb-2">                        
                        <div><i class="bi-calendar-check mr-2"></i> { job.time }</div>
                        <div><i class="bi-map-fill mr-2"></i> {job.street}</div>
                    </Col>)
                })}

            </Row>
        </Container>

    </div>);


}

export default AvailableJobs;