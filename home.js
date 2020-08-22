   var range;
    var flist ;
    var vari;
    var a = document.getElementById('menu');
    var Order = new XMLHttpRequest();
    Order.open('GET','https://davids-restaurant.herokuapp.com/menu_items.json');
    console.log("yes");
    Order.onload = function(){
        flist = JSON.parse(Order.responseText);
        vari = flist.menu_items;
        console.log(vari[10].short_name);
        console.log(flist.menu_items[2].name);
        for(range = 0; range < flist['menu_items'].length; range++){
            a.innerHTML=a.innerHTML + "<option>"+flist['menu_items'][range].name +"</option>";
            // console.log(i,menu['menu_items'][i].name);
        }
        
    };
    function display(){
      var idx = a.selectedIndex -1 ;
      console.log(idx);
      console.log(vari[idx].name);
      document.getElementById('ID').innerHTML= vari[idx].short_name ;
      document.getElementById('name').innerHTML= vari[idx].name ;
      document.getElementById('About').innerHTML= vari[idx].description;
      document.getElementById('scost').innerHTML= vari[idx].price_small ;
      document.getElementById('lcost').innerHTML= vari[idx].price_large ;
      
    }

    Order.send();
