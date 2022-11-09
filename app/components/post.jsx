import { Link } from "@remix-run/react";
import React from "react";
import { formatearFecha } from "~/utils/helpers";
export default function Post({ post }) {
  // console.log(post);
  const { titulo, contenido, imagen, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3 className="titulo">{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link to={`/blog/${url}`} className="enlace">
          Leer Post
        </Link>
      </div>
    </article>
  );
}
