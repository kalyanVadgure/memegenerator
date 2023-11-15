import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  color: #35469c;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  height: 500px;

  @media screen and (min-width: 768px) {
    order: 1;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`

export const CustomInput = styled.input`
  padding: 5px;
  font-size: 14px;
  outline: none;
  margin: 5px 0px 20px 0px;
`
export const CustomLabel = styled.label`
  color: black;
  line-height: 1.6;
  margin-bottom: 0px;
  font-weight: 500px;
  font-size: 'Open Sans';
`

export const CustomSelect = styled.select`
  color: black;
  margin: 5px 0px 20px 0px;
  padding: 5px;
`

export const CustomOption = styled.option`
  padding: 12px 14px 12px 14px;
  width: 20px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  padding: 10px 14px 10px 14px;
  color: white;
  outline: none;
  border-radius: 8px;
`

/* Meme Image */

export const MemeImageContainer = styled.div`
  height: 300px;
  width: 400px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    order: 2;
  }
`
export const TopText = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`

export const BottomText = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
