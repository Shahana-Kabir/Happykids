import axios from "axios";
import { useEffect, useState } from "react";
import {Card } from 'react-bootstrap';

const Profile = (props) => {
    const profileId = props.profileId;

    const [profile, setProfile] = useState({});
    const [profileLoaded, setProfileLoaded] = useState(false);

    useEffect(async() => {

        if(!profileLoaded){
            const response = await axios.get("http://localhost:8080/profiles/" + profileId)
            setProfile(response.data);
            setProfileLoaded(true);
        }        
    })


    return ( <>
    <Card>
            <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>
                    Email
                </Card.Text>
                <Card.Text>
                    {profile.email}
                </Card.Text>
                <Card.Text>
                    Bio
                </Card.Text>
                <Card.Text>
                    {profile.bio}
                </Card.Text>
            </Card.Body>
        </Card>
    </>  );
}
 
export default Profile;