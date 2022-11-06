import { Link } from '@remix-run/react'
import React from 'react'

export default function Post({post}) {
    const {titulo, contenido, imagen, url, publishebAt} = post
    return (
    <article className='post'>
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} className="imagen" />
        <div className="contenido">
            <h3 className="titulo">{titulo}</h3>
            <p className="fecha">{publishebAt}</p>
            <p className="resumen">{contenido}</p>
            <Link to={`/post/${url}`} className="enlace">Leer Post</Link>
        </div>
    </article>
  )
}
