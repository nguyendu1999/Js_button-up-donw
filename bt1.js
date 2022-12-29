const up = document.getElementById("clickOne");
const donw = document.getElementById('clickTow');
const subClick = document.getElementById("subClick");
const Scan = document.getElementById('Scan');
const ketQua = document.getElementById('ketQua');
const body = document.getElementsByTagName('body')[0]; //element có S thì trả về một mảng phải lấy phần tử đầu tiên của mảng .
const myDiv = document.getElementById('myDiv');


up.onclick = () => {
    subClick.value++;
    ketQua.value = subClick.value;
    chengtColor(ketQua.value);
}
donw.onclick = () => {
    subClick.value--;
    ketQua.value = subClick.value;
    chengtColor();
}
Scan.onclick = () => {
    ketQua.value = subClick.value;
}
subClick.onchange = () => {
    ketQua.value = subClick.value;
    // console.log(subClick);
}
const chengtColor = () => {
    if (ketQua.value === 0){
        myDiv.style.add('value_0');
        myDiv.style.remove('value_1');
        myDiv.style.remove('value_2');
    }else if(ketQua.value % 2 === 0){
        myDiv.style.remove('value_0');
        myDiv.style.add('value_1');
        myDiv.style.remove('value_2');
    }else {
        myDiv.style.remove('value_0');
        myDiv.style.remove('value_1');
        myDiv.style.add('value_2');
    }

}


//viết một hàm 