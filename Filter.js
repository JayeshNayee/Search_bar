    function search_fun() {
      // lower lakhe too pan upper male and uppper lakhe too kaoi chita ja nahi
      let Filter = document.getElementById('myinput').value.toUpperCase();

      let mytable = document.getElementById('mytable');

      let tr = mytable.getElementsByTagName('tr');
    
      // for column 0 
      for(var i = 0;i<tr.length; i++)
      {
        let td =tr[i].getElementsByTagName('td')[0];

        if(td){
          let textvalue = td.textContent || td.innerHTML;

          if(textvalue.toUpperCase().indexOf(Filter) > -1){
            tr[i].style.display = "";
          }
          else{
            tr[i].style.display= "none";
          }
        }
      }  
    }   
    
