const UserPage = (props) => {
    return <p>{props.name}</p>
}


export async function getServerSideProps(context) {
    console.log(context)
    return {
        props :{name : "parth"}
    }
}
export default UserPage;