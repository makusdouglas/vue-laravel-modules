@extends('application::layouts.master')


<?php
 $cardHeader = config('application.name');
 $cardBody = "Este é um componente Vue.js de um módulo";

 $user1 = [
     "name" => "Admin User",
     "email" => "admin@admin.com",
     "nickname" => "adm"
];

$user2 = [
     "name" => "Test User",
     "email" => "test@test.com",
     "nickname" => "test"
];

 $users = [$user1, $user2];

?>
<div id="App">
    <app-component
        cardheader="Módulo {{config('application.name')}}"
        {{-- cardbody="{{$cardBody}}" --}}
        users='{!! json_encode($users) !!}'
        ></app-component>
</div>

