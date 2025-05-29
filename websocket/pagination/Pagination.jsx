import React, { use } from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentpage, setcurrentpage] = useState(0);

  const API = `https://dummyjson.com/products`;
  const length = products.length;
  const productperpage = 6;
const start= currentpage*productperpage;
const end= start+ productperpage;

const clickpages= (pagenos)=>{
 
setcurrentpage(pagenos)
}

  const noofpages = (length / productperpage);
  function handlepage(n) {
    let result = [];
    for (let i = 0; i < n ; i++) {
      result.push(i);
    }
    return result;
  }
  const pagenos = handlepage(noofpages);


  // const pageNos = Array.from({ length: noofpages + 1 }, (_, i) => i + 1);

  const data = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data.products);
      console.log("api rec", data.products);
    } catch (error) {
      return console.error("api not rec", error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="">
      <div >{pagenos.map((p,index)=>{
        return (
          <button onClick={()=>clickpages(p)} key={index}>{p}</button>
        )
      })}</div>
      {/* <h1>{pageNos}</h1> */}

      <div className="prods">
        {!products
          ? "no products available"
          : products.slice(start, end).map((post, index) => {
              return (
                <div className="cards" key={post.id}>
                  <Cards
                    key={index}
                    id={post.id}
                    tit={post.title}
                    price={post.price}
                    image={post.images}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};
export default Pagination;

//   return (
//     <div>
//       <h1>pagination</h1>
//       <div>{products.map((post,index)=>{
//         return (
//           <div key={index}>

// {/* <div>{image={post.images}}</div>
// <div>{price={post.price}}</div> */}
// <img src={post.images} alt="" />
//           </div>
//         )
//       }
//       )}</div>
//     </div>
//   )
// }
