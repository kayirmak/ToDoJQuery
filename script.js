let btn = document.querySelector('#btn-add');

btn.addEventListener('click', () =>{
    let inp = document.querySelector('#inp');
    let list = document.querySelector('#list');
    let item = document.createElement('li');
    
    

    if(inp.value){
        let clear = document.querySelector('#btn-clear');
        clear.setAttribute('onclick', `clearList()`);

        let trash = document.createElement('button');
       
        trash.classList.add('trash-btn');
        trash.classList.add('fas')
        trash.classList.add('fa-trash-alt');
        

        let change = document.createElement('button');
        change.classList.add('change-task');
        change.classList.add('fas');
        change.classList.add('fa-exchange-alt');
        

        let flex = document.createElement('div');
        flex.classList.add('flex');

        item.innerText = inp.value;
        let id = Date.now();
        item.classList.add(`item-${id}`);
        item.classList.add(`clear`);
         
        list.appendChild(item);
        item.appendChild(flex);
        flex.appendChild(trash);
        flex.appendChild(change);
       
        item.setAttribute('onclick', `changeStatus(${id}, event)`);
        trash.setAttribute('onclick', `trashTask(${id})`);
        change.setAttribute('onclick', `changeTask(${id})`);
        inp.value = '';
        


        changeTask = (id) => {
            let item = document.querySelector(`.item-${id}`);
            let conf = document.createElement('button');
            conf.classList.add('confirm');
            conf.innerText = 'OK';
            
            item.innerHTML = '<input>'
            item.appendChild(conf);
            conf.setAttribute('onclick', `ok(${id})`);
            ok = (id) =>{
                let trash = document.createElement('button');
       
                trash.classList.add('trash-btn');
                trash.classList.add('fas')
                trash.classList.add('fa-trash-alt')

                let change = document.createElement('button');
                change.classList.add('change-task');
                change.classList.add('fas');
                change.classList.add('fa-exchange-alt');

                let flex = document.createElement('div');
                flex.classList.add('flex');

                let elem = document.querySelector(`.item-${id}`);
                let inp = document.querySelector(`.item-${id} input`);
                
                flex.appendChild(trash);
                flex.appendChild(change);
                elem.innerText = inp.value;
                
                elem.appendChild(flex)
            }
            
        }
        
       



        trashTask = (id) => {
            let item = document.querySelector(`.item-${id}`);
            item.remove(item);
        }
        
        changeStatus = (id, event) => {
            if(event.target.className === 'trash-btn fas fa-trash-alt') return
            let item = document.querySelector(`.item-${id}`);
            item.classList.toggle('completed');    
            
        }
 

        clearList = () => {
            let item = document.querySelectorAll(`.clear`);
            for(let i = 0; i < item.length; i++){
               item[i].remove(item);
            }
        }
    }


    else{alert('Ошибка! Заполните поле!')}
 

})



