import React from 'react'
import homeImage from './Images/homeImage.png'
import joinGroup from './Images/joinGroup.png'
import forest from './Images/forest.png'
import Article from './Article'
import Posts from './Posts'
import data from './data'
import filter from './Images/filter.png'
import { useNavigate } from 'react-router-dom'


const holderStyles = {
    // backgroundImage: `url(${homeImage})`,
    // height: 1194,
    // width: 1821
    // left: '0px',
    // background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)'
}

const headerStyle = {
    position: 'absolute',
    width: '179px',
    height: '22px',
    left: '16px',
    top: '188px',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '22px',
/* identical to box height */
    color:' #FFFFFF'
}

const filterImageStyles = {
    position: 'relative',
    left: 1300
}

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
    const Articles = data.map(article => <Article {...article} />)
    const navigate = useNavigate()

    const handleClick = () => [
        navigate('/login')
    ]

  return (
    <>
        <div style={{...holderStyles}} >
            <img src={homeImage} className={'img-responsive col-sm-12'} style={{zIndex: -10}} />
            <div style={{display: 'flex'}}>
                <img src={joinGroup} onClick={handleClick} style={{position: 'absolute', top: '5%', right: '5%'}} className={'img-responsive col-sm-3'} />
                <div style={{position: 'absolute', left: '5%',alignSelf: 'flex-end', color: 'white'}} className={'img-responsive col-sm-9'}>
                    <h1 style={{}}><b>Computer Engineering</b></h1>
                    <h3 style={{}}><b>142,765 Computer Engineers follow this</b></h3>
                </div>
            </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={postsStyles}>Posts(368)</div>
            {/* <img style={filterImageStyles} src={filter} /> */}

            {/* <label for="cars" style={{display: 'inline-block', color: 'black', position: 'absolute', right:'10%'}}><b>Filter</b>: &nbsp; &nbsp; </label> */}
            
            <div style={{display: 'flex', width: '100%', position: 'absolute', justifyContent: 'end', paddingRight: 40}}>
                <h2 style={{alignSelf: 'center'}}>Filters: &nbsp;&nbsp;&nbsp; </h2>
                <form>
                    <select name="cars" id="cars" className='form-select'>
                    <option value="volvo" style={{background: '#F1F3F5'}}>All</option>
                    <option value="saab" style={{background: '#F1F3F5'}}>React</option>
                    <option value="mercedes" style={{background: '#F1F3F5'}}>Vue</option>
                    <option value="audi" style={{background: '#F1F3F5'}}>Angular</option>
                    </select>
                </form>
            </div>
        </div>

        { Articles }

        
        {/* <Article {...data[1]} /> */}
    </>
  )
}

export default Groups