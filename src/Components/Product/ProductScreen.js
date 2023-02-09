import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ProductScreen = () => {

  const [data, setData] = useState([])


  useEffect(() => {


    const fetchData = () => {
      return fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    fetchData();
    console.log(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">


          {
            data.map((val, index) => {

              return (
                <div className="col-md-3">
                  <>
                    <Card className='h-100' key={val.id}>
                      <Card.Img variant="top" height={150} width={50} src={val.image} />
                      <Card.Body>
                        <Card.Title>{val.title.substring(0, 8)}...</Card.Title>
                        <Card.Text>
                          {val.description.substring(0, 25)}....
                        </Card.Text>
                        <Button variant="primary">
                          <Link to={`/product/${val.id}`}>
                            Go somewhere
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </>

                </div>
              )

            })
          }


        </div>
      </div>

    </>
  )
}

export default ProductScreen