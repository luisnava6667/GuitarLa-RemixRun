import imagen from "../../public/img/nosotros.jpg";
import styles from '../styles/nosotros.css'
export function meta() {
  return {
    title: "GuitarLa - Sobre Nosotros",
    description: "Esta es la página de nosotros",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    }
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" className="" />
        <div className="">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus enim
            impedit optio cumque, illo reiciendis blanditiis voluptate obcaecati
            fuga soluta repudiandae fugiat distinctio magni provident
            repellendus officia tenetur quia quae! Voluptas neque aperiam,
            doloremque facilis distinctio fugiat harum ipsum aspernatur itaque.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus enim
            impedit optio cumque, illo reiciendis blanditiis voluptate obcaecati
            fuga soluta repudiandae fugiat distinctio magni provident
            repellendus officia tenetur quia quae! Voluptas neque aperiam,
            doloremque facilis distinctio fugiat harum ipsum aspernatur itaque.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
