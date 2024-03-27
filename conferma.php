<?php
// Recupera i dati dal modulo HTML
$nome = $_POST['nome'];
$cognome = $_POST['cognome'];
$telefono = $_POST['telefono'];
$ora = $_POST['ora'];
$posti = $_POST['posti'];
$email = $_POST['email'];
$note = $_POST['note'];

// Costruisci il corpo del messaggio di conferma
$messaggio = "Grazie per aver prenotato il tuo tavolo presso Caffetteria Gemini!\n\n";
$messaggio .= "Dettagli della prenotazione:\n";
$messaggio .= "Nome: $nome $cognome\n";
$messaggio .= "Telefono: $telefono\n";
$messaggio .= "Ora: $ora\n";
$messaggio .= "Posti: $posti\n";
$messaggio .= "Email: $email\n";
$messaggio .= "Note: $note\n";

// Indirizzo email del destinatario (puoi personalizzarlo con il tuo indirizzo email)
$destinatario = "tuo@email.com";

// Oggetto della mail
$oggetto = "Conferma prenotazione tavolo";

// Intestazioni aggiuntive per specificare il mittente e il tipo di contenuto
$headers = "From: Caffetteria Gemini <info@caffetteriagemini.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Invia la mail di conferma
$mail_success = mail($destinatario, $oggetto, $messaggio, $headers);

// Verifica se l'invio della mail è riuscito
if ($mail_success) {
    echo "Grazie per la tua prenotazione! Ti abbiamo inviato una mail di conferma.";
} else {
    echo "Si è verificato un errore durante l'invio della mail di conferma. Per favore, riprova più tardi.";
}
?>
