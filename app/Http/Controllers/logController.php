<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lnote;

class logController extends Controller
{
    public function show($logDate)
    {
        //$note = \DB::select('select * from lnote where date = ?', [$logDate]);
        $note = Lnote::where('date', $logDate)->first();
        return view('log', ['content' => $note->note]);
    }
}