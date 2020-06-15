<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/log', "logController@index");
Route::get('/log/create', "logController@create");
Route::get('/log/{id}', "logController@show");

/*
1) make the form action goto a get for that data id
2) make the homepage with data selection and submit like above
3) make a post page and tada 


*/