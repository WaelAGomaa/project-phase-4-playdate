import {Link } from 'react-router-dom';

function Settings({setIsAuthenticated, setUser, user, setCurrentUser, currentUser}) {

    console.log(currentUser)
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setCurrentUser(null)
        })
    }
    const deleteAccount = () => {
        fetch(`/users/${currentUser.id}`,{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setCurrentUser(null)
        })
    }
    return (
        <div className="template">
            <h1>Settings</h1>

            <div>
                <button className="button" onClick={logout}>Logout</button>
            <button className="button" onClick={deleteAccount}>delete</button>
                <h3><Link className="button" to="/home"> Home</Link></h3>
            </div>
        </div>
    )
}

export default Settings;