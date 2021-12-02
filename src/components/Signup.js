import React, {useState} from 'react';
import {NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    // const history = useNavigate();
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""});

        let name,value;
        const handleInputs = (e) =>{
            console.log(e);
            name = e.target.name;
            value = e.target.value;

            setUser({...user, [name]:value});

        }

        const PostData = async(e) =>{
                e.preventDefault();

                const { name, email, phone, work, password, cpassword } = user;

                const res = await fetch("/register", {
                    method:"POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        name, email, phone, work, password, cpassword
                    })
                });
                const data = await res.json();

                if(data.status === 422 || !data){
                    window.alert("invalid registration");
                    console.log("Invalid registration");
                }else{
                    window.alert("Registration Successfully");
                    console.log("Registration Successfully");

                    navigate("/login");
                }
        }



    return (
        <>
          <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <input type="text" name="name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="Number" name="phone" autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Your phone no"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="work" autoComplete="off"
                                    value={user.work}
                                    onChange={handleInputs}
                                    placeholder="Your occupation"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="cpassword" autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="confirm your password"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                    value="register" onClick={PostData}
                                     />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
          </section>
            
        </>
    )
}

export default Signup