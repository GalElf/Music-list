<?php>
$data = [
    ["artist_name"=> "Alan Walker","name"=>"Faded", "id"=>"60ItHLz5WEA"],
    ["artist_name"=> "Alan Walker","name"=>"Alone", "id"=>"1-xGerv5FOk"],
    ["artist_name"=> "Alan Walker","name"=>"Darkside", "id"=>"M-P4QBt-FWw"],
    ["artist_name"=> "Alan Walker & K-391","name"=>"Ignite", "id"=>"jV3xxOoWe-4"],
    ["artist_name"=> "Alan Walker","name"=>"Sing Me To Sleep", "id"=>"2i2khp_npdE"],
    ["artist_name"=> "Alan Walker","name"=>"Spectre", "id"=>"AOeY-nDp7hI"],
    ];
header('Content-Type: application/json');
echo json_encode($data);