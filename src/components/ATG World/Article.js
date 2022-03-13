import React from 'react'

const articleTitleStyles = {
  position: 'absolute',
  width: '60px',
  height: '19px',
  left: '16px',
  // top: '40px',
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '18px',
  /* identical to box height */
  color: '#000000'
}

const nameStyles = {
  position: 'relative',
  height: '17px',
  // left: '25%',
  // top: '150px',
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '17px',
/* identical to box height */
  color: '#212529'
}

const viewStyles = {
  position: 'relative',
  marginTop: 3,
  height: '16px',
  // left: '25%',
  // top: '170px',
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '16px',
  /* identical to box height */
  color: '#495057'
}

const shareStyles = {
  position: 'absolute',
  position: 'absolute',
  width: '70px',
  height: '36px',
  right: '15.5%',
  // top: '200px'
}

const articleContentStyles = {
  position: 'relative',
  width: '100%',
  height: '500px',
  padding: 50,
  left: '0px',
  // background: 'green',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
}

function Article(props) {
  const {articleTitle, articleImage, articleHeader, more, job, jobImg, location, date, 
    articleText, writerImage, views, name, calender, visitWebsite, locationImg, share } = props
  
  return (
    <div className='row' style={{}} >
      {/* Article Image */}
        <div style={{}}>
          <img className='img-responsive col-sm-12' src={articleImage} />
        </div>

        {/*  Article Content */}
        <div style={{...articleContentStyles}} >
          
          {/* Article Title */}
          <div style={{display: 'flex', justifyContent: 'start', marginBottom: 20}} className={'container'}>
            <div style={{articleTitleStyles}}>
              <img src={articleTitle} className='img-responsive col-xs-12' />
            </div>
          </div>
          
          

          {/* Article Header */}
          <div style={{display: 'flex', marginBottom: 20}} className={'container'}>
            <div className='col-sm-8' >
              <b> {articleHeader} </b>
            </div>

            <div style={{position: 'absolute', right: '10%'}}>
              <img src={more} className='img-responsive col-sm-4' />
            </div>
          </div>

          {/* Article Text */}
          <div className='container'>{articleText && <b> {articleText} </b>}</div>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: 20}} className={'container'}>
            
            <div className={'row'} style={{background: 'red', display: 'block'}}>

            </div>
                {location && <div className='col-sm-4'>< br />< br /><img src={locationImg} /> {location} </div>}
                {date && <div className='col-sm-4'><br /><br /><img src={calender} /> {date}</div> } 
                {job && <div className='col-sm-4'><br /><br /><img src={jobImg} />&nbsp; &nbsp;{job}</div> }
          </div>


          {/* Article Writer Image */}
          <div style={{display: 'flex', marginTop: 20}} className={'container'}>
            <div>
              <div style={{}}>
                <img src={writerImage} className='img-responsive col-xs-12' />
              </div>
              
            </div>

              {/* Name and Views */}
              <div style={{alignSelf: 'center', marginLeft: 10}}>
                <div style={{...nameStyles}}>
                    {name}
                  </div>

                  <div style={{...viewStyles}}>
                    {views}
                  </div>
              </div>

              {/* Share Button */}
              <div style={{...shareStyles, alignSelf: 'center', marginLeft: 10, right: '11%'}}>
                <img src={share} />
              </div>

          </div>

          

        </div>

    </div>
  )
}

export default Article