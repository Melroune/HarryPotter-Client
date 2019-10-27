import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Card from "../components/Card"
import allTheActions from "../actions"

import "./Characters.css"

class Characters extends React.Component {
  componentDidMount = async () => {
    await this.props.actions.characters.getCharacters(
      "https://harrypotterapi20.herokuapp.com/characters"
    )
  }
  render() {
    return (
      <div>
        <p>Characters</p>
        <div className="GaleryCharacters">
          {this.props.loadingState ? (
            this.props.charactersState.map((character, index) => (
              <Card
                key={index}
                id={character.id}
                house={character.house}
                name={character.name}
                image={character.image}
              />
            ))
          ) : (
            <div>... Loading</div>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>
  console.log(state.charactersReducer) || {
    charactersState: state.charactersReducer.result,
    loadingState: state.charactersReducer.loading
  }
const mapDispatchToProps = () => dispatch =>
  console.log(allTheActions) || {
    actions: {
      characters: bindActionCreators(allTheActions.characters, dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters)
