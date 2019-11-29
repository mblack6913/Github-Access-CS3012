import React from 'react';
import BarChart from './BarChart';

const pos = {
    display: 'flex',
}

const posleft = {
    paddingLeft: '300px',
}

let langs = '';
let i = '';



const LanguageList = (props) => {
    if (props.langslist) {
      return (
          <ul>
            <div style={pos}>
            <div>
            {Object.entries(props.langslist).map(([key,value]) =>
              <li key={key}>
                {key} - {value}
                {console.log(i=i+value)}
                {console.log(langs=langs+key+'.')}
              </li>
            )}
            </div>
            <div style={posleft}>
            <BarChart v={langs.split('.')} l={i.split('')} />
                { i= ''};
                {langs = ''};
            </div>
            </div>
          </ul>
        )
    } else { return null;}
    };export default LanguageList;