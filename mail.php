?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "ashigoel412@gmail.com";

$subject = "Mail from TecHacks";
$txt = "Name = ". $name . "\r\nEmail = ". $email ."\r\n"Message = " . $message ;
$headers = "From: noreply@TecHacks.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

<!-- header("Location:thankyou.html"); -->
?>