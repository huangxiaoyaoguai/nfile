module.exports = options => `

import React, { Component } from 'react';

 //请求链接
const API = {
    index: '//api.weipaitang.com/*',
};

export default class Index extends Component {
    constructor(props) {
        super(props);
        WPT.getData(API.index, {}, (res) => {
            if (res.code !== 0) {
                WPT.Modal.alert(res.msg);
                return;
            }
            this.setState({ code: res.code });
        });
    }
    state = {
        code: 0,
    }
    componentDidMount() {

    }
    
    render() {
        const { code } = this.state;
        return (
            <div className="page-${options.pageName}">

              新页面
            </div>
        );
    }
}

`
