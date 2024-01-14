import Card from './Cards';
import Data from './Data'
export default function Projects() {

    const cardEl = Data.map (card => {
        return <Card
        key={card.id}
        item={card}/>
    })

    return(
        <div className='project'>
            <h1 className='title-proj'>My Hobbies</h1>
                <div className='card-container'>
                    <section className='project-card'>{cardEl}</section>
                </div>
        </div>
    )
}