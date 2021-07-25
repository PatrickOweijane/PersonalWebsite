import * as graphics from './3dGraphics.js';

const inputUrl = document.getElementById('url-shortener-input');
const inputUrlMirror = document.getElementById('url-shortener-input-mirror');

const submitBtn = document.getElementById('url-shortener-button');
const submitBtnMirror = document.getElementById('url-shortener-button-mirror');

const outputUid = document.getElementById('uid').innerHTML;
const outputRootUrl = document.getElementById('root-url').innerHTML;
const outputUrlMirrorText = (outputUid === '' ? '' : location.host + '/')  + outputRootUrl + outputUid;
const outputUrl = document.getElementById('url-shortener-output');

submitBtn.onclick = () => {
    let input = inputUrl.value;
    inputUrlMirror.value = input;
    submitBtnMirror.click();
}

console.log('outputUrlMirrorText: ' + outputUrlMirrorText)
if (outputUrlMirrorText === '') {
    console.log('GET or POST WITH NO LINK ENTERED');
} else {
    outputUrl.href = '//' + outputUrlMirrorText;
    outputUrl.innerHTML = outputUrlMirrorText;
}
