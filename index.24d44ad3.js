var e=document.querySelector("table"),l=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),o=document.querySelector(".remove-column");function t(){l.disabled=e.rows.length>=10,n.disabled=e.rows.length<=2,r.disabled=e.rows[0].cells.length>=10,o.disabled=e.rows[0].cells.length<=2}l.addEventListener("click",function(){if(e.rows.length<10)for(var l=e.insertRow(),n=0;n<e.rows[0].cells.length;n++)l.insertCell();t()}),n.addEventListener("click",function(){e.rows.length>2&&e.deleteRow(-1),t()}),r.addEventListener("click",function(){e.rows[0].cells.length<10&&Array.from(e.rows).forEach(function(e){e.insertCell()}),t()}),o.addEventListener("click",function(){e.rows[0].cells.length>2&&Array.from(e.rows).forEach(function(e){e.deleteCell(-1)}),t()});
//# sourceMappingURL=index.24d44ad3.js.map