import React from "react";
import { useParams, Link } from "react-router-dom";
import Members from "../../components/members";

const Company = () => {
  
  const params = useParams();

  const member = Members.find( (memb) => {
    return memb.id === params.id
  })

  return (
    <>
      <div>
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
};

export default Company;
