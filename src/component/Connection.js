import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Connection = () => {
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    console.log('article data  ', data)
  }, [data])

  const getData = () => {
    axios.get("http://localhost:3003/articles")
      .then((res) => setData(res.data));
  }
  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (content.length > 200) {
      setError("true")
    } else {


      axios.post("http://localhost:3003/articles", {

        author,
        content

      }
      ).then(() => {
        setAuthor("");
        setContent("");

      });
    }
  }

  return (

    <div className='connection'>
      <form onSubmit={(e) => handleOnsubmit(e)}>
        <label>wbbj</label>

        <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder=' your-mail' value={author} /><br />

        <input
          style={{ border: error ? '1px solid red' : '1px solid black' }}
          onChange={(e) => setContent(e.target.value)} type={passwordIsVisible ? 'password' : 'text'} placeholder=' your-password' value={content} />
        <button onClick={() => setPasswordIsVisible(!passwordIsVisible)} >{passwordIsVisible ? <FaEyeSlash className="fa" /> : <FaEye className="fa" />} </button>
        <br />

        <input type="submit" value="connection" className="bts" />
        <div className="edition">
          <em>@ 2022</em>
          <p>powered by Wbbj</p>
        </div>

      </form>


    </div>
  );
};

export default Connection;