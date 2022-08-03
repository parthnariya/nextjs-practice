import path from "path";
import fs from "fs/promises";
import Link from 'next/link'
function HomePage({ data }) {
  return (
    <ul>
      {data.map((e) => (
        <li key={e.id}><Link href={`/${e.id}`}>{e.title}</Link></li>
      ))}
    </ul>
  );
}



export async function getStaticProps() {
    console.log('regeneration......')
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  
  // console.log(data)
  return { props: { data: data.products },revalidate:10 };
}
export default HomePage;
