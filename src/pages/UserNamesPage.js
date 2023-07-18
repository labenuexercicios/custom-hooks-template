import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequestData from "../Hooks/useRequestData";


const UserNamesPage = () => {
  
  const [nomeUsuarios, isLoading, isError] = useRequestData('users')
 
  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isError ? <p>ERRO! Tente Novamente.</p> :
        isLoading ? <p>Carregando...</p>:
        nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



