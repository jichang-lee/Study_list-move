// let i = -1;
// function autoGallery(){

//     i++;
//     console.log(i);
// }
    //3초마다 autoGallery 함수를 실행
// setInterval(autoGallery,3000);


    //즉시실행함수
// (function (){
//     autoGallery();    
// })();

const GalleryUl=document.querySelector('.gallery-con ul')
const GalleryUlLi= document.querySelectorAll('.gallery-con ul>li')
const ItemUl = document.querySelector('.item-con ul')
const ItemUlLi = document.querySelectorAll('.item-con ul>li')

const imgs=[];
for(let i = 0;i<GalleryUlLi.length;i++){
    imgs.push('url(img/model'+i+'.jpg) no-repeat 50%/cover');
    // .style.background -> 자바스크립트 css설정
    GalleryUlLi[i].style.background=imgs[i]; 
}


let i=-1;
function autoGallery(){
    i++;
                     //el -> 하나의 li , idx : li[] 번지수
    GalleryUlLi.forEach((el,idx)=>{
        if(idx==i){
            el.classList.add('fadeLi')
        }else{
            el.classList.remove('fadeLi')
        }
    });

    ItemUlLi.forEach((el,idx)=>{
        if(idx==i){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    })
    
    if(i>=GalleryUlLi.length-1){
        i = -1;
    }
};

function before(){
    i--;
                     //el -> 하나의 li , idx : li[] 번지수
    GalleryUlLi.forEach((el,idx)=>{
        if(idx==i){
            el.classList.add('fadeLi')
        }else{
            el.classList.remove('fadeLi')
        }
    });

    ItemUlLi.forEach((el,idx)=>{
        if(idx==i){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    })
    if(i<=0)
    i = GalleryUlLi.length;
};

let setIn=setInterval(autoGallery,1000);

// 이미지 방향버튼 이벤트
const arrow= document.querySelectorAll('.arrow-con span');

function mouseInterval(e){
    if(e.type=="mouseover"){
        clearInterval(setIn);
    }else if(e.type=="mouseout"){
        setIn=setInterval(autoGallery,1000);
    }
}
    //arrow span[] mouseEvent
    for(let i = 0 ; i<arrow.length;i++){
    arrow[i].addEventListener('mouseover',mouseInterval);
    arrow[i].addEventListener('mouseout',mouseInterval);
    }

    //arrow[1] 누르면 다음 갤러리로
    arrow[1].addEventListener('click',autoGallery)    
    arrow[0].addEventListener('click',before)    
    
    //item li[] mouseEvent
    for(let i = 0 ; i<ItemUlLi.length;i++){
        ItemUlLi[i].addEventListener('mouseover',mouseInterval);
        ItemUlLi[i].addEventListener('mouseout',mouseInterval)
    }
    //즉시실행
    (function (){
        autoGallery();
    })();
   
    ItemUl.addEventListener('click',(e)=>{

        ItemUlLi.forEach((itemEl,itemIdx)=>{
            
            if(e.target == itemEl){
             itemEl.classList.add('on')
    
                GalleryUlLi.forEach((gallEl,gallIdx)=>{
                    if(itemIdx==gallIdx){
                        gallEl.classList.add('fadeLi')
                    }else{
                        gallEl.classList.remove('fadeLi')
                    }
                   })
              
                
            }else{
                itemEl.classList.remove('on')
            }
    
        })
    
    
    })





