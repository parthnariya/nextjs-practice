import fs from 'fs/promises';
import path from 'path';
const ProductDetailPage = (props) => {
    const {product} = props
    if (!product) {
      return <p>loading ...</p>
    }
    return <>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
    </>
}

export async function getStaticPaths() {
    return {
      paths : [
        {params : {pid : 'p1'}}
        
      ],
      fallback:true
    }
  }

export async function getStaticProps(context)  {
    const {params} = context;
    console.log(params)
    const productId = params.pid
    const filePath = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    const product = data.products.find(p => p.id === productId)

    return{
        props:{product}
    }
}

export default ProductDetailPage