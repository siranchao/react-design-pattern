import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const CurrentUserLoader = ({ children }) => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
            console.log(users);
        })();
    }, [])

    return (
        <>
            {React.Children.map((children, child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { users })
                }
                return child
            })}
        </>
    )

}