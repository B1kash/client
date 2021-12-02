import React, {useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";

const Aboutme = () => {
        const navigate = useNavigate();
        const [userData, setUserData] = useState({});

        const callAboutPage =async()=>{
            try{
                const res = await fetch('/aboutme',{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
                const data = await res.json();
                console.log(data);
                setUserData(data);

                if(!res.status === 200){
                    const error = new Error(res.error);
                    throw error;
                }

            }catch(err){
                console.log(err);
                navigate("/login")
            }
        }

    useEffect(() => {
       callAboutPage();
    }, [])

    return (
        <>
        <div className="container emp-profile">
            <from method ="GET">
                <div className ="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        {/* <img src ={pic} alt="thapa"/> */}
                        </div>
                   
                </div>
                <div className ="col-md-6">
                    <div className="profile-head">
                        <h5>{ userData.name }</h5>
                        <h6>web developer</h6>
                      <p className ="profile-rating mt-3 mb-5">Rankings: | <span>1/10</span></p>


                         <ul class="nav nav-tabs" role ="tqblist">
                            <li class="nav-item">
                                <a class="nav-link active"id="home-tab" data-toggle="tab" href="home" role="tab">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active"id="profile" data-toggle="tab" href="profile" role="tab">Timeline</a>
                            </li>
                       
                         </ul>
                    </div>
                </div>
                 <div className="col-md-2">
                     <input type="submit" className="profile-edit-btn" name="btnAddmore" value="Edit profile"/>
                 </div>
            </div> 

                <div className="row">
                  {/* left side url */}
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>Work Link</p>
                        <a href="" target="_blank">Youtube</a>
                        <a href="" target="_blank">Youtube</a>
                        <a href="" target="_blank">Youtube</a>
                        <a href="" target="_blank">Youtube</a>
                        </div>


                </div>

                    {/* right side data toogle */}

                <div className="col-mid-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>6345746575678456</p>
                                </div>
                            </div>
                            <div className="row-mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{ userData.name }</p>
                                </div>
                            </div>
                            <div className="row-mt-3">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{ userData.email }</p>
                                </div>
                            </div>
                            <div className="row-mt-3">
                                <div className="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{ userData.phone }</p>
                                </div>
                            </div>
                            <div className="row-mt-3">
                                <div className="col-md-6">
                                    <label>Profession</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{ userData.work }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>


             </from>
        </div>
        </>
    )
}

export default Aboutme
