import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Oct 16,2023" title="Red geodesica municipal" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Oct 16,2023" title="Predios que necesitan ser actualizados" />
          <Article imgUrl={blog03} date="Oct 16,2023" title="Información del Departamento de informatica Catastral" />
          <Article imgUrl={blog04} date="Oct 16,2023" title="Información del Departamento de Servicios Catastrales" />
          <Article imgUrl={blog05} date="Oct 16,2023" title="Información del Departamento de Cartografia" />
        </div>
      </div>
    </div>
  )
}

export default Blog