import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import fetch from 'node-fetch';

export default function Card() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const api =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f09a9e68a3f24cdb8384663c5ddffe75";

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError("Something went wrong", error);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
}, []);

  if (loading) {
    return (
      <div>
        <h1 style={{textAlign:  'center', marginTop: "100px",
    fontSize: "50px", color: "white"
        }}>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  const cardData = data.articles.map((item, index) => {
    return (
      <div key={item.url} className="container">
        <div className="card-row" key={index}  >
          <div
          style={{height :"600px", backdropFilter: "blur(10px)"} }
            className="card-to-column card"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              src={item.urlToImage}
              alt=""
              data-aos="flip-left"
              data-aos-duration="2800"
              className="card-image"
            />
            <div
              className="card-content"
              data-aos-duration="1150"
              data-aos="fade-up"
            >
              <span className="card-category">{item.source.name}</span>
              <h2 className="card-title" >{item.title}</h2>
            </div>
            <p className="card-text" data-aos="fade-up">
              {item.description}
            </p>
            <a
              rel="noreferrer"
              href={item.url}
              target="_blank"
              data-aos="fade-up"
              style={{marginBottom: "20px"}}
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div>{cardData}</div>;
}