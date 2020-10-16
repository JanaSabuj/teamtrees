import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = ({info}) => {
  return (
    <div>
      <Jumbotron className="m-2 ">
  <h1 className="display-3">Hello, I am {info[0].fullname} !</h1>
        <p className="lead">A very warm welcome to my personal website!</p>
        <hr className="my-2" />
  <p>{info[0].summary}</p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Example;