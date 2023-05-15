<?php

namespace App\Http\Controllers;

use App\Models\KhauPha;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KhauPhaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $khauPha = KhauPha::all();
        return response()->json($khauPha);
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
        $khauPha = KhauPha::create($request->all());
        return response()->json(['message'=> 'created successfully !', 
        'khauPha' => $khauPha]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhauPha  $khauPha
     * @return \Illuminate\Http\Response
     */
    public function show(KhauPha $khauPha)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhauPha  $khauPha
     * @return \Illuminate\Http\Response
     */
    public function edit(KhauPha $khauPha)
    {
        return $khauPha;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhauPha  $khauPha
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KhauPha $khauPha)
    {
        $request->validate([
            'stationId' => 'required',
            'amount' => 'required',
            'time' => 'required'
        ]);
        $khauPha->stationId = $request->input('stationId');
        $khauPha->amount = $request->input('amount');
        $khauPha->time = $request->input('time');
        $khauPha->save();

        return response()->json([
            'message' => 'updated successfully!',
            'khauPha' => $khauPha
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhauPha  $khauPha
     * @return \Illuminate\Http\Response
     */
    public function destroy(KhauPha $khauPha)
    {
        $khauPha->delete();
        return response()->json([
            'message' => 'deleted successfully!'
        ]);
    }

    public function search($key) {
        $khauPha = KhauPha::where('id', 'LIKE', "%".$key."%")
        ->orWhere('stationId','LIKE',"%".$key."%")
        ->orWhere('amount','LIKE',"%".$key."%")
        ->orWhere('time','LIKE',"%".$key."%")
        ->get();
        return response()->json($khauPha);
    }
}
