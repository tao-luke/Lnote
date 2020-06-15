<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lnote;

class logController extends Controller
{
    public function show($id)
    {
        $note = Lnote::where('id', $id)->first();
        return $note->note;
    }
    public function index()
    {
        $date = \DB::table('lnotes')->pluck('id');
        return $date->toJson();
    }
}