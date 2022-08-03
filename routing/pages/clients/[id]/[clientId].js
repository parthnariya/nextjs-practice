import {useRouter} from 'next/router'
function PerticularProjectOfClientPage() {
    const router = useRouter()
    console.log(router.query)
    return <div>
        <h1>PerticularProjectOfClientPage</h1>
    </div>
}
export default PerticularProjectOfClientPage