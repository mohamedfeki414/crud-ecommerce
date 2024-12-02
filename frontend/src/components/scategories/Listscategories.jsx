import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Listscategories = () => {
  const [scategories, setscategories] = useState([]);

  // Fonction pour récupérer les sous-catégories
  const fetchcategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/scategories");
      setscategories(res.data); // Mise à jour des sous-catégories
      console.log(res);
    } catch (error) {
      console.error("Erreur lors de la récupération des sous-catégories", error);
    }
  };

  // Utilisation de useEffect pour charger les sous-catégories au démarrage
  useEffect(() => {
    fetchcategories();
  }, []);

  // Fonction pour supprimer une sous-catégorie
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/scategories/${id}`);
      setscategories(scategories.filter(c => c._id !== id)); // Filtrage après suppression
      alert("Sous-catégorie supprimée avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression de la sous-catégorie");
    }
  };

  return (
    <div>
      <h1>Liste des sous-catégories</h1>
      
      {/* Lien vers la page d'ajout d'une nouvelle sous-catégorie */}
      <Link to="/scategories/add">
        <Button variant="success" style={{ backgroundColor: 'green' }}>
          <i className="fa-solid fa-square-plus" style={{ color: "#fcfcfd" }}></i>
          Nouveau
        </Button>
      </Link>

      {/* Tableau affichant les sous-catégories */}
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom catégorie</th>
            <th>Image catégorie</th>
            <th>Nom sous-catégorie</th>
            <th>Image sous-catégorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scategories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.categorieID?.nomcategorie}</td>
              <td><img src={cat.categorieID?.imagecategorie} width={100} height={100} alt={`Image catégorie: ${cat.categorieID?.nomcategorie}`} /></td>
              <td>{cat.nomscategorie}</td>
              <td><img src={cat.imagescategorie} width={100} height={100} alt={`Image sous-catégorie: ${cat.nomscategorie}`} /></td>
              <td>
                <Link to={`/scategories/edit/${cat._id}`}>
                  <button className='btn btn-warning btn-sm'>
                    <i className="fa-solid fa-pen"></i> Update
                  </button>
                </Link>
              </td>
              <td>
                <button className='btn btn-danger btn-sm' onClick={() => handleDelete(cat._id)}>
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

export default Listscategories;

