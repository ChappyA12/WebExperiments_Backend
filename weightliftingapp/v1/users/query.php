<?php
    
    include($_SERVER['DOCUMENT_ROOT'] . '/weightliftingapp/v1/shared.php');
	include('shared.php');
    
    query(get_PDO());
    
    function query($db) {
        $rows = $db->query('SELECT * FROM users');
        $users = $rows->fetchAll(PDO::FETCH_ASSOC);
        print json_encode(array("users"=>$users));
    }

?>