import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { TeamMember } from './TeamMember/TeamMember';
import { TeamDescription, TeamHeading } from './Team.styles';

const teamMembersData = [
  {
    name: 'Arshdeep',
    profession: 'JS Developer',
    email: 'arshdeep.cs.17@nitj.ac.in',
    keepsDoing: 'Struggling with Javascript',
    image: '/arshdeep.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'https://instagram.com/arsh.kk',
      twitter: 'https://twitter.com/',
    },
  },
  {
    name: 'Prabhat Sharma',
    profession: 'Athlete',
    email: 'prabhatcs.cs.17@nitj.ac.in',
    keepsDoing: 'Eat Run Sleep and Repeat.. ',
    image: '/prabhat.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'https://instagram.com/arsh.kk',
    },
  },
];
export const Team = () => (
  <div id="team">
    <Container>
      <TeamHeading className="text-primary text-center">Our Team</TeamHeading>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <TeamDescription className="text-center text-secondary">
            We are final year BTech students of Computer Science and Engineering
            at NIT Jalandhar.
          </TeamDescription>
        </Col>
      </Row>

      <Row xs="1" md="3" className="justify-content-center">
        {teamMembersData.map((t) => (
          <Col>
            <TeamMember {...t} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);
