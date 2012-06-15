; <?php die(); /* Do not remove this line */ ?>

[testing-mysql : general]
database.adapter            = "Pdo_Mysql"
database.params.host        = "localhost"
database.params.dbname      = "phprojekt-test"
database.params.username    = "phprojekt"
database.params.password    = "phprojekt"

[testing-pgsql: general]
database.adapter            = "Pdo_Pgsql"
database.params.host        = "localhost"
database.params.dbname      = "phprojekt-mvc-testing"
database.params.username    = "phprojekt"
database.params.password    = "phprojekt"


[general]

applicationDir       = "/var/lib/jenkins/jobs/PHProjekt (next)/workspace/phprojekt/"

tmpPath            = "/var/lib/jenkins/jobs/PHProjekt (next)/workspace/phprojekt/tests/private_folder/tmp/"
applicationPath    = "/var/lib/jenkins/jobs/PHProjekt (next)/workspace/phprojekt/tests/private_folder/application/"
log.debug.filename = "/var/lib/jenkins/jobs/PHProjekt (next)/workspace/phprojekt/tests/private_folder/logs/debug.log"

itemsPerPage         = 3;
userDisplayFormat    = 0
maxUploadSize        = 512000

;;;;;;;;
; MAIL ;
;;;;;;;;

; Mail class is currently used by Notification class and Minutes module.

; 0 = Read SMTP parameters from here (smtpServer, smtpUser, smtpPassword, etc)
; 1 = Read SMTP parameters from php.ini
mailTransport = 0;

; If mailTransport is set to 0, then fill all the needed 'smtp*' values:
; Name or IP address of the SMTP server to be used to send that notifications.
smtpServer = "localhost"
; If the SMTP server requires authentication, remove the semicolons ';' in the
; three following lines and write inside the inverted commas "" the appropriate
; username and password. Auth mode: leave this as "login" if you don't know.
; Other available options: plain, cram-md5
;smtpAuth     = "login"
;smtpUser     = ""
;smtpPassword = ""
; You may specify SSL and Port, if the SMTP server of your choice requires them.
;smtpSsl      = ""
;smtpPort     = ""

; If the email is configured to be sent in Text mode, whether to use \r\n or \n
; for the end of line.
; (0 = \r\n  1 = \n)
mailEndOfLine = 0;

;;;;;;;;;
; FRONT ;
;;;;;;;;;

; Optional email support address to show inside error messages, general help and logo alt text
front.supportAddress = "gustavo.solt@mayflower.de"

;;;;;;;;;;;;;;;;;;;;;
; FRONTEND MESSAGES ;
;;;;;;;;;;;;;;;;;;;;;

; Show messages directely to the user if something will be changed on their data,
; projects, modules, items, etc...
; Options: true/ false
frontendMessages = true

; Set how long a frontend messgae is valid in minutes.
validPeriod = 2

; There is a notification to remind the user to a meeting she/he is invited in.
; Define here the minutes where the notification should appear
; before the meeting starts. This should be set in minutes!
remindBefore = 15

; Define the long polling time in seconds. Max. value is 20s!
pollingTime = 20

; Define the polling loops in seconds
; This is the interval after a new poll will be done.
pollingLoop = 30
