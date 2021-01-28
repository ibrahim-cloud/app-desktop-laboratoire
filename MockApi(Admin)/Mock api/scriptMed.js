require('dotenv').config()

//// get data ////

window.$ = window.jQuery = require('jquery');
$(function(){

    var MN="";
    var dynamicURL="";
    var $doctors =$('#doctors');
    var $ide= $('#ide');
    var $nom = $('#nom');
    var $prenom = $('#prenom');
    var $tel = $('#tel');
    var $cin = $('#cin');
    var $email = $('#email');
    var $password = $('#password');
   

    $.ajax({
        type:'GET',
        url:'https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor',
        success:function(doctors){
            $.each(doctors,function(i,doctor){
                $doctors.append(' <tr> <td> '+ doctor.id + '</td>'+
                ' <td> '+ doctor.nom +'</td>'+ 
                ' <td>  '+ doctor.prenom+'</td>'+  
                ' <td>  '+ doctor.tel+'</td>'+  
                ' <td>  '+ doctor.cin+'</td>'+ 
                ' <td>  '+ doctor.email+'</td>'+ 
                ' <td>  '+ doctor.password+'</td>'+ 
                '<td>  <button id="btnup"  data-bs-toggle="modal"  class="btn btn-secondary" data-bs-target="#exampleModal" onclick= "update('+doctor.id +')">Update</button> </td><td>  <button id="btndel"  type="button" class="btn btn-danger"  onclick= "deleteItem('+doctor.id +')">Delete</button> </td> </tr>')
            });
        },
        error: function(){
            alert('error');
        }
    });



//::::::::::::::::::::::::::::::::::::::::::::::::::///update 

var MNP="";
var dynamicURLP="";
var $doctors =$('#doctors');
var $ideP= $('#ideP');
var $nomP = $('#nomP');
var $prenomP = $('#prenomP');
var $telP = $('#telP');
var $cinP = $('#cinP');
var $emailP = $('#emailP');
var $passwordP = $('#passwordP');
$('#update').on('click', function() {
  var idelp = $('#ideP').val();
  var doctorP = {
    id:$ideP.val(),
    nom: $nomP.val(),
    prenom: $prenomP.val(),
    email: $emailP.val(),
    tel: $telP.val(),
    cin: $cinP.val(),
    password: $passwordP.val(),
  };


  MNP="PUT";
      dynamicURLP ="https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor/" + ide;

  $.ajax({ 
    url:"https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor/" + idelp,
    method: "PUT",
    data: doctorP,
    
    success: function() {
      
      
      location.reload();
    },
    error: function(error){
      alert("error");
    }
    
  });

  });

    //// add and update Data ///
    $('#add').on('click', function() {
        var ide = $('#ide').val();
    
        
      
        
     

  if ( $nom.val() == "" || $prenom.val() =="" | $cin.val() =="" | $password.val() =="" || $email.val() == "" ){
    alert('something wrong ')
  }
  else{
       var doctor = {
          id:$ide.val(),
          nom: $nom.val(),
          prenom: $prenom.val(),
          email: $email.val(),
          tel: $tel.val(),
          cin: $cin.val(),
          password: $password.val(),
        }; 
        dynamicURL = "https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor";
    MN = "POST";


  $.ajax({ 
    url: dynamicURL,
    method: MN,
    data: doctor,
    success: function() {

      location.reload();
    },
    error: function(error){
      alert(error);
    }
    
  });

 
  }

      });      
});



////// select data for update  ///
function update(id) {
    
    $.ajax({
      type: 'GET',
    url: 'https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor/' + id,
    success: function(data) {

      $('#ideP').val(data.id);
      $('#nomP').val(data.nom);
      $('#emailP').val(data.email);
      $('#prenomP').val(data.prenom);
      $('#telP').val(data.tel);
      $('#cinP').val(data.cin);
      $('#passwordP').val(data.password);
      
  
      
    },
    error: function(error){
      alert(error);
    }
  })
}
/////// delete data //////
function deleteItem(id) {
    $.ajax({
      type: 'DELETE',
      url: 'https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor/' + id,
    success: function() {
      location.reload();
    },
    error: function(error){
      alert(error);
    }
  })
  
  
  }
  
////////////////login
function LogIn ()  {
  let email = document.getElementById('user').value
  let password = document.getElementById('pass').value

    var ad = process.env.AdminLogin;
  var ps = process.env.AdminPass ;
  if (email == "admin" && password == "admin") {
   
    window.location.replace("ListMed.html");
    
    console.log("here we are")
  } else

  $.ajax({
    type:'GET',
    url:'https://6008ad820a54690017fc2471.mockapi.io/api/v1/doctor',
    success:function(doctors){
        $.each(doctors,function(i,doctor){
          console.log(doctor.nom)
            console.log(doctor.nom)
            if (email == doctor.nom && password == doctor.password) {
                   window.location.replace("../Covid-19/index.html");          
                  }
           else     
          {

          document.getElementById('err').innerHTML="name or password is not defind";
    }
        });
    },
    
   
   
});
   
        }

  function dec(){
    window.location.href = "Login.html";
  }
