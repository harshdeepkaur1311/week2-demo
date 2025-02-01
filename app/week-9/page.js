"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();   
    }

    const logout = async () => {
        await firebaseSignOut();      
    }

    return (
        <main>
          <h1>WEEK-9</h1>
          <div>
            { user ? ( 
                <div>
                    <p>Welcome, {user.displayName}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login with GitHub</button>
            ) }
            
          </div>
        
        </main>
    );
}






// "use client";
// import { useState } from "react";
// import ThemeContext from "./theme-context";
// import Toolbar from "./toolbar";
// import Content from "./content";


// export default function Page() {
//     const [theme, setTheme] = useState("light");
//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {/* this provider will make available these two things to all the children {these are global props--we don't have to pass them individually to children} */}
           
//         <main className={`h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
//             <h1>My app</h1>

        
//         <Toolbar />
//         <Content/>
//         </main>
//         </ThemeContext.Provider>
//     );
// }