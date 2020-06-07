import $ from 'jquery'
require("./css/index.css")

$('#bt_1').click(function(){
    alert('test is done！！！\n every good!!!')
});

const img=`<img alt="picture" class="boelogoimg" src="${require('./image/favicon.ico')}">`;
// const img=`<img src="${require('./image/favicon.ico')}" alt="头像">`;
// const img =``;
$('.div_1').append(img);
