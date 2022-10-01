// Project files
import CardBasic from "components/CardBasic";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
        architecto, aut blanditiis maxime cumque hic fugit quae a delectus eum
        dolores? Natus, consequuntur amet! Quisquam at laboriosam dignissimos
        ullam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis
        dicta eum tempore assumenda perferendis non porro odio accusantium eaque
        sequi voluptates magnam laborum facere numquam quisquam, tempora
        recusandae molestiae!
      </p>
      <CardBasic id={1} imageURL="https://picsum.photos/300/200" />
    </div>
  );
}
