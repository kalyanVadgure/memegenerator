import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  CustomInput,
  MemeGeneratorForm,
  CustomLabel,
  CustomSelect,
  InputContainer,
  CustomOption,
  GenerateButton,
  MemeImageContainer,
  TopText,
  BottomText,
  ImageFormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImage: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
    backgroundImageInput: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      topTextInput,
      backgroundImageInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
      backgroundImage: backgroundImageInput,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="imageURL">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the image URL"
          id="imageUrl"
          onChange={this.onChangeImageUrl}
          value={backgroundImageInput}
        />

        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Top Text"
          id="topText"
          onChange={this.onChangeTopText}
          value={topTextInput}
        />

        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Bottom Text"
          id="bottomText"
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
        />

        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomSelect
          onChange={this.onChangeFontSize}
          value={fontSizeInput}
          id="fontSize"
        >
          {fontSizesOptionsList.map(eachFont => (
            <CustomOption key={eachFont.optionId} value={eachFont.optionId}>
              {eachFont.displayText}
            </CustomOption>
          ))}
        </CustomSelect>

        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMemeImage = () => {
    const {backgroundImage, topText, bottomText, fontSize} = this.state

    return (
      <MemeImageContainer backgroundImage={backgroundImage} data-testid="meme">
        <TopText fontSize={fontSize}>{topText}</TopText>
        <BottomText fontSize={fontSize}>{bottomText}</BottomText>
      </MemeImageContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <ImageFormContainer>
            {this.renderMemeImage()}
            {this.renderMemeGeneratorForm()}
          </ImageFormContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
