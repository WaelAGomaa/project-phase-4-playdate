import React, { useState, useEffect } from "react";
function ProfileInfo({setCurrentUser, user, setUser, currentUser}) {
    // const { username, email } = user;
  // const { username, email, address, age, early, nightOwl, name, emergency } = user;
  const [isShow, setShow] = useState(true);
  const [errors, setErrors] = useState([]);

//   useEffect(() => {
//     console.log(user)
//     if (user){
//     fetch(`/users/${user.id}`)
//     .then(res => res.json())
//     .then(data => {
//       if(data.errors){
//           console.log(data.errors);
//       } else {
//           setUser({address: data.address, image: data.image, name: data.name, 
//             age: data.age, early: data.early, nightOwl: data.nightOwl, emergency: data.emergency});
//       }
//     })}
// }, [user])
  function handleSubmit(e){
    e.preventDefault();
    if (currentUser){
    fetch(`/users/${currentUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        if(data.errors){
            console.log(data.errors)
        } else {
            console.log("update success!:", data);
        }
    })}
}
  function toggleShow() {
    setShow(!isShow);
  }


  return (
    <>
    {currentUser ? <>
        <div className="template2">
          <h2>Welcome! {currentUser.username}</h2>
          <h2>{currentUser.email}</h2>
          <img
            src={
              currentUser.image
            }
            alt="alt"
          />
          <h2>
            {currentUser.name} {currentUser.age}
          </h2>
          <h2>{currentUser.address}</h2>
          <h2>
            {currentUser.early ? "🐓" : null} {currentUser.nightOwl ? "🦉" : null}
          </h2>
          <h2>{currentUser.emergency ? "🚨" : null}</h2>
        </div> 

      <div className="template4">
        {isShow ? (
          <button className="button2" onClick={toggleShow}>
            Edit Profile
          </button>
        ) : (
          <>
            <form onClick={handleSubmit}>
              <div className="setbutton">
                <input
                  className="data"
                  placeholder="Add Profile Picture"
                  type="url"
                  onChange={e => setCurrentUser({...currentUser, image: e.target.value})}
                />
              </div>
              <div className="setbutton">
                <input
                  className="data"
                  placeholder="Add Your kid's name"
                  type="text"
                  onChange={e => setCurrentUser({...currentUser, name: e.target.value})}
                />
                <input
                  className="data"
                  placeholder="Add Your kid's age"
                  type="number"
                  max="10"
                  onChange={e => setCurrentUser({...currentUser, age: e.target.value})}
                />
                <input
                  className="data"
                  placeholder="Add Your address"
                  type="text"
                  onChange={e => setUser({...user, address: e.target.value})}
                />
              </div>
              <div id="checks">
                <label>🐓</label>
                <input
                  className="data"
                  placeholder="Are You an early bird? 🐓"
                  type="checkbox"
                  // value="🐓"
                  onChange={e => setUser({...user, early: e.target.checked})}
                />
                <label>🦉</label>
                <input
                  className="data"
                  placeholder="Are You a night owl? 🦉"
                  type="checkbox"
                  // value="🦉"
                  onChange={e => setUser({...user, nightOwl: e.target.checked})}
                />
                <label>🚨</label>
                <input
                  className="data"
                  placeholder="Are You able to provide help in an emergency ?"
                  type="checkbox"
                  // value="🚨"
                  onChange={e => setUser({...user, emergency: e.target.checked})}
                />
              </div>
              <input type="submit" 
            value="Save" 
            className="button2" 
            />
            </form>
              {errors ? <div>{errors}</div> : null}
          </>
        )}
      </div>
      </> : <h1 className="template4">Please log in</h1> }
      </>
  );
}
export default ProfileInfo;