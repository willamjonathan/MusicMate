import '../styles/Profile.css'

function Profile(){
    return(<div>
        <div class="Profile">
            <div class ="left-profile">
            <div class="nav-bar-profile">
                <div class="home-profile">
                    HOME
                </div>
                <div class="produce-profile">
                    PRODUCE
                </div>
                <div class="log-out-profile">
                    LOG OUT
                </div>
            </div>
            </div>
            <div class="right-profile">
                <div class="header-profile">
                    <div class ="profile-profile">Profile</div>
                </div>
                <div class="container-profile">
                    <div class="picture-profile">
                        
                    </div>
                    <div class ="details-profile">
                        <div class ="name-profile">
                            Name:
                        </div>
                        <div class="textfield1-profile">
                            *****
                        </div>
                        <div class ="username-profile">
                            Username:
                        </div>
                        <div class="textfield2-profile">
                             *****
                        </div>
                        <div class ="email-profile">
                            Email:
                        </div>
                        <div class="textfield3- profile">
                        *****
                        </div>
                        
                    </div>
                    <div class="edit-button-profile">
                        EDIT
                    </div>
                </div>

            </div>
        </div>
    </div>)
}
export default Profile;