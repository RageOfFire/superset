<?php

namespace App\Http\Controllers;

use App\Models\Map;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MapController extends Controller
{
    public function index()
    {
        $map = Map::all();
        return response()->json($map);
    }
}
