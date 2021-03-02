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
      instagram: 'instagram.com/arsh.kk',
      twitter: 'https://twitter.com/',
    },
  },
  {
    name: 'Prabhat Sharma',
    profession: 'Athlete',
    email: 'prabhats.cs.61@nitj.ac.in',
    keepsDoing: 'Eat Run Sleep and Repeat.. ',
    image: '/prabhat.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'instagram.com/arsh.kk',
    },
  },
  {
    name: 'Shubham Srivastava',
    profession: 'Coder',
    email: 'shubhams.cs.85@nitj.ac.in',
    keepsDoing: 'Sleep Code Eat Repeat',
    image: '/shubham.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'instagram.com/arsh.kk',
    },
  },
  {
    name: 'Chetan Bhalotia',
    profession: 'Musician',
    email: 'chetanb.cs.23@nitj.ac.in',
    keepsDoing: 'Single Singer.. ',
    image: '/chetan.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'instagram.com/arsh.kk',
    },
  },
  {
    name: 'Arbaaz Singh Grewal',
    profession: 'Musician',
    email: 'arbazs.cs.13@nitj.ac.in',
    keepsDoing: 'Porn Dealer.. ',
    image: '/arbaz.jpg',
    socialLinks: {
      github: 'https://github.com/arshkkk',
      instagram: 'instagram.com/arsh.kk',
    },
  },
];
export const Team = (props) => (
  <div>
    <Container>
      <TeamHeading className="text-center">Team</TeamHeading>
      <TeamDescription className="text-center">
        We are final year BTech students of Computer Science and Engineering at
        NIT Jalandhar.
      </TeamDescription>

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
