import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';
import { restart } from '../actions/name-actions';
import { selectGender } from '../actions/gender-actions';
import MdBack from 'react-icons/lib/md/keyboard-arrow-left';
import MdClose from 'react-icons/lib/md/close';

import { withRouter } from 'react-router';

class Restart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <div className="info-window">
                    <h2>Søgan um barnanavn</h2>
                    <p>
                        Appin var gjørd vid tí endamálid at finna eitt navn til mítt nýfødda barn. Eg helt tad var eitt sindur óinteresant
                        at ganga í gjøgnum nøvnini frá á-z. Eg var sikkur uppá at hetta kundi gerast meiri visuelt spennandi
                        og eg hevdi ein mistanka um at nøvnini komu ikki heilt til sín rætt í alfabetiskum ordan. Útfrá hesum útkom
                        barnanavn appin. Okkara barn fekk navnid <b>Jónatan</b>, vónandi finnur tú eisini eitt til títt barn.
                        <br />
                        <br />
                        Bestu ynskir<br />
                        <b>John Høj Andreassen</b>
                    </p>
                    <br />
                    <h2>
                        FAQ
                    </h2>
                    <ul>
                        <li>
                            <b>Kann nakar síggja nøvnini sum eg havi valt?</b>
                            <br />
                            <b>Svar:</b> Nøvnini eru goymd á tínum browsara, inntil tú trýstur á umaftur.
                            Tá vera øll nøvnini slettadi, og tú kanst byrja av nýggjum.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const RestartWithRouter = withRouter(Restart);
const mapStateToProps = function (store) {
    return {
        info: store.info
    };
};
export default connect(mapStateToProps)(RestartWithRouter);
