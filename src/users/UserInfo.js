
export const UserInfo = ({ user }) => {
    const { id, name, username, email, phone } = user

    return user ? (
        <>
            <h3>{id}</h3>
            <h5>{name}</h5>
            <ul>
                <li>{username}</li>
                <li>{email}</li>
                <li>{phone}</li>
            </ul>
        </>
    ) : <p>Loading Data...</p>
}