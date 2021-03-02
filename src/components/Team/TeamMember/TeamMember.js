import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
} from 'reactstrap';
import { Instagram, GitHub, Twitter } from 'react-feather';
export const TeamMember = ({
  name,
  profession,
  email,
  keepsDoing,
  socialLinks,
  image,
}) => {
  return (
    <div style={{ padding: '10px 0' }}>
      <Card>
        <div className="d-flex justify-content-center mt-3">
          <CardImg
            style={{ maxWidth: '200px', height: 'auto' }}
            top
            width="100%"
            src={image}
            alt="Card image cap"
            className="rounded-circle "
          />
        </div>

        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <strong>{profession}</strong>
            {' : '}
            {email}
          </CardSubtitle>
          <CardText>{keepsDoing}</CardText>
        </CardBody>
        <CardFooter className="text-muted d-flex justify-content-center">
          <div style={{ display: 'flex' }}>
            {socialLinks?.github && (
              <a
                style={{ padding: '0 5px' }}
                target="_blank"
                href={socialLinks.github}
              >
                <GitHub />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                style={{ padding: '0 5px' }}
                target="_blank"
                href={socialLinks.instagram}
              >
                <Instagram />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                style={{ padding: '0 5px' }}
                target="_blank"
                href={socialLinks.twitter}
              >
                <Twitter />
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
