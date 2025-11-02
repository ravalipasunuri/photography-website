<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the input
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Process form (e.g., send email or store in database)
        mail('info@rsvworld.com', 'Contact Form Submission', $message, 'From: ' . $email);
        echo "Thank you for contacting us!";
    } else {
        echo "Please fill in all fields.";
    }
}
?>