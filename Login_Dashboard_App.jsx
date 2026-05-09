import React, { useState } from "react";

function App() {

    const [isLoggedIn, setIsLoggedIn] =
        useState(false);

    return (

        <div>

            <h1>Login Dashboard</h1>

            {
                isLoggedIn ? (

                    <div>

                        <h2>Welcome to Dashboard</h2>

                        <button
                            onClick={() =>
                                setIsLoggedIn(false)
                            }
                        >
                            Logout
                        </button>

                    </div>

                ) : (

                    <button
                        onClick={() =>
                            setIsLoggedIn(true)
                        }
                    >
                        Login
                    </button>

                )
            }

        </div>
    );
}

export default App;
