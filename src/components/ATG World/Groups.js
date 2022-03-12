import React from 'react'
import homeImage from './Images/homeImage.png'
import joinGroup from './Images/joinGroup.png'
import leaveGroup from './Images/leaveGroup.png'
import Article from './Article'
import data from './data'
import { useNavigate } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import {useState} from 'react'


const postsStyles = {
    position: 'relative',
    width: '73px',
    height: '70px',
    padding: 20,
    left: '16px',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '18px',
    letterSpacing: '0.01em',
    color: '#212529'
}

function Groups() {
    const [joined, setJoined] = useState(false)
    const [register, setRegister] = useState(false)
    const [leave, setLeave] = useState(true)

    const Articles = data.map(article => <Article {...article} />)
    const navigate = useNavigate()

    const handleJoinAndLeave = () => {
        setJoined(prevState => !prevState)
    }
    

  return (
    <>
        <div style={{display: 'flex', width: '100%', top: 250, position: 'absolute', justifyContent: 'center'}}>
            <div style={{background: 'white'}}>
                { joined && <Login setJoined={setJoined} setRegister={setRegister} setLeave={setLeave} /> }
                { register && <Register setJoined={setJoined} setRegister={setRegister} /> }
            </div>
        </div>

        <div >
            <img src={homeImage} className={'img-responsive col-sm-12'}  />
            <div style={{display: 'flex'}}>
                <img src={ leave ?  joinGroup : leaveGroup} onClick={handleJoinAndLeave} style={{position: 'absolute', top: '5%', right: '5%'}} className={'img-responsive col-sm-2'} />
                <img src={ joined ?  leaveGroup : joinGroup} onClick={handleJoinAndLeave} style={{position: 'absolute', top: '5%', right: '5%'}} className={'img-responsive col-sm-2'} />
                <div style={{position: 'absolute', zIndex: 1, left: '5%',alignSelf: 'flex-end', color: 'white'}} className={'img-responsive col-sm-9'}>
                    <h1 style={{}}><b>Computer Engineering</b></h1>
                    <h3 style={{}}><b>142,765 Computer Engineers follow this</b></h3>
                </div>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
            <div style={{...postsStyles, alignSelf: 'flex-start'}}>Posts(368)</div>
            
            <form style={{alignSelf: 'center', justifySelf: 'center'}}>
                <select name="frameworks" id="cars" className='form-select'>
                <option value="all" style={{background: '#F1F3F5'}}>Choose Your Framework</option>
                <option value="react" style={{background: '#F1F3F5'}}>React</option>
                <option value="vue" style={{background: '#F1F3F5'}}>Vue</option>
                <option value="angukar" style={{background: '#F1F3F5'}}>Angular</option>
                </select>
            </form>
        </div>


        { Articles }

        
        {/* <Article {...data[1]} /> */}
    </>
  )
}

export default Groups