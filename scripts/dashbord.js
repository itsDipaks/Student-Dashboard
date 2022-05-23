
function appenddata(){
      let get=JSON.parse(localStorage.getItem("students")) || []

      get.forEach(function(el,index){
            let div1=document.createElement("div")
            div1.className="boxdiv"

            let imgdiv=document.createElement("div")
            imgdiv.className="imgdiv"

            let profile1=document.createElement("img")
            profile1.className="img1"
            profile1.setAttribute("src",el.Pdata)
            imgdiv.append(profile1)

            let name1=document.createElement("h3")
            name1.innerText="Name: "+el.Sname

            let course1=document.createElement("h4")
            course1.innerText="Course : "+el.Cdata

            let unit1=document.createElement("h5")
            unit1.innerText="Unite : "+el.Udata

            let batch1=document.createElement("h4")
            batch1.innerText="Batch : "+el.Bdata

            let btn=document.createElement("button")
            btn.innerText="Remove"
            btn.className="rem"
            btn.addEventListener("click",function(){
                  removedata() })

            div1.append(imgdiv,name1,course1,unit1,batch1,btn)
            main=document.querySelector("#appendall").append(div1)

            });
}


let get=JSON.parse(localStorage.getItem("students")) || []
function removedata(el,index){

      get.splice(index,1)
      localStorage.setItem("students",JSON.stringify(get))
      window.location.reload()

      let trash=JSON.parse(localStorage.getItem("trash")) || []
      trash.push(get)
      localStorage.setItem("trash",JSON.stringify(trash))




   
}


appenddata()