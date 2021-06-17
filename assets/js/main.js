let requestURL = 'https://reqres.in/api/users?delay=3';

$(document).ready(function(){
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      const datalist = request.response;
      //  console.log(datalist);
      show(datalist['data']);
      
    }
});

function show(datalist) {
  $('#listitem').empty()
    $('#loaderid').removeClass('loader')
    $('#listitem').show();
    $('#displayitem').hide()
    let listitem = document.getElementById("listitem");
    datalist.forEach(itemdata => {	  
      listitem.innerHTML += `
      <div class="col-md-4 col-sm-4" style="padding: 23px;"  onclick="getuserdata(`+itemdata['id']+`)">
	        <div class="card shadows" >
	            <img src="`+itemdata['avatar']+`" class="tabimg card-img-top" alt="...">
          <div class="card-body ">
              <h5 class="text-center">`+itemdata['first_name']+'   '+itemdata['first_name']+`</h5>
          </div>
          </div>
      </div>
   `;
  
  }) ;
  
}

function getuserdata(id){
  let requestURL = ' https://reqres.in/api/users/'+id;

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const datalist = request.response;
  // console.log(datalist['data']);
  Display(datalist['data']);
  
}
function Display(datalist) {
  console.log(datalist)
  $('#listitem').hide()
  $('#displayitem').empty()
  $('#displayitem').show()
  displayitem = document.getElementById('displayitem');
  displayitem.innerHTML += `
  <div class="row">
    <div class="col-md-12">
      <div class="card shadows" >
	 <img src="`+datalist['avatar']+`" class="tabimg img-preview" alt="...">
     <div class="card-body">
    <h5 class="text-center">`+datalist['first_name']+'   '+datalist['first_name']+`</h5>
    <p class="text-center ">Email : `+datalist['email']+`</p>
  <div class="text-center"><a href="index.html">Go back</a>
        </div>
    </div>
  </div>
  </div>
  </div>
  `

}
}
function myFunction(){
var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Maininputsearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listitem");
    li = ul.getElementsByClassName("filtersss");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].innerHTML;
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
