import {Routes,Route} from 'react-router-dom';


import Login from './admin/login';
import Register from './admin/register';
import Dashboard from './admin/dashboard';
import Profile from './admin/profile';

function App() {
  return (<>
            <Routes>
                    <Route exact path="/" element={<Login />}  />
                  
                  
                    email.nextSibling.innerHTML = 'incorrect Email Address';           {/*Admin Routes  */}
                    <Route exact  path="/admin/login" element={<Login />}  />
                    <Route exact  path="/admin/register" element={<Register />}  />
                    <Route exact  path="/admin/dashboard" element={<Dashboard />}  />
                    <Route exact  path="/admin/profile" element={<Profile />}  />
                    
                    
            </Routes>
       </>);
}

export default App;