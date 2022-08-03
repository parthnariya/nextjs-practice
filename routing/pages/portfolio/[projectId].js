import {useRouter} from 'next/router'
function ProjectIdPage ()  {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
    return <div>
        <h1>Project Id</h1>
    </div>
}
export default ProjectIdPage;