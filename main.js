$(document).ready(() => {
    
   
    let btn = $('#btn-add');
    btn.click(function(){
        let inp = $('#inp');
        let list = $('#list');
        let item = $('<li></li>');
        let trashBtn = $('<button></button>');
        let changeBtn = $('<button></button>');
        let clearBtn = $('#btn-clear');
        
        if(inp.val()){
            let id = Date.now();
            
            trashBtn.addClass('fas fa-trash-alt');
            changeBtn.addClass('fas fa-exchange-alt');
            item.addClass(`item-${id}`);
            item.addClass('clear');
           
            let par = $('<p></p>');
            par.addClass(`par-${id}`);
            let pik = $('<p></p>');
            pik.addClass('pik');

            item.append(par);
            par.append(pik);
            pik.text(inp.val());
            list.append(item);
            item.append(trashBtn);
            item.append(changeBtn);

            trashBtn.attr('onclick', `trash(${id})`);
            changeBtn.attr('onclick', `changeTask(${id})`);
            pik.attr('onclick', `changeStatus(${id}, event)`);
            clearBtn.attr('onclick', `clearList()`);
            inp.val('');

        }
        else alert('Заполните поле');
    })

    changeTask = (id) => {
        let btnTrash = $('<button></button>');
        btnTrash.text('Ok');
        btnTrash.addClass('confirm');
        $(`.item-${id} .par-${id}`).html('<input class = "inp-change">');
        $(`.item-${id}`).append(btnTrash);
        btnTrash.attr('onclick', `ok(${id})`);
        $(`.item-${id} .fa-exchange-alt`).css('display', 'none');

        ok = (id) => {
            if($('.inp-change').val()) {
                $(`.item-${id} .par-${id}`).text($(`.inp-change`).val());
                $('.confirm').remove();
                $('.fa-exchange-alt').css('display', 'block');
                $(`.par-${id}`).attr('onclick', `changeStatus(${id}, event)`);
            }
            else alert('Заполните поле');
            
        }

    }


    trash = (id) => {
        $(`.item-${id}`).remove();
    }


    changeStatus = (id, event) => {
        if(event.target.className == 'fas fa-trash-alt' || event.target.className == 'fas fa-exchange-alt' || event.target.className == 'confirm') return
        else
        $(`.par-${id}`).toggleClass('completed');
    }


    clearList = () => {
        let clear = $('.clear');
        for(let i = 0; i < clear.length; i++)
        clear.remove();
    }
    

})