import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "../models/curso.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "../components/listado-guitarras";
import ListadoPost from "../components/listado-post";
import Curso from "../components/curso";
import stylesGuitarra from "~/styles/guitarras.css";
import stylesBlog from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}
export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccion de guitarras",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarra,
    },
    {
      rel: "stylesheet",
      href: stylesBlog,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}
function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoPost posts={posts} />
      </section>
    </>
  );
}

export default Index;
