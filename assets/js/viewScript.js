{
    const search =document.getElementById('search');
    const input= document.getElementById('input');
    search.addEventListener('click',function(e){
        e.preventDefault()
        let find=input.value.toLowerCase();
        // console.log(find)
        let td = document.getElementsByTagName('td');
        for(let l=0;l<td.length;l++){
            let findtext=td[l].textContent.toLowerCase();
            if(findtext.includes(find)){
                td[l].classList.add('add');
            }else{
                td[l].classList.remove('add');
            }

            
        }
        console.log(td.length)
        
    })
}