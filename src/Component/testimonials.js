import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const tesimonailsData = [
    {
        id:1,
        description: 'Creative website designing company',
        name:'M shoaib Ghori',
        designation:'Frontend Developer'
    },
    {
        id:2,
        description: 'lorem ipsim dolorsit amet',
        name:'M Ali',
        designation:'Frontend Developer'
    },
    {
        id:3,
        description: 'creative solution ',
        name:'waseem',
        designation:'Backend Developer'
    }
]
export default function Testimonials(){
    return(
        <>
        <section id='testimonials' className='block testimonials-block'>
        <Container>
        <div className='title-holder position-relative'>
                <h2>Client Testimonials</h2>
                <div className='subtitle'>What client say about us</div>
            </div>
                <Carousel controls={false}>
                {
                    tesimonailsData.map(val=>{
                        return(
                            <Carousel.Item key={val.id}>
                                <blockquote>
                                    <p>{val.description}</p>
                                    <cite>
                                        <span className='name'>{val.name}</span>
                                        <span className='designation'>{val.designation}</span>
                                    </cite>
                                </blockquote>
                                </Carousel.Item>
                        )
                    })
                }             
                </Carousel>
          
            </Container>
        </section>
        </>
    )
}