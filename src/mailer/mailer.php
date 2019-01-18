<?php


header("Access-Control-Allow-Origin: *");
header("content-type:application/json");

    $formData = trim(file_get_contents("php://input"));
    //file_put_contents('post.log', print_r($formData, true)); 
    $data = json_decode($formData, True);

    //If json_decode failed, the JSON is invalid.
if(is_array($data)) {

	$to = "carowood@gmail.com";
    $email =  $data['form_email']; 
    $name = $data['form_name'];
    $headers =  $email;
	$subject = "Flors Carolina - Message from website visitor: " . $name;
    $message = $data['form_msg'] . "\n\n" . $data['form_tel'] ;

    
    
    // Send the email.
    if (mail($to,$subject,$message,$headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
        } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn’t send your message.";
        }
  
    } else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
    }  




?>