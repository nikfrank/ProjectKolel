import React, {Component} from 'react';

const pageCopy = {
  en: 'blah blah blah',
  he: 'בלה בלה בלה',
};

class Insights extends Component {
  state = {
    lang: 'en',
    langs: ['he', 'en'],
  }

  toggleLang = ()=>{
    this.setState({ lang: this.state.langs[
      (
        this.state.langs.indexOf(this.state.lang) +1
      ) % this.state.langs.length
    ] });
  }
  
  render() {
    return (
      <div className="InsightsPage">
        <button onClick={this.toggleLang}>Toggle</button>
        <p> { pageCopy[this.state.lang] } </p>
      </div>
    );
  }
}
export default Insights;
