import React, { Component } from 'react';
import store from '../store.js';
import { withRouter } from 'react-router';
import { render } from '../actions/menu-actions';

class Info extends Component {
  componentDidMount() {
    store.dispatch(render());
  }

  render() {
    return <div className="page">
      <h2>Søgan um Navnabretti</h2>
      <p>
        Hugskotid er at gera tad lættari og stuttuligari hjá tær at finna eitt
        navn. Tad er eitt sindur óinteresant at ganga í 900 nøvn frá á-z. Eg
        hevdi ein mistanka at nøvnini komu ikki heilt til sín rætt í
        alfabetiskum ordan og helt hetta kundi gerast meiri visuelt spennandi.
        Vid hesum fyri eyga er appin bygd. Okkara barn fekk navnid{" "}
        <b>Jónatan</b>, vónandi finnur tú eisini eitt til títt barn.
        <br />
        <br />
        <b>Bestu ynskir</b>
        <br />
        <b>John Høj Andreassen</b>
      </p>
      <br />
      <h2>FAQ</h2>
      <ul>
        <li>
          <b>Kann nakar síggja nøvnini sum eg havi valt?</b>
          <br />
          <b>Svar:</b> Nøvnini eru goymd á tínum browsara, inntil tú trýstur á
          umaftur. Tá vera øll nøvnini slettadi, og tú kanst byrja av nýggjum.
        </li>
        <li>
          <b>Hvar eru nøvnini frá?</b>
          <br />
          <b>Svar:</b> Nøvnini eru frá <a href="www.malrad.fo">malrad.fo</a>
        </li>
      </ul>
    </div>;
  }
}

const InfoWithRouter = withRouter(Info);
export default InfoWithRouter;
