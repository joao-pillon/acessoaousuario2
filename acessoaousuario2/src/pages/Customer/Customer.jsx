import React from "react";
import { useParams, Link } from "react-router-dom";
import Members from "../../components/members";

const Costumer = () => {
  
  const params = useParams();

  const member = Members.find((memb) => {
    return memb.id === params.id
  })

  console.log("cheguei até aqui")
  return (
    <>
      <div>
        <h1>Detalhes do cliente</h1>

        <p>Nome: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
};

export default Costumer;
