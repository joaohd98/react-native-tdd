import React from 'react';
import {GuessWordScreenGameStyles} from './styles';

export interface GuessWordScreenGameProps {
  guessedWords?: {guessedWord: string, letterMatcherCount: number}[];
}

export class GuessWordScreenGame extends React.Component<GuessWordScreenGameProps> {

  renderGuesses = () => {
    const {guessedWords} = this.props;
    const {ViewGuessedContainer, ViewGuessed, ViewTitleGuessed, TitleGuessed, TextGuessed} = GuessWordScreenGameStyles;

    return (
      <ViewGuessedContainer>
        <ViewTitleGuessed>
          <TitleGuessed>
            Guess
          </TitleGuessed>
          <TitleGuessed>
            Matching Letters
          </TitleGuessed>
        </ViewTitleGuessed>
        {
          guessedWords?.map((guessed, index) => {
            return (
              <ViewGuessed key={index.toString()}>
                <TextGuessed>
                  {guessed.guessedWord}
                </TextGuessed>
                <TextGuessed>
                  {guessed.letterMatcherCount}
                </TextGuessed>
              </ViewGuessed>
            )
          })
        }
      </ViewGuessedContainer>
    );
  }

  renderNoGuesses = () => {
    const {TextInstructions} = GuessWordScreenGameStyles;

    return (
      <TextInstructions>
        Try to guess the secret word
      </TextInstructions>
    );
  }

  render() {
    const {guessedWords} = this.props;
    const {Container} = GuessWordScreenGameStyles;

    return (
      <Container>
        { guessedWords?.length === 0 ? this.renderNoGuesses() : this.renderGuesses() }
      </Container>
    );
  }
}
