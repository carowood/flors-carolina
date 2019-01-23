<?php
header("Access-Control-Allow-Origin: *");
header("content-type:application/json");

$formData = trim(file_get_contents("php://input"));
    
//file_put_contents('post.log', print_r($formData, true)); 
$data = json_decode($formData, True);

if(is_array($data)) {

	$to = "carowood@gmail.com";
    $email =  $data['form_email']; 
    $name = $data['form_name'];
    $tel = $data['form_tel'];
    $headers =  "From: " . $email;
	$subject = "Flors Carolina - Message from website visitor: " . $name;
    $message = "Name:" ."\t". $name . "\n" . "Email:" ."\t" . $email ."\n" . "Tel:" . "\t"  . $tel . "\n\n". $data['form_msg'] . "\n\n";
    
    
    // Send the email.
    if (mail($to,$subject,$message,$headers)) {
        http_response_code(200);
        } else {
        http_response_code(500);
        }
    } else {
    http_response_code(403);
    }  
?>