import {Routes,Route} from 'react-router-dom';
import Home from './front/home';
import About from './front/about';

import Login from './admin/login';
import Register from './admin/register';
import Dashboard from './admin/dashboard';

function App() {
  return (<>
            <Routes>
                    <Route exact path="/" element={<Home />}  />
                    <Route exact  path="/about" element={<About />}  />
                  
                  
                    {/*Admin Routes  */}
                    <Route exact  path="/admin/login" element={<Login />}  />
                    <Route exact  path="/admin/register" element={<Register />}  />
                    <Route exact  path="/admin/dashboard" element={<Dashboard />}  />
                    
            </Routes>
       </>);
}

export default App;