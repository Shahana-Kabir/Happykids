import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import './profile.scss';

const Profile = (props) => {
    const profileId = props.profileId;

    const [profile, setProfile] = useState({});
    const [profileLoaded, setProfileLoaded] = useState(false);

    useEffect(async () => {

        if (!profileLoaded) {
            const response = await axios.get("http://localhost:8080/profiles/" + profileId)
            setProfile(response.data);
            setProfileLoaded(true);
        }
    })


    return (<>
        <Card className="mt-4">
            <Card.Img variant="top" className="profile__image mt-4" src={profile.imagePath} />
            <Card.Body>

                <Card.Text>
                    <strong>{props.title}:</strong> {profile.name}
                </Card.Text>
                <Card.Text>
                    <strong>Email:</strong> {profile.email}
                </Card.Text>
                <Card.Text>
                    <strong>Biography:</strong> {profile.bio}
                </Card.Text>
            </Card.Body>
        </Card>
    </>);
}

export default Profile;