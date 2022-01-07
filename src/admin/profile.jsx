import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Layout from './component/layout'

function Profile() {

    const [user,setUser] = useState(null);

    useEffect(() => {

        getUser();

    },[])


    const getUser = () => {

        let token = localStorage.getItem('token');
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        axios.get(`${process.env.REACT_APP_API_URL}/auth`, {})
        .then(function (response) {
          
           setUser(response.data.user)
        }).catch(function (error) {

        });

    }

    const handle = (e) => {
        e.preventDefault();
       
        alert('asdasdasd');

    }

    return (
        <Layout> 
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Profile</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='container-fluid' >
                { user != null ?
                
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">My Profile </h4>
                            <form onSubmit={handle} className='py-2' >
                                <div className="py-2 form-group">
                                    <label className='form-label' >Username</label>
                                    <input name='name' type="text" defaultValue={user.name} className="form-control"  />
                                </div>
                                <div className="py-2 form-group">
                                    <label className='form-label'>Email address</label>
                                    <input name='email' defaultValue={user.email} type="email" className="form-control"  />
                                </div>
                                <div className="py-2 form-group">
                                    <label className='form-label'>Password</label>
                                    <input name='password' type="password" className="form-control"  />
                                </div>
                                <div className="py-2 form-group text-center">
                                    <input type="submit" className='btn btn-primary' value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div> : '' 
               }
            </div>
      </Layout>
    )
}

export default Profile
