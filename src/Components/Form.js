import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { calculateTax } from "../Config/helper";

export default function FormCompany(props) {
  const [horas, setHoras] = useState("");
  const [total, setTotal] = useState("");
  const [salario, setSalario] = useState("");
  const [horasMensais, setHorasMensais] = useState("");

  useEffect(() => {
    setHorasMensais(220);
  }, []);

  const calculate = async () => {
    setTotal(calculateTax(horas, salario / horasMensais));
  };

  return (
    <Container>
      <Container>
        <Article>
          <InputName>Horas</InputName>
          <Name>
            <TitleInput
              type="number"
              name="Horas"
              id="Horas"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
            />
          </Name>
          <InputName>Salario Bruto</InputName>
          <Name>
            <TitleInput
              type="number"
              name="salario"
              id="salario"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </Name>
          <InputName>Horas Mensais</InputName>
          <Name>
            <TitleInput
              type="number"
              name="horasMensais"
              id="horasMensais"
              value={horasMensais}
              onChange={(e) => setHorasMensais(e.target.value)}
            />
          </Name>
          <BtnContainer>
            <Btn type="button" onClick={calculate}>
              Calcular
            </Btn>
          </BtnContainer>
        </Article>
        {total > 0 && (
          <React.Fragment>
            <InputName>Total</InputName>
            <Name>
              <TitleInput
                type="number"
                name="total"
                id="total"
                disabled
                value={total}
              />
            </Name>
          </React.Fragment>
        )}
      </Container>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0;
  margin-bottom: 25px;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
`;

const Article = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
`;

const Name = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InputName = styled.span`
  display: flex;
  align-items: flex-start;
  margin-left: 110px;
  font-size: 18px;
`;

const TitleInput = styled.input`
  font-size: 18px;
  margin-top: 3px;
  background: rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: 70%;
  padding: 0 15px;
  color: #000;
  margin: 0 0 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
`;

const Btn = styled.button`
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 0;
  height: 40px;
  width: 40%;
  background: #343a40;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
