import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ngoding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.head}>
          <Container>
            <Navbar>
              <Container fluid>
                <Navbar.Brand href="#" className='fw-bold'>Ngoding</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1"> <span className="fw-bold">Courses</span></Nav.Link>
                    <Nav.Link href="#action2"><span className="fw-bold">Techdegree</span></Nav.Link>
                    <Nav.Link href="#action2"><span className="fw-bold">Teams</span></Nav.Link>
                    <Nav.Link href="#action2"><span className="fw-bold">Community</span></Nav.Link>

                  </Nav>
                  <Button className={styles.login}>Sign In</Button>
                  <Button className={styles.register}>Register Now</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className='mt-5'>
              <div className={styles.mainLeft}>
                <h5 >--- THE NEW AREA HAS BEEN BEGAN</h5>
                <h1 className={styles.moto}>
                  Bright Your Future with learn new technology from all expert
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ex ea, ad cum quod perspiciatis architecto, eum quibusdam consequuntur non, repudiandae possimus placeat illo nulla perferendis aperiam laudantium hic atque!</p>

                <div className='d-flex'>
                  <Button className={''}>
                    Start Free Trial
                  </Button>
                  <div className='d-flex flex-column'>
                    <small> or Subscribe just</small>
                    <div className='fw-bold'><span className={styles.dollar}>$19.00</span>/month</div>
                  </div>
                </div>

              </div>
              <div>
                <img className={styles.mainpic} src="https://i.ibb.co/6R6w2Lr/Capture-removebg-preview.png" />
                <div className={styles.designation}>
                  <h5>Anastya Annisa</h5>
                  <p>Senior c# teacher</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className={styles.top}>
            <h4 className='mt-5 pb-4'><span className={styles.tophead}>Top languages</span> to learn</h4>
          </div>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className={styles.cardBody}>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='col-md-4 p-3'>
                    f
                  </div>
                  <div className='col-md-8'>
                    <div className={styles.cardDetails}>
                      <Card.Title>C++</Card.Title>
                      <Card.Text>
                        General Purpose Programing Language
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>

      </main >

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}

export default Home
