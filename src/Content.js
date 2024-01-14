import html from './images/html5.png'
import css from './images/css.png'
import react from './images/react.png'
import javascript from './images/javascript.png'
import bootstrap from './images/bootstrap.png'

export default function Content(){
    return(
        <div className='content-out'>
          <div className='content-in'>
            <h1 className='content1'>{'<'}DEVELOPER{'/>'}</h1>
            <p className='content2'>Specializes in web developing.</p>
              <div className='skill'>
                <img className='skills html' src={html}/>
                <img className='skills css' src={css}/>
                <img className='skills javascript' src={javascript}/>
              </div>
                <img className='skills2 react' src={react}/>
                <img className='skills2 bs' src={bootstrap}/>
          </div>
      </div>
    )
}