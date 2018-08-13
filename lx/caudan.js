$(document).ready(function(){
    var sub =$('#sub')
    var activeRow
    var activeMenue

    $('#test')
    .on('mouseenter',function(e){
        sub.removeClass('none')
    })
    .on('mouseleave',function(e){
        sub.addClass('none')

        if(activeRow){
            activeRow.removeClass('active')
            active=null
        }

        if(activeMenue){
            activeMenue.addClass('none')
            activeMenue=null
        }
    })
    .on('mouseenter','li',function(e){
        if(!activeRow){
            activeRow=$(e.target).addClass('active')
            activeMenue=$('#'+activeRow.data('id'))
            activeMenue.removeClass('none')
            return
        }
    })
})