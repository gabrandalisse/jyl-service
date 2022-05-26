import { Container } from "react-bootstrap";

const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-dark">
      <Container className="px-5">
        <p className="m-0 text-center text-white">
          Diseñado y desarrollado por{" "}
          <a
            className="text-decoration-none action-call"
            href="https://gabrandalisse.vercel.app/"
          >
            Gabriel Andres Brandalisse
          </a>
          . Copyright &copy; {actualYear}.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
