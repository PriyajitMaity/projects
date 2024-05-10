import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
            {/* Redux Commerce Limited is a leading Ecommerce company established in
            June 2022. Main focus of this company is to develop product as a
            Product, by maintaining the security and global standard of
            New-Ecommerce-Era. The main products of the company include Exchange
            Broker/TREC holder's Back-Office Management System, Cloud based
            Point of Sale and Enterprise Resource Planning solution, e-Commerce
            Solution and Hotel Owners' Property Management System etc. The
            management team of this company are the ICT Industry leaders having
            more than 25 years experience in ICT arena. */}
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure cumque recusandae quia nihil tempora nemo velit possimus architecto impedit ut fugiat aut exercitationem, ratione est commodi vero magnam laudantium!
            Earum rerum assumenda quae autem beatae veritatis quasi molestias animi nostrum, architecto, similique esse saepe commodi numquam nesciunt vero culpa suscipit! Nemo facere pariatur exercitation odit eum tempore accusantium omnis, minus provident repellendus. Cupiditate sunt pariatur et quisquam aliquid.
            Iste explicabo porro at. Quis modi laudantium nemo iusto atque voluptas porro illum earum in odit, ipsam quo maxime debitis deserunt quisquam ut corrupti labore ullam consequatur natus quidem deleniti!
            
          </p>
          <p>
            The main products of the company include Exchange Broker/TREC
            holder's Back-Office Management System, Cloud based Point of Sale
            and Enterprise Resource Planning solution, e-Commerce Solution and
            Hotel Owners' Property Management System etc. The management team of
            this company are the ICT Industry leaders having more than 25 years
            experience in ICT arena.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;