import React from 'react'
import closeButton from './Images/closeButton.png'
import fbLogo from './Images/fbLogo.png'
import googleLogo from './Images/googleLogo.png'

const logoStyles = {
    height: 20,
    width: 20
}


function Login({setJoined, setRegister, setLeave}) {
  return (
    <div style={{padding: 30, zIndex: 100}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='col-sm-12' style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{}} ><h4>Welcome Back</h4></span>
                <span><img style={{height: 20}} src={closeButton} onClick={() => {
                    setJoined(false)
                    setRegister(false)
                }} /></span>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <div className='form-group' style={{marginTop: 30}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Name'} />
                    </div>
                </div>

                <div className='form-group' style={{marginTop: -1}}>
                    <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                        <input type={'text'} id={'username'} className={'form-control'} 
                        borderBottom={'5px solid back'} placeholder={'Password'} />
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 50}}>
                    <button type='submit' style={{borderRadius: '100px'}} 
                        className='btn btn-lg btn-primary col-sm-5' onClick={() => {
                            setJoined(false)
                            setRegister(false)
                            setLeave(false)
                        }} >
                        Sign In
                    </button>

                    <a href='#' onClick={() => {
                        setRegister(true)
                        setJoined(false)
                    }}>or, Create Account</a>
                </div>
            </form>
        </div>


        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
            <button type="button" class="btn btn-outline-secondary btn-lg btn-block col-sm-12" >
                <img src={googleLogo} style={logoStyles} alignSelf={'center'} />&nbsp;Sign in with Google
            </button>
            <button type="button"  class="btn btn-outline-secondary btn-lg btn-block col-sm-12" 
                style={{marginTop: 20}}>
                    <img src={fbLogo} style={logoStyles} alignSelf={'center'} />&nbsp;Sign in with Facebook
            </button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <a href='#' style={{marginTop: 50}}>Forgot Password</a>
        </div>


    </div>
  )
}

export default Login