// 
//
// $("#submit").on("click", function(event) {
//   event.preventDefault();
//   //form validation
//   /*Validation for Name and picture URL*/
//     function validateForm() {
//         var isValid = true;
//           $('.form-control').each(function(){
//             if ( $(this).val() === '' )
//                 isValid = false;
//           });
//         $('.chosen-select').each(function(){
//           if( $(this).val() === "")
//             isValid = false
//         })
//           return isValid;
//     }
//
//         //if everything is filled
//         if (validateForm() == true) {
//             //creates a new friend from the values submitted
//   // Grab the form elements
//   var newFriend = {
//     Name: $("#name").val().trim(),
//     Photo: $("#photo").val().trim(),
//     score:[
//         $("#q1").val().trim(),
//         $("#q2").val().trim(),
//         $("#q3").val().trim(),
//         $("#q4").val().trim(),
//         $("#q5").val().trim(),
//         $("#q6").val().trim(),
//         $("#q7").val().trim(),
//         $("#q8").val().trim(),
//         $("#q9").val().trim(),
//         $("#q10").val().trim()
//     ]
//   };
//
//   friendsArray.push(friendsObject);
//   var newFriend = friendsObject;
//   console.log(newFriend);
