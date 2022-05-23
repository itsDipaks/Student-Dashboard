function Construteddata(name,course,unit,photo,batch){
      this.Sname=name;
      this.Cdata=course;
      this.Udata=unit;
      this.Pdata=photo;
      this.Bdata=`FT-web${batch}`
}


document.querySelector("#acceptdata").addEventListener("submit",Submitmydata)
function Submitmydata(){
      //taking all the data from all the inputs tags
    event.preventDefault()
     
      let name=acceptdata.name.value;
      let course=acceptdata.course.value;
      let unit=acceptdata.unit.value;
      let photo=acceptdata.photo.value;
      let batch=acceptdata.batch.value

      let student=new Construteddata(name,course,unit,photo,batch)

      let data=JSON.parse(localStorage.getItem("students")) || []

      data.push(student)

      localStorage.setItem("students",JSON.stringify(data))
      

}

function calculatedata()
{
      let data=JSON.parse(localStorage.getItem("students")) || []
      let obj={};
      for(let i=0;i<data.length;i++)
      {
            if(!obj[data[i].Bdata])
            {
                  obj[data[i].Bdata]=1;
            }
      }

      for(let i=0;i<data.length;i++)
      {
             obj[data[i].Bdata]++;
            
      }
      console.log(obj);
      localStorage.setItem("batchdata",JSON.stringify(obj))
}

document.querySelector("#click").addEventListener("click",dashboard)
function dashboard(){
      window.location.href="dashbord.html"
}