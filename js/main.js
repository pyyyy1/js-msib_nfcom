// script javascript
$(document).ready(function () {
  $('.card-body').each(function () {
    $(this).click(function () {
      let hewan = $(this).find('h5').attr('id');
      $('#suara').remove();
      $('#foto').remove();
      if (hewan == 'kakatua') {
        $(this).prepend(`<img id="foto" src="img/kakatua.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kakatua.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'ayam') {
        $(this).prepend(`<img id="foto" src="img/ayam.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/ayam (1).mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'merak') {
        $(this).prepend(`<img id="foto" src="img/merak.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/merak.mpeg" autoplay id="suara"></audio>`);
      } else if (hewan == 'flamingo') {
        $(this).prepend(`<img id="foto" src="img/flamingo.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/flamingo.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'jangkrik') {
        $(this).prepend(`<img id="foto" src="img/jangkrik.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/jangkrik.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'gagak') {
        $(this).prepend(`<img id="foto" src="img/gagak.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/gagak.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'penguin') {
        $(this).prepend(`<img id="foto" src="img/penguin.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/penguin.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'angsa') {
        $(this).prepend(`<img id="foto" src="img/angsa.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/angsa.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'sapi') {
        $(this).prepend(`<img id="foto" src="img/sapi.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/sapi.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'kambing') {
        $(this).prepend(`<img id="foto" src="img/kambing.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kambing.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'babi') {
        $(this).prepend(`<img id="foto" src="img/babi.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/babi (1).mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'bebek') {
        $(this).prepend(`<img id="foto" src="img/bebek.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/bebek.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'hamster') {
        $(this).prepend(`<img id="foto" src="img/hamster.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/hamster.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'anjing') {
        $(this).prepend(`<img id="foto" src="img/anjing.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/anjing.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'kucing') {
        $(this).prepend(`<img id="foto" src="img/kucing.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kucing.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'kerbau') {
        $(this).prepend(`<img id="foto" src="img/kerbau.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kerbau.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'rubah') {
        $(this).prepend(`<img id="foto" src="img/rubah.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/rubah.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'singa') {
        $(this).prepend(`<img id="foto" src="img/singa.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/singa.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'gorila') {
        $(this).prepend(`<img id="foto" src="img/gorila.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/gorila.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'ular') {
        $(this).prepend(`<img id="foto" src="img/ular.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/ular.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'harimau') {
        $(this).prepend(`<img id="foto" src="img/harimau.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/harimau.mp3" autoplay id="suara"></audio>`);
      } else {
        $(this).prepend(`<img id="foto" src="img/beruang.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/beruang.mp3" autoplay id="suara"></audio>`);
      }
    });
  });
});