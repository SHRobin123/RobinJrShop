//import React from 'react';

// const Card = () => {
//     return (
//       <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
//          <div class="$$card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//  <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//  <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//  <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//  <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

//  <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//       </section>
//     );
// };

// export default Card;




import React, { useEffect, useState } from 'react';

const Card = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    return (

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">

            {
                products.map(product => (

                    <div
                        key={product.id}
                        className="card bg-base-100 shadow-sm"
                    >

                        <figure>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-60 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body">

                            <h2 className="card-title">
                                {product.title}
                            </h2>

                            <p>
                                {product.description}
                            </p>

                            <div className="card-actions justify-end">

                                <button className="btn btn-primary">
                                    Buy Now
                                </button>

                            </div>

                        </div>

                    </div>

                ))
            }

        </section>
    );
};

export default Card;