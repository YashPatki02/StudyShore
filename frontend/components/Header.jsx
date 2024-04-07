import { Row, Col, Button } from "antd";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                    height: "84px",
                    width: "100%",
                    border: "none",
                }}
            >
                <Col flex={4}>
                    <Row
                        justify="start"
                        align="middle"
                        style={{ marginLeft: "100px" }}
                    >
                        <Link href="/" passHref>
                            <h3 style={{ fontSize: "28px" }}>StudyShore.</h3>
                        </Link>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row justify="space-around" align="middle">
                        <Link href="/" passHref>
                            <p
                                style={{
                                    color: "var(--main-blue)",
                                }}
                            >
                                Recent
                            </p>
                        </Link>
                        <Link
                            href="https://discord.gg/cAKsV7UDGs"
                            passHref
                            legacyBehavior
                        >
                            <Button type="null" className="button-default">
                                Upload File
                            </Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Header;
