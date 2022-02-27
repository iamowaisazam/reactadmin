import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Add} from '../../store/actions/CategoryAction'

function Create() {

    const dispatch = useDispatch();
    let {validations,success,loading} = useSelector( store => store.CategoryReducer);
    const [thumbnail,Setthumbnail] = useState(false);
    const [form,setForm] = useState({
        title:'',
        des:'',
    });

    useEffect(() => {
    
        return () => {
           dispatch({type:'Category:update',payload:{validation:false,success:false}});
        }
    }, [])

    
    useEffect(() => {
        if(success){
                setForm({
                    title:'',
                     des:'',
                });
                Setthumbnail(false);
            
        }
    },[success])


    const inputChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;
        setForm({...form,[name]:value})
    }

    const imgChange = (e) => {
        getBase64(e.target.files[0],(res)=>{
            Setthumbnail(res);
        });
    }


   const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handle = async (e) => {

        e.preventDefault();
        let senddata = {
            title:form.title,
            des:form.des,
            thumbnail:thumbnail,
        };
        dispatch(Add(senddata));
    }

    return (<>
         <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Create Categories </h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">categories</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="card">
                    <div className="card-body">
                    {loading ? <p className='text-center' >Loading Categories</p> :  <>
                        <form onSubmit={handle} className='py-2' >
                            <div className="row">
                                <div className="pb-2 col-md-6">
                                <div className="pb-1 form-group">
                                <label className='form-label' >Title</label>
                                <input onChange={inputChange} value={form.title} name='title' className="form-control"  />
                                { validations?.title? <p> {validations.title} </p> : ''}
                                 </div>
                                </div>

                                <div className="col-md-6">
                                <div className="pb-1 form-group">
                                <label className='form-label' >Thumbnail</label>
                                <input type="file" onChange={imgChange} className="form-control"  />
                                { thumbnail ? <img className='thumbnail' src={thumbnail}   /> : ''}
                                 </div>
                                </div>
                                
                                <div className="col-md-12">
                                <div className="pb-1 form-group">
                                <label className='form-label' >Description</label>
                                <input onChange={inputChange} value={form.des} name='des' className="form-control"  />
                                 </div>
                                </div>
                                <div className="col-md-12">
                                    <div className=" pt-3 pb-1 form-group text-center">
                                    <input type="submit" className='btn btn-primary' value="Submit" /> 
                                    </div>
                                </div>
                            </div>
                        </form>
                        </> 
                        }
                    </div>
                </div>
           </div>
       </div>

       <style jsx>{`

            .profile-screen{
      
            }

            .profile-container{
            
            }

            .profile-container form p {
                color:red;
                padding-top:5px;
                margin-bottom:4px;
            }

            .form-label {
                font-size: 16px;
                padding-bottom: 7px;
                color: #0e0e0e;
                font-weight: 500;
                padding: 0px;
            }

            .form .row > div {
                padding:0px 5px;
            }

            .thumbnail{
                padding-top:10px;
                width:50px;
            }
                    
          `}</style>
 </>)
}

export default Create