<?php

//this file should outline the homepage to allow access to the log page.
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class homeController extends Controller
{
    public function show()
    {
        return view('home');
    }
}