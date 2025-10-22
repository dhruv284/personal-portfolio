import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState('');
  const period = 2000;

  useEffect(() => {
    // use setTimeout so we can reschedule after every text change
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta]); // re-run whenever text or delta changes

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => Math.max(50, prev / 2)); // speed up deletes, protect min delta
    }

    if (!isDeleting && updatedText === fullText) {
      // finished typing the word
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      // finished deleting, move to next
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  };

  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Dhruv`} <span className="wrap">{text}</span></h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, a odio quos laudantium ratione laborum sapiente quibusdam cum repellendus tenetur doloremque illum, inventore fuga labore suscipit rem corporis delectus reprehenderit. </p>
            <button onClick={() => console.log('connect')}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
