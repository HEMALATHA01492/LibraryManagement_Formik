import React from 'react'
import { Link } from 'react-router-dom'

function Booklist({ book, setBook,setEditid,tempbook }) {




    function Bookdelete(id){
        setBook(book.filter(b=>id!==b.id))
    }


    return (
        <div className='container-fluid'>
            <div className='row'>
                {tempbook.length>0? 
                (tempbook.map((b, i) => {
                    return (
                        <div className='col-lg-3 col-sm-12 m-5' key={i}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={b.image} className="card-img-top" alt="..." height="300px" width="100px" />
                                <div className="card-body">
                                    <h6 className="card-title fw-bold">{b.title}</h6>
                                    
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fw-bold">Author : {b.author}</li>
                                    <li className="list-group-item fw-bold ">Edition : {b.edition}</li>
                                    <li className="list-group-item fw-bold ">No of Page : {b.pages}</li>

                                    <li className="list-group-item">
                                        <Link to='/Editbook'><span className='btn btn-primary m-2' onClick={()=>setEditid(b.id)}>Edit</span></Link>
                                        <Link><span className='btn btn-danger' onClick={()=>{Bookdelete(b.id)}}>Delete</span></Link>
                                    </li>
                                </ul>

                            </div>
                        </div>)
                })):
                (
                        <input className='form-control text-center bg-primary text-white' type='text' readOnly value="Books Not Available"/>
                )}

            </div>
        </div>
    )
}

export default Booklist;