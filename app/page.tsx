import GenerateBtn from "./components/generateBtn";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Add Details</h1>
      <div className="cardCont">

        <div className="card">
          <div className="cardHeader">
            <h1>💻 About</h1>
          </div>
          <div className="cardFold">
            <h2>Name</h2>
            <input type="text" />
          </div>
        </div>

        <div className="card">
          <div className="cardHeader">
            <h1>💻 Work experience</h1>
          </div>
          <div className="cardFold">
            <h2>Name</h2>
            <input type="text" />
          </div>
        </div>

        <div className="card">
          <div className="cardHeader">
            <h1>💻 Project</h1>
          </div>
          <div className="cardFold">
            <h2>Name</h2>
            <input type="text" />
          </div>
        </div>

        <Link href = {{
            pathname: "/demo",
            query:{
              name: "shivam pande",
            }
          }}><GenerateBtn/></Link> 

        </div>
    </main>
  );
}
