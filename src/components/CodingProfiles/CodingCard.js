import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import {SiGeeksforgeeks} from "react-icons/si";
import {SiLeetcode} from "react-icons/si";
import {SiCodechef} from "react-icons/si";
import {SiCodeforces} from "react-icons/si";


function CodingCard(props) {
    return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
             
              <br />
             I love solving DSA problems. Here is a list of my coding profiles:
            </p>
            <ul>
              <li className="about-activity">
                 <p><ImPointRight />  Geeks For Geeks Profile  <Button variant="primary" href="https://auth.geeksforgeeks.org/user/harshit68rocking/practice" target="_blank">
          <SiGeeksforgeeks /> &nbsp;
           GFG
        </Button>
        </p>
              </li>

              <li className="about-activity"><p>
                <ImPointRight /> Leetcode Profile <Button variant="primary" href="https://leetcode.com/samratharshit/" target="_blank">
          <SiLeetcode /> &nbsp;
           Leetcode
        </Button>
        </p>
              </li>
              <li className="about-activity">
                <p>
                <ImPointRight /> Codechef Profile <Button variant="primary" href="https://www.codechef.com/users/harshit68rocki" target="_blank">
          <SiCodechef /> &nbsp;
           Codehef
        </Button>
        </p>
              </li>
              <li className="about-activity">
                <p>
                <ImPointRight /> Codeforces Profile <Button variant="primary" href="https://codeforces.com/profile/theshm" target="_blank">
          <SiCodeforces /> &nbsp;
           Codeforces
        </Button>
        </p>
              </li>
            </ul>
  
          
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
  
  export default CodingCard;