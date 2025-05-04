import { Eye, SquarePen, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading, Error } from "../components";
import { deleteProduct, getAllProducts } from "../API/productAPI";
export function ProductList() {
  const [ products, setProducts ] = useState( [] )
  const [ errors, setErrors ] = useState( null )
  const [ isLoading, setIsLoading ] = useState( false )

  useEffect( () => {
    setIsLoading(true)
      getAllProducts().then( ( response ) => {
          setProducts( response.data )
      } ).catch( ( error ) => setErrors( error ) )
      setIsLoading(false)
  }, [] )


  const deleteHandler = (productId)=>{
    deleteProduct(productId).then(()=>{
      setProducts( products.filter( ( product ) => product.id != productId ) )
    }).catch((err)=>{
      console.log('err',err);
    })
  }
  return (
    <>
      {isLoading && <Loading />}
      {errors && <Error />}
      {!errors && !isLoading && (
        <table className="container table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => 
              <tr key={product.id}>
                <th className="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td style={{ cursor: "pointer" }} className="d-flex gap-2">
                  <Link to={`${product.id}`}>
                    <Eye className="text-warning" />
                  </Link>
                  <Link to={`${product.id}/edit`}>
                    <SquarePen className="text-info" />
                  </Link>
                  <Trash2 className="text-danger" onClick={()=>deleteHandler(product.id)} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
