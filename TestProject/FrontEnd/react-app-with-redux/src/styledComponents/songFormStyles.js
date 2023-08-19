import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #999;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #333;

  &:hover {
    color: #555;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  height: 100px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #1db954;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #178c48;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  margin: 5px 0;
  color: red;
`;

export const InvalidInput = styled(Input)`
  border-color: red;
`;
