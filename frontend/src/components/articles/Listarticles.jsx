import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Listarticles = () => {
  const [articles, setArticles] = useState([]);

  const loadarticles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/articles");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadarticles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      try {
        await axios.delete(`http://localhost:3001/api/articles/${id}`);
        loadarticles(); // Recharge la liste des articles
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Liste des articles</h1>
      <Link to="/articles/add">
        <button className="btn btn-success btn-sm">
          <i className="fa-solid fa-circle-plus"></i> Ajouter
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Référence</th>
            <th>Désignation</th>
            <th>Marque</th>
            <th>Stock</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Sous Catégorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, index) => (
            <tr key={index}>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.marque}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>
              <td>
                {art.imageart ? (
                  <img src={art.imageart} alt="Article" width={80} height={80} />
                ) : (
                  "Pas d'image"
                )}
              </td>
              <td>{art.scategorieID?.nomscategorie || "Non spécifié"}</td>
              <td>
                <Link to={`/articles/edit/${art._id}`}>
                  <button className="btn btn-warning btn-sm">
                    <i className="fa-solid fa-pen"></i> Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(art._id)}
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listarticles;


