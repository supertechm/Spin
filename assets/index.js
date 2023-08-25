let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let btnStop = document.querySelector(".Stop");
let MusicSpin = document.querySelector("audio");
let number = Math.ceil(Math.random() * 720);
var numberRun = [];
// Defind SongSpin 
const SongSpin = [
    {
        name: 'Em Là Của Anh',
        singer: 'Hồ Quang Hiếu',
        src: './assets/mp3/Emlacuaanh.mp3'
    },
    {
        name: 'Chờ Ngày Mưa Tan',
        singer: 'Noo Phước Thịnh',
        src: './assets/mp3/chongaymuatan.mp3'
    },

    {
        name: 'Hồn Quê',
        singer: 'Hiền Thục',
        src: './assets/mp3/HonQue.mp3'
    },
    {
        name: 'Yêu được không',
        singer: 'Đức Phúc',
        src: './assets/mp3/Yeuduockhong.mp3'
    },

    {
        name: 'Yosobi',
        singer: 'AV',
        src: './assets/mp3/YOASOBI.mp3'
    },
    {
        name: 'Kiếp Má Hồng',
        singer: "",
        src: './assets/mp3/Kiếp Má Hồng.mp3'
    },
    {
        name: 'Chạnh Lòng Thương Cô',
        singer: "",
        src: "./assets/mp3/ChanhLongThuongCo.mp3"
    },
    {
        name: 'Chạnh Lòng Thương Cô 4',
        singer: "",
        src: "./assets/mp3/ChanhLongThuongCo4.mp3"
    },
    {
        name: 'Tình Bạn Doremon',
        singer: "",
        src: "./assets/mp3/TinhbanDoremon.mp3"
    },


]
SongLength = SongSpin.length;
btn.onclick = function () {
    let SongRandom = Math.floor(Math.random()*SongLength);
    MusicSpin.src = SongSpin[1].src;
    MusicSpin.play();
   setInterval(() => {
    const timeEnd = MusicSpin.played.end(0);
    if(timeEnd >= 15) {
        MusicSpin.pause();
    }
    else{
        container.style.transform = "rotate(" + number + "deg)";
        number+=number;
    }
   }, 2000);
}
btnStop.style.display = "none";
