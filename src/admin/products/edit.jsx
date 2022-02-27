import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Update,Edit} from '../../store/actions/ProductAction'

export default function Page() {

    const {id} = useParams();
    const dispatch = useDispatch();
    let {validations,single,data,loading} = useSelector(store => store.ProductReducer);
    const [thumbnail,Setthumbnail] = useState(false);
    const [form,setForm] = useState({
        title:'',
        description:'',
        price:'',
        sku:'',
        category_id:''
    });


    useEffect(() => {
         dispatch(Edit(id))  
    }, [data])


    useEffect(() => {
         if(single){
             setForm({
                title:single.title,
                description:single.description,
                price:single.price,
                sku:single.sku,
                category_id:single.category_id
             });
             Setthumbnail(single.thumbnail);
         }
    }, [single])
    

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
            description:form.description,
            thumbnail:thumbnail,
            price:form.price,
            sku:form.sku,
            category_id:form.category_id,
        };

        dispatch(Update(id,senddata));

    }

    return (<>
          <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Edit Product</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">products</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="card">
                    <div className="card-body">
                    {loading ?  <p className=' text-center ' >Loading Products</p>  :
                        <>
                        { single ? 
                        
                        <form encType="multipart/form-data" onSubmit={handle} className='py-2' >
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
                            <label className='form-label' >Price</label>
                            <input type="number" onChange={inputChange} value={form.price} name='price' className="form-control"  />
                            { validations?.price ? <p> {validations.price} </p> : ''}
                             </div>
                            </div>


                            <div className="col-md-4">
                            <div className="pb-1 form-group">
                            <label className='form-label' >Sku</label>
                            <input onChange={inputChange} value={form.sku} name='sku' className="form-control"  />
                             </div>
                            </div>

                            <div className="col-md-4">
                            <div className="pb-1 form-group">
                            <label className='form-label' >Category</label>
                            <select className='form-control' value={form.category_id}  onChange={inputChange} name="category_id" >
                               <option value="" >Select Category</option>
                                { data ? data.map((module,key) => {
                                    return <option key={key} value={module.id}>{module.title}</option>
                                  }) : '' }
                            </select>
                              { validations?.category_id? <p> {validations.category_id} </p> : ''}
                             </div>
                            </div>

                            <div className="col-md-4">
                            <div className="pb-1 form-group">
                            <label className='form-label' >Thumbnail</label>
                            <input type="file" onChange={imgChange} className="form-control"  />
                              { thumbnail ? <img className='thumbnail' src={thumbnail}   /> : ''}
                             </div>
                            </div>
                            
                            <div className="col-md-12">
                            <div className="pb-1 form-group">
                            <label className='form-label' >Description</label>
                            <input onChange={inputChange} value={form.description} name='description' className="form-control"  />
                             </div>
                            </div>

                            <div className="col-md-12">
                                <div className=" pt-3 pb-1 form-group text-center">
                                <input type="submit" className='btn btn-primary' value="Update" /> 
                                </div>
                            </div>
                        </div>
                    </form> : '' }
                 
                    </>}   
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
                width:50px;
                padding-top:5px;

            }
                    
          `}</style>
 </>)
}