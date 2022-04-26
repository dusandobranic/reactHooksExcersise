import { useEffect, useState } from "react";
import axios from 'axios';

const EffectTutorial = () => {

  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  const getComments = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/comments").then(
      res => {
        setComments([...res.data])
      }
    );
    console.log('pozvao api');
  }

  useEffect(() => {
    getComments()
  }, [count])

  const dataExpression = (array) => array.map(data => <p key={data.id}>{data.name}</p>)

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>
          increment
        </button>
        {count}
        {dataExpression(comments)}

      </div>
    </>
  );
}

export default EffectTutorial;