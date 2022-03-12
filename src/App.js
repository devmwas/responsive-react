import Groups from './components/ATG World/Groups'
import {Route, Routes} from 'react-router-dom'
import Login from './components/ATG World/Login'

const App = () => {
    return (
        <div>
            {/* <Groups /> */}
            <Routes>
                <Route path={'/'} element={<Groups />} />
                <Route path={'/login'} element={<Login />} />
            </Routes>
        </div>
    )
}

export default App