import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

const ItemCard = props => {
  const { themeData, total, subheading, link } = props;
  const { primaryColor, secondaryColor, icon } = themeData;
  return (
    <>
      <CardContainer>
        <CardBody primaryColor={primaryColor}>
          <DataContainer>
            <Total>{total}</Total>
            <Subheading>{subheading}</Subheading>
          </DataContainer>
          <IconContainer>
            <Icon secondaryColor={secondaryColor}>{icon}</Icon>
          </IconContainer>
        </CardBody>
        <Link to={link}>
          <InfoContainer secondaryColor={secondaryColor}>
            More Info{' '}
            <InfoIcon>
              <FaInfoCircle />
            </InfoIcon>
          </InfoContainer>
        </Link>
      </CardContainer>
    </>
  );
};

export default ItemCard;

// --------------------Styling-------------------------

const CardContainer = styled.div`
  width: 250px;
`;

const CardBody = styled.div`
  background: ${props => props.primaryColor};
  width: 100%;
  height: 100px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  display: flex;
`;

const DataContainer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 65px;
`;

const Total = styled.h1`
  margin: 0;
  font-weight: bold;
`;

const Subheading = styled.h5`
  margin: 0;
  margin-top: 5px;
  font-size: 14px;
`;

const IconContainer = styled.div`
  padding-left: 80px;
`;

const Icon = styled.span`
  color: ${props => props.secondaryColor};
  margin: 0;
  font-size: 65px;
`;

const InfoContainer = styled.div`
  background-color: ${props => props.secondaryColor};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  padding: 2px 0px;
  color: #fff;
`;

const InfoIcon = styled.span`
  position: absolute;
  margin-left: 5px;
`;
