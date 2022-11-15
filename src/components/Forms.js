import { React, useState } from 'react'
import "../style/Formpage.css"
import Footer from '../components/footer.js'
import { Form, Button } from 'react-bootstrap';

export default function Forms() {


    const [jumlah, setjumlah] = useState("");
    const [product, setproduct] = useState("");
    const [inputs, setInputs] = useState("");
    // const [total, settotal] = useState("");
    const [bayar, setBayar] = useState("");
    const [sisa, setSisa] = useState("");
    const [x, setquantity] = useState("");


    const changeProduct = (newProduct) => {
        setproduct(newProduct);
    };

    const Quantity = (newQuantity) => {
        setquantity(newQuantity)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    let harganya;
    if (product == "Black Panther: Wakanda Forever") {
        harganya = 55000
    }
    else if (product == "Top Gun: Maverick"){
        harganya = 45000
    }
    else if (product == "Thor: Love and Thunder"){
        harganya = 55000
    }
    else if (product == "Fantastic Beats: The Secrets of Dumbledore"){
        harganya = 55000
    }
    else if (product == "Avatar 2"){
        harganya = 55000
    }
    else if (product == "The Adam Project"){
        harganya = 45000
    } else {
    harganya = 0
    }

    let harga1 = harganya * x
    let diskon;
    if (harga1 >= 55000){
        diskon = harga1 * 5/100
    } else if (harga1 >= 45000){
        diskon = harga1 * 3/100
    } else{
        diskon = 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setBayar(inputs.bayar);
        let sisa = parseInt(inputs.bayar) - (harga1 - diskon);
        setSisa(sisa);
    };

    return (
        <div className="body" >
            {/* <Navbar /> */}
            <div className="hero" >
                <div className="mask" >
                    {/* <img className="" src={} alt="IntroImg" /> */}
                </div>
                <div className="about" id='Forms'>
                    <h1>ORDER</h1>
                    <Form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Pilih Film</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Select onChange={(event) => changeProduct(event.target.value)} value={product}>
                                    <option>Select Prouct</option>
                                    <option value="Black Panther: Wakanda Forever">Black Panther: Wakanda Forever</option>
                                    <option value="Top Gun: Maverick">Top Gun: Maverick</option>
                                    <option value="The Adam Project">The Adam Project</option>
                                    <option value="Avatar 2">Avatar 2</option>
                                    <option value="Fantastic Beats: The Secrets of Dumbledore">Fantastic Beats: The Secrets of Dumbledore</option>
                                    <option value="Thor: Love and Thunder">Thor: Love and Thunder</option>
                                </Form.Select>
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Harga</td><td className="td">:</td><td>{harganya}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td className="td">:</td>
                            <td>
                                
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="number"
                                    name="jumlah"
                                    onChange={(event) => Quantity(event.target.value)} value={x}
                                />
                                </Form.Group>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td><td className="td">:</td><td>{harga1}</td>
                        </tr>
                        <tr>
                            <td>Pay</td>
                            <td className="td">:</td>
                            <td>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="number"
                                    name="bayar"
                                    onChange={handleChange}
                                />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="submit" >
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </table>
                    </Form>
                    <br />
                    <table style={{ marginBottom: '5%' }}>
                        <tr>
                            <td>Judul Film</td><td className="td">:</td><td>{product}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td><td className="td">:</td><td>{x}</td>
                        </tr>
                        <tr>
                            <td>Diskon</td><td className="td">:</td><td>{diskon}</td>
                        </tr>
                        <tr>
                            <td>Bayar</td><td className="td">:</td><td>{bayar}</td>
                        </tr>
                        <tr>
                            <td>Kembali</td><td className="td">:</td><td>{sisa}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}
