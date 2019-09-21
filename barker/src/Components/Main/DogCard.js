import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

class DogCard extends Component {

    state = {
        imageUrl: "https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Scooby",
        age: 6,
        shortBio: "Marketing Design at Tinder"
    }

    render() {
        const { imageUrl, name, age, shortBio } = this.state; 
        return (
            <div>
                <div>
                    <img src={imageUrl} />
                </div>
                <div>
                    <span>{name}, {age}</span>  
                    <span>{shortBio}</span>
                </div>
            </div>
        );
    }

}

export default DogCard;

// const styles = {
//     header: {
//         fontSize:
//     }
//     height: '100%',
//     padding: '10px'
// }

// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Example;