import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Professors() {
  // Listes des Professeurs
  const fakeProfessors = [
    {
      matricule: "001",
      nom: "Rakoto",
      prenoms: "Hary",
      contact: "034 56 321 54",
      email: "test@example.com",
      adresse: "2 Rue Passing",
      sexe: "Homme",
    },
    {
      matricule: "002",
      nom: "Randria",
      prenoms: "Mox",
      contact: "032 11 456 78",
      email: "dev@example.com",
      adresse: "Anjanahary",
      sexe: "Homme",
    },
    {
      matricule: "003",
      nom: "Rak",
      prenoms: "Joe",
      contact: "034 31 425 46",
      email: "devfront@example.com",
      adresse: "miadana be",
      sexe: "Homme",
    },
    {
      matricule: "004",
      nom: "Dupont",
      prenoms: "Pierre",
      contact: "065 98 765 43",
      email: "pierre@example.com",
      adresse: "123 Rue de Paris",
      sexe: "Homme",
    },
    {
      matricule: "005",
      nom: "Durand",
      prenoms: "Marie",
      contact: "078 12 345 67",
      email: "marie@example.com",
      adresse: "456 Avenue de Lyon",
      sexe: "Femme",
    },
    {
      matricule: "006",
      nom: "Dupont",
      prenoms: "Pierre",
      contact: "065 98 765 43",
      email: "pierre@example.com",
      adresse: "123 Rue de Paris",
      sexe: "Homme",
    },
    {
      matricule: "007",
      nom: "Durand",
      prenoms: "Marie",
      contact: "078 12 345 67",
      email: "marie@example.com",
      adresse: "456 Avenue de Lyon",
      sexe: "Femme",
    },
    {
      matricule: "008",
      nom: "Dupont",
      prenoms: "Pierre",
      contact: "065 98 765 43",
      email: "pierre@example.com",
      adresse: "123 Rue de Paris",
      sexe: "Homme",
    },
    {
      matricule: "009",
      nom: "Durand",
      prenoms: "Marie",
      contact: "078 12 345 67",
      email: "marie@example.com",
      adresse: "456 Avenue de Lyon",
      sexe: "Femme",
    },
    // Ajoute d'autres professeurs fictifs au besoin jusqu'à atteindre au moins 15
  ];
  
  const [professors, setProfessors] = useState(fakeProfessors);
  const [selectedProfessorIndex, setSelectedProfessorIndex] = useState(null);
  const [newProfessor, setNewProfessor] = useState({
    matricule: "",
    nom: "",
    prenoms: "",
    contact: "",
    email: "",
    adresse: "",
    sexe: ""
  });

  const handleInputChange = (e) => {
    setNewProfessor({
      ...newProfessor,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProfessor = () => {
    if (selectedProfessorIndex !== null) {
      // Si un professeur est sélectionné, mettre à jour ses informations
      const updatedProfessors = [...professors];
      updatedProfessors[selectedProfessorIndex] = newProfessor;
      setProfessors(updatedProfessors);
      setSelectedProfessorIndex(null); // Réinitialiser l'index sélectionné
    } else {
      // Ajouter un nouveau professeur à la liste
      setProfessors([...professors, newProfessor]);
    }

    // Réinitialiser les informations du nouveau professeur
    setNewProfessor({
      matricule: '',
      nom: '',
      prenoms: '',
      contact: '',
      email: '',
      adresse: '',
      sexe: '',
    });
  };

  
    const handleDeleteProfessor = (index) => {
      // Créer une copie de la liste des professeurs
      const updatedProfessors = [...professors];
      // Supprimer le professeur à l'index spécifié
      updatedProfessors.splice(index, 1);
      // Mettre à jour la liste des professeurs
      setProfessors(updatedProfessors);
    };
    
    const handleUpdateProfessor = (index) => {
      // Récupérer les informations du professeur sélectionné
      const selectedProfessor = professors[index];
      // Mettre à jour les champs du formulaire avec les informations du professeur sélectionné
      setNewProfessor({ ...selectedProfessor });
      // Mettre à jour l'index du professeur sélectionné
      setSelectedProfessorIndex(index);
    };
  

  return (
    <>

      <div className="mb-4 mx-auto w-1/2">
        <form className="flex flex-col p-6 my-6 mx-auto rounded-sm bg-slate-200">
          <label>Matricule</label>
          <input
            className="border outline-none mb-3 p-2"
            type="text"
            name="matricule"
            value={newProfessor.matricule}
            onChange={handleInputChange}
          />
          <label>Nom</label>
          <input
            className="border outline-none mb-3 p-2"
            type="text"
            name="nom"
            value={newProfessor.nom}
            onChange={handleInputChange}
          />
          <label>Prénoms</label>
          <input
            className="border outline-none mb-3 p-2"
            type="text"
            name="prenoms"
            value={newProfessor.prenoms}
            onChange={handleInputChange}
          />
          <label>Contact</label>
          <input
            className="border outline-none mb-3 p-2"
            type="text"
            name="contact"
            value={newProfessor.contact}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            className="border outline-none mb-3 p-2"
            type="mail"
            name="email"
            value={newProfessor.email}
            onChange={handleInputChange}
          />
          <label>Adresse</label>
          <input
            className="border outline-none mb-3 p-2"
            type="text"
            name="adresse"
            value={newProfessor.adresse}
            onChange={handleInputChange}
          />
          <label>Sexe</label>
          <select
            className="border outline-none mb-3 p-2"
            name="sexe"
            value={newProfessor.sexe}
            onChange={handleInputChange}
          >
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          {/* Ajoute les autres champs de formulaire de la même manière */}
          <button
            type="button"
            onClick={handleAddProfessor}
            className=" my-3 border rounded-sm px-3 py-2 bg-green-300 "
          >
            Save
          </button>
        </form>
      </div>

      <div>
        <table className="border-collapse w-full mt-6">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Matricule</th>
              <th className="p-3 text-left">Nom</th>
              <th className="p-3 text-left">Prénoms</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Adresse</th>
              <th className="p-3 text-left">Sexe</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {professors.map((professor, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{professor.matricule}</td>
                <td className="p-3">{professor.nom}</td>
                <td className="p-3">{professor.prenoms}</td>
                <td className="p-3">{professor.contact}</td>
                <td className="p-3">{professor.email}</td>
                <td className="p-3">{professor.adresse}</td>
                <td className="p-3">{professor.sexe}</td>
                <td className="p-3">
                  <button
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => handleUpdateProfessor(index)}>
                    Editer
                  </button>
                  <button 
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDeleteProfessor(index)}>
                    Suppr
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
