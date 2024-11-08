import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const PricingData = [
    {
        id:1,
        plan:'Basic',
        price:'$49',
        features: ['wireframing','Visual Design', '5 Pages', 'Free Hosting', 'Support and Assitance'],
        link:'http:www.google.com'
    },
    {
        id:2,
        plan:'Premium',
        price:'$100',
        features: ['wireframing','Visual Design', '5 Pages', 'Free Hosting', 'Support and Assitance'],
        link:'http:www.google.com'
    },
    {
        id:3,
        plan:'Ultimate',
        price:'$249',
        features: ['wireframing','Visual Design', '5 Pages', 'Free Hosting', 'Support and Assitance'],
        link:'http:www.google.com'
    },
]
export default function Pricing(){
    return(
        <>
        <section id="pricing" className="block pricing-block">
        <Container>
            <div className="title-holder">
                <h2>Pricing & Plans</h2>
                <div className="subtitle">Check our pricing & plans</div>
            </div>
            <Row>
                {
                    PricingData.map(val=>{
                        return(
                            <Col sm={4} key={val.id}>
                                <div className='heading'>
                                    <h3>{val.plan}</h3>
                                    <span className='price'>{val.price}</span>
                                </div>
                                <div className='content'>
                                    <ListGroup>
                                        {
                                            val.features.map((features, index) =>{
                                                return(
                                                    <ListGroup.Item key={index}>{features}</ListGroup.Item>
                                                )
                                            })
                                        }
                                        test
                                    </ListGroup>
                                </div>
                                <div className='btn-holder'>
                                    <a href={val.link} className='btn btn-primary'>Order Now</a>
                                </div>
                            </Col>
                        )
                    })
                }
                
            </Row>
        </Container>
        
        </section>
        </>
    )
}