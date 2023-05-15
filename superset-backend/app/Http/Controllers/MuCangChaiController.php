<?php

namespace App\Http\Controllers;

use App\Models\MuCangChai;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MuCangChaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $muCangChai = MuCangChai::all();
        return response()->json($muCangChai);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'stationId' => 'required',
            'amount' => 'required',
            'time' => 'required'
        ]);
        $muCangChai = MuCangChai::create($request->all());
        return response()->json(['message'=> 'created successfully !', 
        'muCangChai' => $muCangChai]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MuCangChai  $muCangChai
     * @return \Illuminate\Http\Response
     */
    public function show(MuCangChai $muCangChai)
    {
        return $muCangChai;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MuCangChai  $muCangChai
     * @return \Illuminate\Http\Response
     */
    public function edit(MuCangChai $muCangChai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MuCangChai  $muCangChai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MuCangChai $muCangChai)
    {
        $request->validate([
            'stationId' => 'required',
            'amount' => 'required',
            'time' => 'required'
        ]);
        $muCangChai->stationId = $request->input('stationId');
        $muCangChai->amount = $request->input('amount');
        $muCangChai->time = $request->input('time');
        $muCangChai->save();

        return response()->json([
            'message' => 'updated successfully!',
            'muCangChai' => $muCangChai
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MuCangChai  $muCangChai
     * @return \Illuminate\Http\Response
     */
    public function destroy(MuCangChai $muCangChai)
    {
        $muCangChai->delete();
        return response()->json([
            'message' => 'deleted successfully!'
        ]);
    }
    
    public function search($key) {
        $muCangChai = MuCangChai::where('id', 'LIKE', "%".$key."%")
        ->orWhere('stationId','LIKE',"%".$key."%")
        ->orWhere('amount','LIKE',"%".$key."%")
        ->orWhere('time','LIKE',"%".$key."%")
        ->get();
        return response()->json($muCangChai);
    }
}
