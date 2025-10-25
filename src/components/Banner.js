import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["AI & ML Developer", "Full Stack Web Developer", "Problem Solver (DSA)"];
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
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Dhruv`} <span className="wrap">{text}</span></h1>
            <p className="text-justify"> I am a dedicated developer specializing in AI & Machine Learning, full-stack web development, and advanced problem-solving using data structures and algorithms. I thrive on designing intelligent, scalable web applications and delivering efficient solutions to complex challenges. Passionate about learning and innovation, I continuously explore emerging technologies to build impactful projects that combine functionality, performance, and user experience. </p>
            <button onClick={() => {
              const contactSection = document.getElementById('connect');
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }}>
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
