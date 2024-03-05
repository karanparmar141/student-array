import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Api = () => {
    let [print, setPrint] = useState([])
    const HandelApi = async (action, id) => {
        switch (action) {
            case "get":
                let data = await axios.get("https://fakestoreapi.com/products")
                setPrint(data.data)
                alert(`get ${data.data.length} itmes successfully`)
                break;
            case "post":
                let obj = {
                    "title": "i phone 15",
                    "price": 70000,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "phone",
                    "image": "https://th.bing.com/th?id=OPAC.vChCRJS115e57A474C474&w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1",
                    "rating": {
                        "rate": 5,
                        "count": 120
                    }
                }
                let pos=await axios.post('https://fakestoreapi.com/products',obj)
                setPrint([...print,pos])
                console.log(print);
                alert(`1 itmes added successfully`)
                break;
            case "delete":
                setPrint(print.filter((e) => e.id !== id))
                let s = await axios.delete(`https://fakestoreapi.com/products/${id}`)
                alert(`${s.data.title} is deleted successfully`)
                break;
            default:
                break;
        }
    }



    return (
        <>
            <div className='p-5'>
                <button className='btn btn-outline-primary mx-4 text-uppercase fw-bold' onClick={() => HandelApi("get")}>get</button>
                <button className='btn btn-outline-primary mx-4 text-uppercase fw-bold' onClick={() => HandelApi("post")}>POST</button>
                <button className='btn btn-outline-primary mx-4 text-uppercase fw-bold' onClick={() => HandelApi("put")}></button>
            </div>
            <hr /><hr />
            <div className='row'>
                {
                    print.map((ele) => {
                        return (
                            <>
                                <div className='col-3 '>
                                    <Card >
                                        <Card.Img variant="top" src={ele.image} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                <p className='fw-bold'>{ele.category}</p>
                                                <p>{ele.description}</p>
                                            </Card.Text>
                                            <Button onClick={() => HandelApi("delete", ele.id)}>DELETE</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Api