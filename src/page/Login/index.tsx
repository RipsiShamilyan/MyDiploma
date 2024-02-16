import React, { useEffect } from "react";
import "./style.css"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../features/type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { getUsersAPI, getUsersByAPI, loginUserAPI } from "../../features/user/userAPI";

export const Login: React.FC = React.memo((): JSX.Element => {
  const navigate = useNavigate();
  const { users } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<{username:string, password:string}>()

  const save = (data: {username:string, password:string}) => {
    console.log(data);
    dispatch(loginUserAPI(data))
    .unwrap()
    .then((res)=>{
      console.log(res);
      if(res){
        localStorage.token = res.token;
        navigate("/profile")
      }
      
    }).catch(e=>{
      console.warn(e);
      alert("...")
      
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <section>

          <div className="signin">

            <div className="content">

              <h2>Մուտք</h2>

              <div className="form1">

                <div className="inputBox">

                  <input type="text" placeholder="Մուտքանուն" {...register("username", { required: "Մուտքագրեք մուտքանունը*" })} />
                  {errors.username && (
                    <p style={{ fontSize: "12px", color: "rgb(255, 40, 40)" }}>{errors.username.message}</p>
                  )}
                </div>

                <div className="inputBox">

                  <input type="password" placeholder="Գաղտնաբառ" {...register("password", { required: "Մուտքագրեք գաղտնաբառը*" })} />
                  {errors.password && (
                    <p style={{ fontSize: "12px", color: "rgb(255, 40, 40)" }}>{errors.password.message}</p>
                  )}

                </div>

                <div className="links"> <a href="#">Մոռացե՞լ եք գաղտանբառը</a> <Link to={"/register"}>Գրանցվել</Link>

                </div>

                <div className="button5">
                  <button>Մուտք գործել</button>
                </div>

              </div>

            </div>

          </div>
          <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span><span></span> <span></span> <span></span> <span></span><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
          <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
        </section>
      </form>
    </div>
  )
})