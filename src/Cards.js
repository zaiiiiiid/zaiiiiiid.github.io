export default function Cards(props){
    return(
        <div className="cards">
            <img className="card-img" src={props.item.img}/>
            <p>{props.item.title}</p>
        </div>
    )
}