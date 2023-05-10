import "../styles/Login.css";

function Login() {
    return(<div>
        <div class="Login">
        <div class="left">
            <div class="Title">
                <div class = "MUSIC-MATE">MUSICMATE</div>
                <div class="Rectangle-84"> . </div>
                <div class = "Moto">
                Where Music Comes Alive
                </div>
            </div> 
        </div>
        <div class = "right">
            <div class = "user-info">
                <div class="username">
                    USERNAME
                </div>
                <div class="text-field1">
                    *****
                </div>
                <div class="password">
                    PASSWORD
                </div>
                <div class ="text-field2">
                    *****
                </div>
                <div class = "LogIn">
                    <div class ='button1'>
                        LOG IN
                    </div>
                    <div class ='create-an-account'>
                        Create an account
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>)
}

export default Login;