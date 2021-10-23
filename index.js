var global_id="";
var table=document.getElementsByClassName("table_users")[0];
var id,project_name,start_date,status_project,progress;
var table_row=";";
var user_details=[];
window.onload=()=>
{
  console.log("hi")
  table=document.getElementsByClassName("table_users")[0];
  user_details=[];
  var obj=
  {
    projects:"New Admin Design",
    start_date:"2014-02-09",
    status : "Completed",
    progress :"100",
  };
  user_details.push(obj);
  obj=
  {
    projects:"Landing Page Design",
    start_date:"2014-02-09",
    status : "Pending",
    progress :"50",
  };
  user_details.push(obj);
  obj=
  {
    projects:"Multipurpose Landing Design",
    start_date:"2014-02-09",
    status : "Completed",
    progress :"100",
  };
  user_details.push(obj);
  obj=
  {
    projects:"Blog Landing Design",
    start_date:"2014-02-09",
    status : "Pending",
    progress :"50",
  };
  user_details.push(obj);
  obj=
  {
    projects:"Korose Landing Design",
    start_date:"2014-02-09",
    status : "Completed",
    progress :"100",
  }; user_details.push(obj);
 loadData();

//  var table=document.getElementsByClassName("table_users")[0]
//   var tr= document.createElement("tr");
//   var date_time=new Date();
//   tr.className=date_time
//   var td=  document.createElement("td");
//   td.innerText="2";
//   td.id=date_time+"_id"
//   tr.appendChild(td);
//   var td1=  document.createElement("td");
//   td1.innerText="Papa";
//   td1.id=date_time+"_projects"
//   tr.appendChild(td1);
  
//   var td2=  document.createElement("td");
//   td2.innerText="Papa1";
//   td2.id=date_time+"_start_date"
//   tr.appendChild(td2);
//   var td3=  document.createElement("td");
//   td3.innerText="Papa11";
//   td3.id=date_time+"_status"
//   tr.appendChild(td3);
//   var td4=  document.createElement("td");
//   td4.innerText="Papa112";
//   tr.appendChild(td4);
//   var td5=  document.createElement("td");
//   td5.innerText="Papa1124";
//   td5.id=date_time+"_progress"
//   tr.appendChild(td5);
//   var td6 = document.createElement("td");
//   var span1=document.createElement("span");
//   var button= document.createElement("button");
//   button.innerText="Edit";
//   button.className=date_time
//   button.addEventListener("click",function(event){
//      // var inner_button=event.attributes["childNodes"][0].text;
//       //console.log(inner_button)
//       global_id=event.target.className
//       console.log(event.target.className)
//       var modal = document.getElementById("myModal");
//       var str=event.path[0].className;
//       console.log(str);
//       var elements=document.getElementsByClassName(str);
//       var tr_temp=elements[0];
//       tr_temp.children[0].innerText="222"
//       console.log(tr_temp.children[0])
//       modal.style.display = "block";
//      var tr= document.getElementsByClassName(global_id)[0];
//      var modal_id=document.getElementById('id');
//      console.log(modal_id);
//      modal_id.value=tr.children[0].innerText;
//      var modal_projects=document.getElementById('projects');
//      modal_projects.value=tr.children[1].innerText;
//      var modal_start_date=document.getElementById('start_date');
//      modal_start_date.value=tr.children[2].innerText;
//      var modal_status=document.getElementById('status');
//      modal_status.value=tr.children[3].innerText;
//      var modal_progress=document.getElementById('progress');
//      modal_progress.value=tr.children[5].innerText;
//      //=;
//   });
//   var button1= document.createElement("button");
//   button1.innerText="delete";
//   button1.className=date_time
//   button1.id="papua1"
//   button1.addEventListener("click",function(event){
//     global_id=event.target.className
//     var modal = document.getElementById("myModal");
//     var str=event.path[0].className;
//     console.log(str);
//     var elements=document.getElementsByClassName(str);
//     var tr_temp=elements[0];
//     tr_temp.children[0].innerText="223"
//     console.log(tr_temp.children[0])
//     modal.style.display = "none";
    
//     });
//   span1.appendChild(button);
//   span1.appendChild(button1);
//   td6.appendChild(span1);
//   tr.appendChild(td6);
//   table.appendChild(tr);
}
function see(text)
{
    var input_id=global_id+"_"+text;
    var table_data=document.getElementById(input_id);
   var input_user=document.getElementById(text);
   console.log(input_user.value+"hello")
   console.log(table_data)
   table_data.innerText=input_user.value;
}
function editUser()
{

}
function changeTable(search)
{
var project_name=search;
project_name=document.getElementById(search).value;
//console.log(table.children[0].children[0])
//alert(table.children.length)
//table.children[0].style.property="initial";
var count=1;
for(var i=1;i<table.children.length;i++)
{
  
 
  if(project_name.length==0)
  {
    console.log("mazhar")
    console.log()
    //table.children[i].style="visibility:";
    table.children[i].style.display="table-row";
    table.children[i].children[0].innerText=count;
    count++;
  }
  else
  {

    if(table.children[i].children[1].innerText.match(project_name)==null)
    {
      console.log("null")
      console.log(table.children[i])
      table.children[i].style.display="none";
    }
    else
    {
      console.log("entered")
      table.children[i].children[0].innerText=count;
      count++;
      console.log(table.children[i])
      table.children[i].style.display="table-row";
    }

  }
}
console.log(table.children.length)
//table.removeChild(0,table.childNodes);
var obj=
  {
    projects:"New Admin Design",
    start_date:"02/05/2019",
    status : "Completed",
    progress :"100%",
  };
for(var i=0;i<user_details.length;i++)
{
  var str="";
  
  if(user_details[i].projects.match(project_name))
  {
         
  }
}
}
function addUser()
{

  var table=document.getElementsByClassName("table_users")[0]
  var tr= document.createElement("tr");
  var date_time=new Date();
  tr.className=date_time
  var td=  document.createElement("td");
  td.innerText=id;
  td.id=date_time+"_id"
  tr.appendChild(td);
  var td1=  document.createElement("td");
  td1.innerText=project_name;
  td1.id=date_time+"_projects"
  tr.appendChild(td1);
  
  var td2=  document.createElement("td");
  td2.innerText=start_date;
  td2.id=date_time+"_start_date"
  tr.appendChild(td2);
  var td3=  document.createElement("td");
  td3.innerText= status_project;
  td3.id=date_time+"_status"
  tr.appendChild(td3);
  var td4=  document.createElement("td");
  td4.innerText="Papa112";
  tr.appendChild(td4);
  var td5=  document.createElement("td");
  td5.innerText=progress;
  td5.id=date_time+"_progress"
  tr.appendChild(td5);
  var td6 = document.createElement("td");
  var span1=document.createElement("span");
  var button= document.createElement("button");
  button.innerText="Edit";
  button.className=date_time
  button.addEventListener("click",function(event){
     // var inner_button=event.attributes["childNodes"][0].text;
      //console.log(inner_button)
      global_id=event.target.className
      console.log(event.target.className)
      var modal = document.getElementById("myModal");
      var str=event.path[0].className;
      console.log(str);
      var elements=document.getElementsByClassName(str);
      var tr_temp=elements[0];
      tr_temp.children[0].innerText="222"
      console.log(tr_temp.children[0])
      modal.style.display = "block";
     var tr= document.getElementsByClassName(global_id)[0];
     var modal_id=document.getElementById('id');
     console.log(modal_id);
     modal_id.value=tr.children[0].innerText;
     var modal_projects=document.getElementById('projects');
     modal_projects.value=tr.children[1].innerText;
     var modal_start_date=document.getElementById('start_date');
     var temp_date=tr.children[2].innerText.split("-");
     var year=temp_date[2];
     var month="";
     switch(temp_date[1])
     {
       case "Jan":month="01";break;
       case "Feb":month="01";break;
       case "Mar":month="01";break;
       case "Apr":month="01";break;
       case "May":month="01";break;
       case "Jun":month="01";break;
       case "Jul":month="01";break;
       case "Aug":month="01";break;
       case "Sep":month="01";break;
       case "Oct":month="01";break;
       case "Nov":month="01";break;
       case "Dec":month="01";break;
     }
     var date=temp_date[0];
     modal_start_date.value=`"${year}-${month}-${date}"`;
     var modal_status=document.getElementById('status');
     modal_status.value=tr.children[3].innerText;
     var modal_progress=document.getElementById('progress');
     modal_progress.value=tr.children[5].innerText;
     //=;
  });
  var button1= document.createElement("button");
  button1.innerText="delete";
  button1.className=date_time
  button1.id="papua1"
  button1.addEventListener("click",function(event){
    global_id=event.target.className
    var modal = document.getElementById("myModal");
    var str=event.path[0].className;
    console.log(str);
    var elements=document.getElementsByClassName(str);
    var tr_temp=elements[0];
    tr_temp.children[0].innerText="223"
    console.log(tr_temp.children[0])
    modal.style.display = "none";
    deleteUser(tr_temp);
    
    });
  span1.appendChild(button);
  span1.appendChild(button1);
  td6.appendChild(span1);
  tr.appendChild(td6);
  table.appendChild(tr);

















  
}
function deleteUser(tr)
{
  console.log(tr);
    table.removeChild(tr);
    var count=1;
for(var i=1;i<table.children.length;i++)
{
  
 
  
   
    //table.children[i].style="visibility:";
    //.children[i].style.display="table-row";
    table.children[i].children[0].innerText=count;
    count++;
  

  }

}
window.onclick = function(event) {
  console.log("kkkk");
    console.log(event.target);
    var modal = document.getElementById("myModal");
    var modal_user =document.getElementById("modal_user");
    var close=document.getElementById("close");
    var close1=document.getElementById("close1");
    if (event.target == close) {
      modal.style.display = "none";
      modal_user.style.display="none";
    }
    if (event.target == close1) {
      
      modal_user.style.display="none";
    }
    var modall = document.getElementById("form_user1");
    if (event.target == modall) {
      
      modal.style.display="none";
    }
}
function loadData()
{
  
 for(var i=0;i<user_details.length;i++)
 {
         addUserWithDetails(i+1,user_details[i].projects,user_details[i].start_date,user_details[i].status,3,user_details[i].progress);
 }
}
function addUserWithDetails(p_id,p_projects,p_start_date,p_status,p_teams,p_progress)
{
  var table=document.getElementsByClassName("table_users")[0]
  var tr= document.createElement("tr");
  var date_time=Date.now()+Math.random();
  
  tr.className=date_time
  var td=  document.createElement("td");
  td.innerText=p_id;
  td.id=date_time+"_id"
  tr.appendChild(td);
  var td1=  document.createElement("td");
  td1.innerText=p_projects;
  td1.id=date_time+"_projects"
  tr.appendChild(td1);
  
  var td2=  document.createElement("td");
  td2.innerText=p_start_date;
  td2.id=date_time+"_start_date"
  tr.appendChild(td2);
  var td3=  document.createElement("td");
  td3.innerText= p_status;
  td3.id=date_time+"_status"
  if(p_status=="Completed")
  {
    td3.style="color:green";
  }
  else
  {
    td3.style="color:blue";
  }
  tr.appendChild(td3);
  var td4=  document.createElement("td");
  var avatarDiv=document.createElement("div");
  avatarDiv.innerHTML+=`<img class="avatar" title="mazhar" src="http://placeimg.com/80/80/people">
  <img class="avatar" title="Azhar" src="http://placeimg.com/80/80/animals">
  <img class="avatar" title="Nazeer" src="http://placeimg.com/80/80/tech">
  <img class="avatar" title="Khaisar" src="http://placeimg.com/80/80/sport">`;
  td4.appendChild(avatarDiv);
  tr.appendChild(td4);
  var td5=  document.createElement("td");
  var divv=document.createElement("div");
  var color_pallete="blue";
  if(Number(p_progress)>50)
  {
    color_pallete="green";
  }
  divv.style="width:100%;background-color:rgb(200, 200, 212);border-radius:2%";
  var innerDiv=document.createElement("div");
  innerDiv.innerText=p_progress+"%";
  //innerDiv.style=`width:"${p_progress}%";height:10px;background-color:"${color_pallete}"`;
  innerDiv.style.width=p_progress+"%";
  innerDiv.style.height="10px";
  innerDiv.style.backgroundColor=color_pallete;
  innerDiv.style.borderRadius="1%";
  innerDiv.style.fontSize="8px";
  innerDiv.style.textAlign="end";
  innerDiv.style.paddingTop="5px";
  innerDiv.style.fontWeight="bold";
  innerDiv.style.color="white";
  divv.appendChild(innerDiv);
  td5.appendChild(divv);
  //td5.innerText=p_progress;
  td5.id=date_time+"_progress"
  tr.appendChild(td5);
  var td6 = document.createElement("td");
  var span1=document.createElement("span");
  var button= document.createElement("button");
  button.style="background:none;border:none;cursor:pointer;"
  button.className=date_time;
  button.innerHTML+=`<i class='fa fa-pencil' id="${date_time}"" aria-hidden='true'></i>`
  button.addEventListener("click",function(event){
     // var inner_button=event.attributes["childNodes"][0].text;
      //console.log(inner_button)
      global_id=event.target.id
      console.log(event.target.id+"pppp")
      var modal = document.getElementById("myModal");
      var str=event.path[0].id;
     // console.log(str);
      var elements=document.getElementsByClassName(str);
      var tr_temp=elements[0];
     // tr_temp.children[0].innerText="222"
      //console.log(tr_temp.children[0])
      modal.style.display = "block";
     var tr= document.getElementsByClassName(global_id)[0];
     table_row=tr;
     console.log(tr)
    //  var modal_id=document.getElementById('id');
    //  //console.log(modal_id);
    //  modal_id.value=tr.children[0].innerText;
     var modal_projects=document.getElementById('projects');
     modal_projects.value=tr.children[1].innerText;
     var modal_start_date=document.getElementById('start_date');
     modal_start_date.value=tr.children[2].innerText;
     var modal_status=document.getElementById('status');
     modal_status.value=tr.children[3].innerText;
     var modal_progress=document.getElementById('progress');
     console.log(tr.children[5].children[0].children[0].innerText)
     var val=tr.children[5].children[0].children[0].innerText;
     modal_progress.value=val.split("%")[0];
     //=;
  });
  var button1= document.createElement("button");
  //button1.innerText="delete";
  button1.className=date_time
  button1.id="papua1"
  button1.style="background:none;border:none;cursor:pointer"
  button1.innerHTML+=`<i class="fas fa-trash-alt" id="${date_time}"></i>`;
  button1.addEventListener("click",function(event){
    global_id=event.target.id
    var modal = document.getElementById("myModal");
    var str=event.path[0].id;
    console.log(str);
    var elements=document.getElementsByClassName(str);
    var tr_temp=elements[0];
    //tr_temp.children[0].innerText="223"
    //console.log(tr_temp.children[0])
    modal.style.display = "none";
    deleteUser(tr_temp);
    
    });
  span1.appendChild(button);
  span1.appendChild(button1);
  td6.appendChild(span1);
  tr.appendChild(td6);
  table.appendChild(tr);










}
function createNormalTD()
{

}
function createTDWithProgress()
{

}
function createTDWithAvatars()
{

}
function createTDWithEditAndDelete()
{

}
function addUser1()
{
  var model_user=document.getElementById("modal_user");
  model_user.style.display="block";
}
function addUserDetails(event)
{
  event.preventDefault();
  console.log("hi")
  var project_name_d=document.getElementById("projects_d").value;
  var start_date_d=document.getElementById("start_date_d").value;
  var status_d=document.getElementById("status_d").value;
  var progress_d=document.getElementById("progress_d").value;
  console.log(project_name_d+" "+start_date_d+" "+status_d+" "+progress_d)
  addUserWithDetails(table.children.length,project_name_d,start_date_d,status_d,"pappu",progress_d);
  document.getElementById("projects_d").value="";
  document.getElementById("start_date_d").value="";
  document.getElementById("status_d").value="";
  document.getElementById("progress_d").value="";
    modal_user.style.display="none";
  
}
function changeRow(event)
{
  event.preventDefault();
 table_row.children[1].innerText=document.getElementById("projects").value;
 var modal = document.getElementById("myModal");
 var temp_date=document.getElementById("start_date").value.split("-");
     var year=temp_date[0];
     var month="";
     switch(temp_date[1])
     {
       case "Jan":month="01";break;
       case "Feb":month="02";break;
       case "Mar":month="03";break;
       case "Apr":month="04";break;
       case "May":month="05";break;
       case "Jun":month="06";break;
       case "Jul":month="07";break;
       case "Aug":month="08";break;
       case "Sep":month="09";break;
       case "Oct":month="10";break;
       case "Nov":month="11";break;
       case "Dec":month="12";break;
     }
     var date=temp_date[2];
     month=temp_date[1];
    // alert(temp_date[1])
     table_row.children[2].innerText=year+"-"+month+"-"+date;
     table_row.children[3].innerText=document.getElementById("status").value;
    // table_row.children[5].innerText=document.getElementById("progress").value;
     table_row.children[5].children[0].children[0]
    if(document.getElementById("status").value=="Completed")
     {
       var div=table_row.children[3];
       
      // console.log("pa")
      div.style=" color:green ;"
      //console.log(div);
     }
     else
     {
      var div=table_row.children[3];
      div.style="color:blue" ;
     // console.log(div);
     
     }
    // var td5=  document.createElement("td");
     //var divv=document.createElement("div");
     var color_pallete="blue";
     if(document.getElementById("progress").value>50)
     {
       color_pallete="green";
     }
     //divv.style="width:100%;background-color:rgb(200, 200, 212);border-radius:2%";
     var innerDiv=table_row.children[5].children[0].children[0];
     innerDiv.innerText=document.getElementById("progress").value+"%";
     //innerDiv.style=`width:"${p_progress}%";height:10px;background-color:"${color_pallete}"`;
     innerDiv.style.width=document.getElementById("progress").value+"%";
     innerDiv.style.height="10px";
     innerDiv.style.backgroundColor=color_pallete;
     innerDiv.style.borderRadius="1%";
     innerDiv.style.fontSize="8px";
     innerDiv.style.textAlign="end";
     innerDiv.style.paddingTop="5px";
     innerDiv.style.fontWeight="bold";
     innerDiv.style.color="white";
    // divv.appendChild(innerDiv);
     //td5.appendChild(divv);
     //td5.innerText=p_progress;
     //td5.id=date_time+"_progress"
    // tr.appendChild(td5);



































 modal.style.display="none";

}
