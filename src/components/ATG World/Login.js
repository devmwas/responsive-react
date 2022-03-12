import React from 'react'

function Login() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <form style={{padding: 30}}>
            <h1>Sign Up Today</h1>
            <div className='form-group' style={{marginTop: 30}}>
                <label for={'username'}>
                    Name &nbsp;&nbsp;
                </label>
                <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                    <input type={'text'} id={'username'} className={'form-control'} borderBottom={'5px solid back'} />
                </div>
            </div>

            <div className='form-group' style={{marginTop: 30}}>
                <label for={'whatsappNumber'}>
                    WhatsApp Number &nbsp;&nbsp;
                </label>
                <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                    <input type={'text'} id={'whatsappNumber'} className={'form-control'} />
                </div>
            </div>

            <div className='form-group' style={{marginTop: 30}}>
                <label for={'videoLink'}>
                    Video Link (Public Drive Link) &nbsp;&nbsp;
                </label>
                <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                    <input type={'text'} id={'videoLink'} className={'form-control'} />
                </div>
            </div>

            <div className='form-group' style={{marginTop: 30}}>
                <label for={'hostLink'}>
                    Host Link &nbsp;&nbsp;
                </label>
                <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                    <input type={'text'} id={'hostLink'} className={'form-control .form-control-lg'} />
                </div>
            </div>

            <div className='form-group' style={{marginTop: 30}}>
                <label for={'githubLink'}>
                    Github Link &nbsp;&nbsp;
                </label>
                <div className='col-sm-6' style={{minWidth: 610, maxWidth: 610}}>
                    <input type={'text'} id={'githubLink'} className={'form-control'} />
                </div>
            </div>

            <button type='submit' style={{marginTop: 30}} className={'btn btn-success'}>Submit</button>

        </form>
    </div>
  )
}

export default Login