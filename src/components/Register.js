import React from 'react';

function Register(props){
    let changeUserAuth = () => props.updateOption({
        userRegistered: true,
        userType: "default"
    });
    let partnerDetails = {
        partnerName : <input type="text" name="organisation" placeholder="Organisation Name (Optional)"/>
    };
    let farmerDetails = {
        farmName : <input type="text" name="farmName" placeholder="Farm Name (Optional)"/>,
        farmSize : <input type="text" name="farmSize" placeholder="Farm Size*"/>,
        farmCrop : <input type="text" name="farmCrop" placeholder="Farm Crop*"/>
    };
    return(<div>
        <div><h1>Register {(props.option.userType === "isPartner") ? "Partner" : "Farmer" }</h1></div>
        <input type="text" name="firstName" placeholder="First Name*"/>
        <input type="text" name="lastName" placeholder="Last Name*"/>
        <input type="text" name="mobile" placeholder="Mobile Number*"/>
        <input type="email" name="email" placeholder="Email*"/>
        {(props.option.userType === "isPartner") ? partnerDetails.partnerName : farmerDetails.farmName }
        <input type="text" name="country" placeholder="Country*"/>
        {(props.option.userType === "isFarmer") ? farmerDetails.farmSize : "" }
        {(props.option.userType === "isFarmer") ? farmerDetails.farmCrop : "" }
        <input type="password" name="password" placeholder="Password*"/>
        <div>
            <div  onClick={() => changeUserAuth()}>
                Back
            </div>
            <button type="button" action="" className='btn'>
                Sign up
            </button>
        </div>
    </div>);
}
export default Register;