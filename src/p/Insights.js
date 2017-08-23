import React, {Component} from 'react';
import './Insights.css';

import hebTabGif from '../imgs/heb-tab.gif';
import hebrewNumbers from '../hebrew-numbers';

const pageCopy = {
  en: {
    header: 'OUTLINES OF HALACHOS FROM THE DAF',
    p: `Summary, in outline form, of how a Halachic ruling unfolded from the Daf
based on the rulings of Rishonim, Achronim and modern-day Poskim`,
    daf: 'Daf ',
  },
  he: {
    header: 'נקודות סיכום הלכה מדף',
    p: `סיכום, בצורה מתוארת, כיצד הלכה הלכה מן הדף
על פי פסקי ראשונים, אחרונים ופוסקים מודרניים`,
    daf: 'דף ',
  }
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
        <button style={{ float: 'right' }} onClick={this.toggleLang}>Toggle Language</button>

        <img src={hebTabGif}/>
        
        <h3>{pageCopy[this.state.lang].header}</h3>
        <p>
          {
            pageCopy[this.state.lang].p.split('\n').map((pp, pi)=> (
              <span key={pi}>
                <span>{pp}</span>
                <br/>
              </span>
            ))
          }
        </p>

        <table>
          <tbody>
            {
              Array(15).fill(1).map((o, i)=> (
                <tr key={i}>
                  {
                    Array(7).fill(1).map((p, j)=> ( (i*7 + j + 1 > 103)? null :
                      <td key={j}>
                        <a href="#/blah">
                          {pageCopy[this.state.lang].daf}
                          {
                            this.state.lang === 'en'? (
                              i*7 + j + 1
                            ) : (
                              hebrewNumbers[i*7 + j + 1]
                            )
                          }
                        </a>
                      </td>
                    ) )
                  }
                </tr>
              ) )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default Insights;
