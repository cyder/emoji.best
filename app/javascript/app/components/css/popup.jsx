
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const Container = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;
  z-index: 100;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-wieght: bold;
  text-align: center;
  padding: 15px 0;
  margin: 0;
  border-bottom: 2px solid #f0f0f0;
`;

export const OrContainer = styled.div`
  text-align: center;
`;

export const Or = styled.span`
  position: relative;
  line-height: 1rem;
  color: #c0c0c0;

  &::after, &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0.5rem;
    width: 140px;
    height: 2px;
    background-color: #f5f5f5;
  }

  &::after {
    left: -150px;
  }

  &::before {
    right: -150px;
  }
`;

export const Form = styled.div`
  width: 300px;
  padding: 10px 100px;
`;

export const TextForm = styled.input`
  display: block;
  width: 100%;
  margin 12px 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 15px 0 10px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin: 15px 0 10px;
  color: #ffffff;
  background-color: #464646;
  border: solid 3px rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  box-sizing: border-box;
`;

export const Message = styled.p`
  margin: 0 20px;
  padding: 20px 0;
  border-top: 2px solid #f0f0f0;
  text-align: center;
`;

export const SwitchLink = styled(Link)`
  text-decoration: underline;
  margin: 0 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  width: 32px;
  height: 32px;

  &::after, &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 15px
    width: 5px;
    height: 33px;
    border-radius: 2px;
    background-color: #c4c4c4;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`;

export const ErrorMessage = styled.p`
  display: ${props => (props.isShow ? 'block' : 'none')}
  text-align: center;
  margin: 0 0 10px;
  color: #f44336;
`;
