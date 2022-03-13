import React from 'react'
import closeButton  from './Images/closeButton.png'
import googleLogo from './Images/googleLogo.png'
import fbLogo from './Images/fbLogo.png'

const logoStyles = {
    height: 20,
    width: 20
}

function Register({setShowLogin, setShowRegister, setJoined}) {
  return (
    <div style={{padding: 30, zIndex: 100}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='col-sm-12' style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{}} ><h4>Create Account</h4></span>
                <span><img style={{height: 20}} src={closeButton} onClick={() => {
                    setShowRegister(false)
                    setShowLogin(false)
                }} /></span>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <div className='form-group' style={{marginTop: 30}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Firts Name'} />
                    </div>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Last Name'} />
                    </div>
                </div>

                <div className='form-group' style={{marginTop: -1}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Email'} />
                    </div>
                </div>

                <div className='form-group' style={{marginTop: -1}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Password'} />
                    </div>
                </div>

                <div className='form-group' style={{marginTop: -1}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Confirm Password'} />
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 50}}>
                    <button type='submit' style={{borderRadius: '100px'}} 
                        className='btn btn-lg btn-primary col-sm-5' onClick={() => {
                            setShowLogin(false)
                            setShowRegister(false)
                            setJoined(true)
                        }} >
                            Sign Up
                    </button>

                    <a href='#' onClick={() => {
                        setShowLogin(true)
                        setShowRegister(false)
                    }}>or, Sign In</a>
                </div>
            </form>
        </div>


        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>

            <button type="button" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} 
                class="btn btn-outline-secondary btn-lg btn-block col-sm-12" >
                    <img src={googleLogo} style={{...logoStyles }}  />
                    &nbsp;&nbsp;
                    <span>Sign in with Google</span>
                    &nbsp;&nbsp;
                    <img src={googleLogo} style={{...logoStyles }}  />
            </button>

            <button type="button"  class="btn btn-outline-secondary btn-lg btn-block col-sm-12" 
                style={{marginTop: 20, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <img src={fbLogo} style={logoStyles} />
                    &nbsp;&nbsp;
                    <span>Sign in with Facebook</span>
                    &nbsp;&nbsp;
                    <img src={fbLogo} style={logoStyles} />
            </button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>

        <p style={{marginTop: 50}}> By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>

    </div>
  )
}

export default Register