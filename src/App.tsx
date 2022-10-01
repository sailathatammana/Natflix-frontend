// Project files
import CardBasic from "components/CardBasic";
import CardTop10 from "components/CardTop10";
import NavigationBar from "components/NavigationBar";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      {/* Typography */}
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

      {/* Buttons */}
      <button className="button">Red button</button>
      <button className="button button-white">White button</button>
      <button className="button button-gray">Gray button</button>

      {/* Navigation bar */}
      <NavigationBar />

      {/* Cards */}
      <CardBasic id={42} imageURL="https://picsum.photos/300/200" />
      <CardTop10 id={69} number={1} imageURL="https://picsum.photos/200/300" />
      <CardTop10 id={70} number={5} imageURL="https://picsum.photos/200/300" />
      <CardTop10 id={71} number={10} imageURL="https://picsum.photos/200/300" />
    </div>
  );
}
