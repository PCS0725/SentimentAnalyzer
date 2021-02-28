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
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <strong>{profession}</strong>
            {' : '}
            {email}
          </CardSubtitle>
          <CardText>{keepsDoing}</CardText>
          <Button>Button</Button>
        </CardBody>
        <CardFooter className="text-muted">
          <div style={{ display: 'flex' }}>
            {socialLinks?.github && (
              <a target="_blank" href={socialLinks.github}>
                <GitHub />
              </a>
            )}
            {socialLinks?.instagram && (
              <a target="_blank" href={socialLinks.instagram}>
                <Instagram />
              </a>
            )}
            {socialLinks?.twitter && (
              <a target="_blank" href={socialLinks.twitter}>
                <Twitter />
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
