import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Listarticlestable = () => {
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
      Listes des articles 
    </div>
  )
}

export default Listarticlestable
