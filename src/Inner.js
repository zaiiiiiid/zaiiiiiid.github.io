import cvsu from './images/cvsu.png';

export default function Inner() {
    return(
        <div className="inner-content">
            <div className="inner">
                <p className="inner-p1">Hello!</p>
                <p className="inner-p2">I am a Bachelor of Science in Information Technology 2023 graduate from Cavite State University - Tanza.</p>
            </div>
            <div className="inner2">
                <img className='cvsu' src={cvsu}/>
            </div>
        </div>
    )
}