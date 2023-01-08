
let a=document.querySelector(`#inputPassword5`)
let b=document.querySelector(`#inputPassword4`)
let c=document.querySelector(`#inputPassword3`)
let red=document.querySelector(`#red`)
let v =document.querySelector(`#vv`)
let q=document.querySelector(`#q`)
let btn=document.querySelector(`#btn`)
let btnт=document.querySelector(`#btnт`)
btn.addEventListener(`click`,function(){
    if(`${a.value}`==``||`${b.value}`==``||`${c.value}`==``){
        red.classList.remove(`d-none`);
        red.classList.add(`red`);
    }
    else{
        red.classList.add(`d-none`);
    let dis=Math.pow(`${b.value}`,2)-(4*`${a.value}`*`${c.value}`)
    if(dis < 0){
    v.innerHTML=`Корней нет`
    }
    else if(dis == 0){
        let m=-1*`${b.value}`/(2*`${a.value}`);
     v.innerHTML=`Корень уравнения: `+m;
    }
    else if(dis >0 ){
       let r =(-1*`${b.value}`+ Math.sqrt(dis))/(2*`${a.value}`);
       let h=(-1*`${b.value}`- Math.sqrt(dis))/(2*`${a.value}`);
        v.innerHTML=`Уравнение имеет два корня`
        q.innerHTML=`Первый корень: `+r+` Второй корень: `+h;
    }
}
})
btnn.addEventListener(`click`, function(){
        a.value=` `;
        b.value=` `;
        c.value=` `;
        v.innerHTML=` `;
        q.innerHTML=` `;
})
