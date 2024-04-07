import { useState, useEffect } from "react";
import { Card, Col, Row, Button, Tooltip } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlashCards(props) {
    const [currentCard, setCurrentCard] = useState(0);
    const [side, setSide] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            event.preventDefault();
            console.log(event.key);
            event.preventDefault();
            if (event.key === "ArrowLeft") {
                setCurrentCard((prev) => {
                    if (prev === 0) {
                        return prev;
                    }
                    setSide(0);
                    return prev - 1;
                });
            } else if (event.key === "ArrowRight") {
                setCurrentCard((prev) => {
                    if (prev === props.data.length - 1) {
                        return prev;
                    }
                    setSide(0);
                    return prev + 1;
                });
            } else if (event.key === "ArrowUp") {
                setSide((prev) => prev ^ 1);
            } else if (event.key === "ArrowDown") {
                setSide((prev) => prev ^ 1);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <Col span={18}>
            <Row justify="space-around" align="middle">
                <Tooltip title="Left Arrow" color={"var(--main-blue)"}>
                    <Button
                        onClick={() => {
                            setCurrentCard((prev) => prev - 1);
                            setSide(0);
                        }}
                        disabled={currentCard == 0}
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "var(--main-white)",
                            color: "var(--main-blue)",
                            height: "50px",
                            width: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ChevronLeft size={140} strokeWidth={3} />
                    </Button>
                </Tooltip>
                <Col style={{ position: "relative" }}>
                    <h3
                        style={{
                            fontSize: "18px",
                            zIndex: 200,
                            position: "absolute",
                            top: "5%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center",
                        }}
                    >
                        {currentCard + 1} / {props.data.length}
                    </h3>

                    <Tooltip
                        title="Up Arrow"
                        color={"var(--main-blue)"}
                        style={{ zIndex: "1" }}
                    >
                        <Card
                            bordered={false}
                            style={{
                                width: 500,
                                height: 600,
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onClick={() => setSide((prev) => prev ^ 1)}
                        >
                            <h2
                                style={{
                                    color: "var(--main-blue)",
                                }}
                            >
                                {props.data[currentCard][side]}
                            </h2>
                        </Card>
                    </Tooltip>
                </Col>

                <Tooltip title="Right Arrow" color={"var(--main-blue)"}>
                    <Button
                        onClick={() => {
                            setCurrentCard((prev) => prev + 1);
                            setSide(0);
                        }}
                        disabled={currentCard == props.data.length - 1}
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "var(--main-white)",
                            color: "var(--main-blue)",
                            height: "50px",
                            width: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ChevronRight  strokeWidth={3}/>
                    </Button>
                </Tooltip>
            </Row>
        </Col>
    );
}
