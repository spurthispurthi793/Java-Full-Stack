import React, { useState } from "react";

function App() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loggedIn, setLoggedIn] =
        useState(false);

    const login = () => {

        if (
            username === "admin" &&
            password === "1234"
        ) {
            setLoggedIn(true);
        } else {
            alert("Invalid Login");
        }
    };

    return (

        <div>

            <h1>User Authentication</h1>

            {
                loggedIn ? (

                    <h2>Welcome Dashboard</h2>

                ) : (

                    <div>

                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                        />

                        <button onClick={login}>
                            Login
                        </button>

                    </div>

                )
            }

        </div>
    );
}

export default App;
