import {useRouter} from 'next/router'
function BlogPage() {
    const router = useRouter ()
    console.log(router.query)
    return <div>
        BlogPage
    </div>
}
export default BlogPage