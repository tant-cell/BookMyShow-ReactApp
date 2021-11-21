import  Carousel  from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function CardSlider() {
    return (
      <div style={{background:"white", padding:"2%"}}>
          <Carousel indicators={false} >
              <Carousel.Item >
                  <CardGroup style={{display:"flex", gap:"100px", justifyContent:"space-around"}}>
                      <Card className="bg-white text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00097952-dcgejsfjnm-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00127081-cvgwvcjhbq-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00305214-gnubwtjkwc-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                  </CardGroup>
              </Carousel.Item>
              <Carousel.Item>
                  <CardGroup style={{display:"flex", gap:"100px", justifyContent:"space-around"}}>
                  <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00097952-dcgejsfjnm-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00127081-cvgwvcjhbq-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                      <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                          <Card.Img src="./et00305214-gnubwtjkwc-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                          <Card.ImgOverlay>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                              <Card.Text>Last updated 3 mins ago</Card.Text>
                          </Card.ImgOverlay>
                      </Card>
                  </CardGroup>
              </Carousel.Item>
          </Carousel>
      </div>
    );
  }
  
  export default CardSlider;