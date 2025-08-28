import { Container, Row } from "react-bootstrap"
import banner from "../assets/banner.png"
import "./Banner.css"


const Banner = () =>{
    return(
        <Container fluid >
            <Row>
                <img src={banner} alt="banner" className=" banner p-0" />
            </Row>
        </Container>
    )
}

export default Banner;
