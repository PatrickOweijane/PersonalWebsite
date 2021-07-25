import * as graphics from './3dGraphics.js';
var $ = require("jquery");

const inputUrl = document.getElementById('url-shortener-input');
const outputUrl = document.getElementById('url-shortener-output');
const csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

$(document).on('submit', '#url-shortener-outer-box', (e) => {
    e.preventDefault();

    $.ajax({
        url: 'create',
        type: 'POST',
        data: {
            inputUrl: inputUrl.value,
            csrfmiddlewaretoken: csrfmiddlewaretoken,
        },
        success: (data) => {
            console.log(data);
            data = JSON.parse(data);
            const newUrl = window.location.host + '/' + data.root_url + data.uid;
            outputUrl.innerHTML = newUrl;
            outputUrl.href = '//' + newUrl;
        }
    });
});
