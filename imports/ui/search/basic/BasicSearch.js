import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import ReactGA from 'react-ga';
import { stringify } from '../../../api/utils/url-helper';
import basicTranslations from '../../../translations/basic.json';

let state = {
    searchMethod: 'equals',
    spellingMethod: 'poj_input',
    spelling: '',
    taibun: '',
    hoabun: '',
    english: '',
};

class BasicSearch extends Component {
    constructor(props) {
        super(props);

        props.addTranslation(basicTranslations);

        this.state = state;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        state = this.state;
    }

    handleSubmit(event) {
        ReactGA.event({
            category: 'user',
            action: 'search',
            label: 'basic'
        });

        const options = {
            method: 'basic',
            searchMethod: this.state.searchMethod,
            spellingMethod: this.state.spellingMethod,
            columns: {
                spelling: this.state.spelling,
                taibun: this.state.taibun,
                hoabun: this.state.hoabun,
                english: this.state.english,
            },
        }

        this.props.history.push({
            pathname: 'search', 
            search: stringify(options),
        });
        
        event.preventDefault();
    }

    handleInput(event) {
        let key = event.target.name;
        let value = event.target.value;
        let state = [];
        state[key] = value;
        this.setState(state);
    }

    resetAllInput = () => { 
        this.setState({
            spelling: "",
            taibun: "",
            hoabun: "",
            english: ""
        });
    }

    render() {
        return (
            <div>
                <div id='site-banner'>
                    <img src='images/home_image@2x.png' />
                </div>
                <div className='basic-search'>
                    <form id='basic-form' className='container' onSubmit={this.handleSubmit.bind(this)} autoComplete='off'>
                        <h2><Translate id="basic" /></h2>
                        <div className='basic-search__form-wrapper'>
                            <div className='basic-search__top'>
                                <div className='basic-search__mode'>
                                    <h3><Translate id="search-method" /></h3>
                                    <label className='radio-simulated'>
                                        <input type="radio" className='radio-simulated__hidden' name="searchMethod" value="equals" defaultChecked={this.state.searchMethod === 'equals'} onChange={this.handleInput.bind(this)} />
                                        <span className='radio-simulated__text'><Translate id="equals" /></span>
                                    </label>
                                    <label className='radio-simulated'>
                                        <input type="radio" className='radio-simulated__hidden' name="searchMethod" value="contains" defaultChecked={this.state.searchMethod === 'contains'} onChange={this.handleInput.bind(this)} />
                                        <span className='radio-simulated__text'><Translate id="contains" /></span>
                                    </label>
                                </div>
                                <div className='basic-search__note'>
                                    <Link to='/annachhoe'><Translate id="explanation" /></Link>
                                </div>
                            </div>
                            <div className='basic-search__bottom'>
                                <h3><Translate id="input-method" /></h3>
                                <div className='search-block'>
                                    <label className='search-block__left' htmlFor='spelling'><Translate id="lmj-tb" /></label>
                                    <div className='search-block__right search-block__lmj'>
                                        <div className='search-block__lmj-top'>
                                            <label className='radio-simulated'>
                                                <input type="radio" className='radio-simulated__hidden' name="spellingMethod" value="poj_input" defaultChecked={this.state.spellingMethod === 'poj_input'} onChange={this.handleInput.bind(this)} />
                                                <span className='radio-simulated__text'><Translate id="poj-input" /></span>
                                            </label>
                                            <label className='radio-simulated'>
                                                <input type="radio" className='radio-simulated__hidden' name="spellingMethod" value="kip_input" defaultChecked={this.state.spellingMethod === 'kip_input'} onChange={this.handleInput.bind(this)} />
                                                <span className='radio-simulated__text'><Translate id="lmj-input" /></span>
                                            </label>
                                            <label className='radio-simulated'>
                                                <input type="radio" className='radio-simulated__hidden' name="spellingMethod" value="poj_unicode" defaultChecked={this.state.spellingMethod === 'poj_unicode'} onChange={this.handleInput.bind(this)} />
                                                <span className='radio-simulated__text'><Translate id="poj" /></span>
                                            </label>
                                            <label className='radio-simulated'>
                                                <input type="radio" className='radio-simulated__hidden' name="spellingMethod" value="kip_unicode" defaultChecked={this.state.spellingMethod === 'kip_unicode'} onChange={this.handleInput.bind(this)} />
                                                <span className='radio-simulated__text'><Translate id="lmj" /></span>
                                            </label>
                                        </div>
                                        <div className='search-block__lmj-bottom'>
                                            <input type="text" name="spelling" placeholder={this.props.translate('keyword')} value={this.state.spelling} onChange={this.handleInput.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='search-block'>
                                    <label className='search-block__left' htmlFor="taibun"><Translate id="corresponding-tb" /></label>
                                    <div className='search-block__right'>
                                        <input type="text" name="taibun" placeholder={this.props.translate('keyword')} value={this.state.taibun} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className='search-block'>
                                    <label className='search-block__left' htmlFor="hoabun"><Translate id="corresponding-hb" /></label>
                                    <div className='search-block__right'>
                                        <input type="text" name="hoabun" placeholder={this.props.translate('keyword_suggest_fuzzy')} value={this.state.hoabun} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className='search-block'>
                                    <label className='search-block__left' htmlFor="english"><Translate id="corresponding-en" /></label>
                                    <div className='search-block__right'>
                                        <input type="text" name="english" placeholder={this.props.translate('keyword_suggest_fuzzy')} value={this.state.english} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className='basic-search__actions'>
                                <input className='btn btn--search' type="submit" value={this.props.translate('find')} />
                                <input className='btn btn--clear' type="button" value={this.props.translate('reset')} onClick={this.resetAllInput} />
                            </div>
                            <footer className="basic-search__kesimi">
                                <Translate id="support_taibun_kesimi_part1" />
                                <a target="_blank" href="https://www.zeczec.com/projects/taibun-kesimi"><Translate id="support_taibun_kesimi_part2" /></a>
                                <Translate id="support_taibun_kesimi_part3" />
                            </footer>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withLocalize(withRouter(BasicSearch));
