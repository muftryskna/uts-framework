import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import wakanda from "../assets/images/trending/wakanda.jpg"
import topgun from "../assets/images/trending/topgun.jpg"
import thor from "../assets/images/trending/thor.jpg"
import adam from "../assets/images/trending/adam.jpeg"
import fantastic from "../assets/images/trending/fantastic.jpg"
import avatar2 from "../assets/images/trending/avatar2.jpeg"
import Forms from "./Forms"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={wakanda} alt="WAKANDA" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BLACK PANTHER: WAKANDA FOREVER</Card.Title>
                                    <Card.Text className="text-left">
                                        Rakyat Wakanda kali ini akan berjuang untuk melindungi negerinya dari campur tangan kekuatan dunia setelah kematian sang Raja T'Challa
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={topgun}
                                alt="Top Gun"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        TOP GUN: Maverick
                                    </Card.Title>
                                    <Card.Text className="text-left">
                                        Lebih dari 30 tahun mengabdi sebagai salah satu penerbang Angkatan Laut terbaik, Pete “Maverick” Mitchell berada dalam posisi dambaannya, melakukan aksi-aksi mendobrak sebagai pilot uji nan pemberani, dan menampik setiap kesempatan naik pangkat karena akan membuatnya tak bisa menerbangkan pesawatnya.
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thor} alt="Thor" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THOR: Love and Thunder</Card.Title>
                                    <Card.Text className="text-left">
                                        "Thor: Love and Thunder"menceritakan Thor dalam sebuah perjalanan yang belum pernah ia jalani – pencariankedamaian batin. Namun, masa pensiunnya terganggu oleh seorang pembunuh galaksi yang dikenal sebagai Gorr sang Dewa Jagal , yang ingin memusnahkan para dewa.
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={adam} alt="Jurasic" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE ADAM PROJECT</Card.Title>
                                    <Card.Text className="text-left">
                                        The Adam Project adalah film petualangan fiksi ilmiah Amerika Serikat tahun 2022. Film ini diproduksi bersama oleh Skydance Media, Maximum Effort dan 21 Laps Entertainment, disutradarai oleh Shawn Levy dari skenario yang ditulis oleh Jonathan Tropper, T.S. Nowlin, Jennifer Flackett dan Mark Levin.
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark"><a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={fantastic}
                                alt="Fantastic"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">FANTASTIC BEATS: The Secrets of Dumbledore</Card.Title>
                                    <Card.Text className="text-left">
                                        Profesor Albus Dumbledore mengetahui penyihir Gelap yang kuat Gellert Grindelwald bergerak untuk menguasai dunia sihir. Karena tidak dapat menghentikannya sendirian, dia mempercayakan Magizoologist Newt Scamander untuk memimpin tim yang terdiri dari para penyihir dan seorang pembuat roti Muggle yang pemberani bergabung sebuah dalam misi berbahaya.
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark">
                                        <a href="#Forms">Beli Disini</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avatar2} alt="Avatar2" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVATAR 2</Card.Title>
                                    <Card.Text className="text-left">
                                        Avatar 2 adalah sebuah film fiksi ilmiah epik Amerika Serikat yang disutradarai, produksi, dan ditulis oleh James Cameron. Film tersebut adalah film pertama dari empat sekuel yang direncanakan untuk filmnya Avatar.
                                    </Card.Text>
                                    <div className="introButton mt-4 text-center">
                                        <Button variant="dark">
                                            <a href="#Forms">Beli Disini</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Trending